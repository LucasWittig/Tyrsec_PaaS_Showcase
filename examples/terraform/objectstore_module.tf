# Redacted example — IaC module coupling tenant naming with security defaults.
#
# The module bridges the runtime tenant model and the infrastructure naming
# scheme: an optional tenant id flows into resource names and tags, while
# protective defaults (public access block, encryption, versioning) are set
# unconditionally.
#
# Redacted: concrete resource names, environment identifiers, lifecycle rules.

variable "environment" {
  description = "Deployment environment (e.g. dev, staging, prod)"
  type        = string
}

variable "tenant_id" {
  description = "Optional tenant id; empty string means a shared platform resource"
  type        = string
  default     = ""
}

variable "base_tags" {
  description = "Common tags applied to all resources of this module"
  type        = map(string)
  default     = {}
}

locals {
  tenant_sanitized = lower(replace(var.tenant_id, "/[^a-zA-Z0-9-]/", "-"))
  tenant_suffix    = var.tenant_id != "" ? "-${local.tenant_sanitized}" : ""

  base_tags = merge(var.base_tags, {
    Environment = var.environment
    ManagedBy   = "terraform"
  })

  tags_final = var.tenant_id != "" ? merge(local.base_tags, {
    TenantId = var.tenant_id
  }) : local.base_tags
}

resource "aws_s3_bucket" "objectstore" {
  bucket = "example-objectstore-${var.environment}${local.tenant_suffix}"
  tags   = local.tags_final
}

# Security defaults are not optional inputs — they are fixed in the module.
resource "aws_s3_bucket_public_access_block" "objectstore" {
  bucket = aws_s3_bucket.objectstore.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "objectstore" {
  bucket = aws_s3_bucket.objectstore.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "aws:kms"
    }
  }
}

resource "aws_s3_bucket_versioning" "objectstore" {
  bucket = aws_s3_bucket.objectstore.id

  versioning_configuration {
    status = "Enabled"
  }
}

output "bucket_name" {
  description = "Name of the created object-store bucket"
  value       = aws_s3_bucket.objectstore.bucket
}
