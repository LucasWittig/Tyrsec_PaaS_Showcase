/**
 * Redacted example — capability model of the Universal Connector.
 *
 * Provider functionality is described through capabilities and stable
 * interfaces instead of cloud-specific direct calls. Runtime code depends on
 * the contracts below; the mapping to a concrete provider (AWS, Azure, GCP
 * or a local implementation) is resolved by the connector.
 *
 * Redacted: provider registry, concrete adapter implementations.
 */

export enum ProviderCapability {
  OBJECT_STORE = "object_store",
  MESSAGE_BUS = "message_bus",
  KEY_MANAGEMENT = "key_management",
  EDGE_GATEWAY = "edge_gateway",
}

export interface IObjectStore {
  putObject(bucket: string, key: string, data: Buffer): Promise<string>;
  getObject(bucket: string, key: string): Promise<Buffer>;
  deleteObject(bucket: string, key: string): Promise<void>;
}

export interface IMessageBus {
  publish(topic: string, payload: unknown): Promise<void>;
  subscribe(
    topic: string,
    handler: (payload: unknown) => Promise<void>,
  ): Promise<void>;
}

export interface ProviderAdapter {
  /** Capabilities this adapter can serve. */
  readonly capabilities: ReadonlySet<ProviderCapability>;

  getObjectStore(): IObjectStore;
  getMessageBus(): IMessageBus;
}

/**
 * Resolves an adapter for a required capability. Selection is fail-closed:
 * a missing capability is an explicit error, not a silent fallback.
 */
export function requireCapability(
  adapter: ProviderAdapter,
  capability: ProviderCapability,
): ProviderAdapter {
  if (!adapter.capabilities.has(capability)) {
    throw new Error(`Provider does not support capability: ${capability}`);
  }
  return adapter;
}
