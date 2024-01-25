import { EventEmitter } from '../../stencil-public-runtime';
/**
 * A configurable login dialog
 *
 * @slot before-header - The dialog's before header section
 * @slot after-header - The dialog's after header section
 * @slot before-content - The dialog's before content section
 * @slot after-content - The dialog's after content section
 * @slot before-footer - The dialog's before footer section
 * @slot after-footer - The dialog's after footer section
 *
 * @part dialog - The dialog (bbj-dialog)
 * @part form - The dialog's form
 * @part header - The dialog's header
 * @part content - The dialog's content
 * @part footer - The dialog's footer (buttons & checkbox)
 * @part buttons - The buttons wrapper
 * @part cancel-button - The cancel button (bbj-button)
 * @part signin-button - The signin button (bbj-button)
 * @part rememberme-input - The checkbox input
 * @part password-input - The password input (bbj-editbox)
 * @part username-input - The username input (bbj-editbox)
 *
 * @hostClass BBjUserAuthentication - Always applied
 *
 * @bbjControl BBjUserAuthentication
 * @bbjControlLink https://documentation.basis.cloud/BASISHelp/WebHelp/usr/BBj_Components/BBjServices/bbj_user_authentication.htm?Highlight=Authentication%20
 *
 * @bbjMessage ShowUserLoginDialogMessage
 *
 * @author Hyyan Abo Fakher
 */
export declare class BbjLogin {
    private $submitButton;
    private $usernameInput;
    private $passwordInput;
    el: HTMLBbjLoginElement;
    /** When true and the [PasswordCredential](https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential) is supported by the browser, the form will be submitted automatically. */
    autoSignin: boolean;
    /** When true, all components in the dialog will be disabled. */
    disabled: boolean;
    /** When true, empty passwords will be valid. */
    emptyPassword: boolean;
    /** The dialog translation object */
    i18n: {
        title?: string;
        usernamePrompt?: string;
        passwordPrompt?: string;
        rememberMe?: string;
        loginButton?: string;
        cancelButton?: string;
    };
    /** Specifies the dialog max width.  */
    maxWidth: string;
    /** Specifies the dialog max height.  */
    maxHeight: string;
    /** True when the dialog is opened, closed otherwise. */
    opened: boolean;
    onOpenedChanged(newOpened: any): void;
    /** The default password */
    password: string;
    /** A String indicating whether the user will be required to log on for every visit to the website. Valid values are "silent", "optional", or "required". */
    passwordMediation: 'silent' | 'required' | 'optional';
    /** When true, rememberme will checked by default, unchecked otherwise */
    rememberme: boolean;
    /** The default username */
    username: string;
    /** Emitted after the form is submitted. */
    submitEvent: EventEmitter<{
        username: string;
        password: string;
    }>;
    /** Emitted after the cancel button is clicked. */
    cancelEvent: EventEmitter<void>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private submit;
    private handleFormSubmit;
    private handleDialogOpened;
    private handleSigninClicked;
    private handleCancelClicked;
    private handleUsernameChanged;
    private handlePasswordChanged;
    private handleRemembermeChanged;
    private handleDialogKeydown;
    private validateUsername;
    private validatePassword;
    private saveState;
    private loadState;
    render(): any;
}
