/**
 * Get the icon pool and name from the given attribute
 *
 * The attribute format can be any of:
 * <ol>
 * <li> <b>URL</b>: (ex: /path/to/image.png)
 * <li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)
 * <li> <b>ICON_NAME</b>: An icon to load from the default BBj icons pool. (ex: `folder`)
 * <li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: `feather:folder`)
 * <li> <b>An object</b> which provides all the required properties to build the icon.
 *    for instance:
 *    <ol>
 *      <li> {name: 'folder}
 *      <li> {pool: 'feather' name: 'folder}
 *      <li> {src: 'image/path'}
 *      <li> {src: 'image/path' , x: 'x attribute' , y: 'y attribute'  , ...}
 *    </ol>
 * </ol>
 **/
export declare const iconAttributesFromString: (icon: string | object) => {
    name?: string;
    src?: string;
    pool?: string;
};
