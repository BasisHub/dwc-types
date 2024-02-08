declare enum BbjHighlightBehaviors {
    /** Contents of the control are automatically highlighted when the control gets focus by tabbing into it. */
    KEY = "KEY",
    /** Contents of the control are automatically highlighted when the control gets focus by clicking into it with the mouse. */
    MOUSE = "MOUSE",
    /** Contents of the control are automatically highlighted when the control gets focus under program control by calling the `setFocus` method. */
    REQUEST = "REQUEST"
}
export { BbjHighlightBehaviors };
