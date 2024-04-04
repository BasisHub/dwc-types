/**
 * The store of created components , where key is the objectID
 * and the value is the created component (ex: button)
 */
declare const objects: Map<string | number, any>;

/**
 * The server message
 */
declare const message: BBjMessage;

/**
 * Send a message/event back to the server
 *
 * @param json The Json Object
 */
declare function sendClientEvent(json: object): void;

/**
 * The BBj configuration object.
 *
 * Used by messages and components to store global settings
 */
declare const Dwc: object;
