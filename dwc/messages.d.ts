/* eslint-disable */
/* tslint:disable */
/**
 * This is an auto-generated file created by scripts/interfaces-generator.bbj script
 * It contains typing information for all messages that BBj sends to the client.
*/

interface BBjMessage {
  commandId : number
  bbjSessionId : number
}

interface AddButtonToGroupMessage extends BBjMessage {
  buttonID : string
  objectId : string
}

interface AddClassMessage extends BBjMessage {
  className : string
  selector : string
  componentId : string
}

interface AddComboBoxItemsMessage extends BBjMessage {
  items : string[]
  componentId : string
}

interface AddFileChooserDialogFilterMessage extends BBjMessage {
  filter : string
  objectId : string
}

interface AddFileFilterMessage extends BBjMessage {
  description : string
  globs : string[]
  componentId : string
}

interface AddParagraphsMessage extends BBjMessage {
  index : number
  pars : string[]
  componentId : string
}

interface AddStyleDependentNameMessage extends BBjMessage {
  styleName : string
  componentId : string
}

interface AddStyleNameMessage extends BBjMessage {
  styleName : string
  componentId : string
}

interface AddTreeItemMessage extends BBjMessage {
  childNodeID : string
  index : number
  componentId : string
}

interface AddWidgetMessage extends BBjMessage {
  parentCompID : string
  childCompID : string
  dockPosition : number
  clearFirst : boolean
}

interface AddWidgetToNavGroupsMessage extends BBjMessage {
  windowID : string
  controlID : number
  componentId : string
}

interface AppendParagraphMessage extends BBjMessage {
  index : number
  text : string
  componentId : string
}

interface ArrangeMessage extends BBjMessage {
  mode : any
  objectId : string
}

interface BeepMessage extends BBjMessage {
}

interface BrowseMessage extends BBjMessage {
  url : string
  name : string
  features : string
}

interface BrowserBackEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface BrowserCloseEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface BuildBuiManagerMessage extends BBjMessage {
  documentID : string
  objectID : string
}

interface BuildBusyIndicatorMessage extends BBjMessage {
  objectID : string
}

interface BuildButtonMessage extends BBjMessage {
  fastTouchClick : boolean
  objectID : string
}

interface BuildChartMessage extends BBjMessage {
  styleName : string
  objectID : string
}

interface BuildCheckBoxMessage extends BBjMessage {
  objectID : string
}

interface BuildClientFileChooserMessage extends BBjMessage {
  sessionID : number
  roots : any[]
  directory : string
  files : any[]
  objectID : string
}

interface BuildClientFileSaveMessage extends BBjMessage {
  sessionID : number
  roots : any[]
  directory : string
  files : any[]
  objectID : string
}

interface BuildColorChooserMessage extends BBjMessage {
  objectID : string
}

interface BuildDateSpinnerMessage extends BBjMessage {
  inputdID : string
  objectID : string
}

interface BuildDockedChildrenPanelMessage extends BBjMessage {
  tlw : boolean
  flowLayout : boolean
  objectID : string
}

interface BuildDrawPanelMessage extends BBjMessage {
  objectID : string
}

interface BuildEditBoxMessage extends BBjMessage {
  type : string
  objectID : string
}

interface BuildFontChooserMessage extends BBjMessage {
  objectID : string
}

interface BuildGeolocationMessage extends BBjMessage {
  objectID : string
}

interface BuildGroupBoxMessage extends BBjMessage {
  objectID : string
}

interface BuildHtmlEditCKEMessage extends BBjMessage {
  basic : boolean
  ckeditor : boolean
  basicToolbar : boolean
  minimizeToolbar : boolean
  objectID : string
}

interface BuildHtmlEditMessage extends BBjMessage {
  basic : boolean
  ckeditor : boolean
  basicToolbar : boolean
  minimizeToolbar : boolean
  objectID : string
}

interface BuildHtmlViewMessage extends BBjMessage {
  internalTabs : boolean
  contentDiv : boolean
  objectID : string
}

interface BuildImageMessage extends BBjMessage {
  objectID : string
}

interface BuildInputDMessage extends BBjMessage {
  objectID : string
}

interface BuildInputEMessage extends BBjMessage {
  objectID : string
}

interface BuildInputNMessage extends BBjMessage {
  objectID : string
}

interface BuildInputTMessage extends BBjMessage {
  objectID : string
}

interface BuildListBoxMessage extends BBjMessage {
  objectID : string
}

interface BuildListButtonMessage extends BBjMessage {
  objectID : string
}

interface BuildListEditMessage extends BBjMessage {
  objectID : string
}

interface BuildListSpinnerMessage extends BBjMessage {
  textComponentID : string
  objectID : string
}

interface BuildMdiListMenuMessage extends BBjMessage {
  mdiWindowMgrId : string
  objectID : string
}

interface BuildMdiMenuItemMessage extends BBjMessage {
  mdiWindowMgrId : string
  action : any
  objectID : string
}

interface BuildMdiPaneMessage extends BBjMessage {
  objectID : string
}

interface BuildMenuBarMessage extends BBjMessage {
  objectID : string
}

interface BuildMenuButtonMessage extends BBjMessage {
  fastTouchClick : boolean
  objectID : string
}

interface BuildMenuItemMessage extends BBjMessage {
  checkable : boolean
  objectID : string
}

interface BuildMenuMessage extends BBjMessage {
  objectID : string
}

interface BuildNativeListBoxMessage extends BBjMessage {
  objectID : string
}

interface BuildNativeListButtonMessage extends BBjMessage {
  objectID : string
}

interface BuildNativeListEditMessage extends BBjMessage {
  objectID : string
}

interface BuildNavigatorMessage extends BBjMessage {
  fastTouchClick : boolean
  objectID : string
}

interface BuildNumberSpinnerMessage extends BBjMessage {
  inputnID : string
  objectID : string
}

interface BuildPanelMessage extends BBjMessage {
  objectID : string
}

interface BuildPasswordFieldMessage extends BBjMessage {
  objectID : string
}

interface BuildPopupMenuMessage extends BBjMessage {
  objectID : string
}

interface BuildProgressBarMessage extends BBjMessage {
  objectID : string
}

interface BuildRadioButtonMessage extends BBjMessage {
  componentID : string
  objectID : string
}

interface BuildRadioGroupMessage extends BBjMessage {
  objectID : string
}

interface BuildScrollBarMessage extends BBjMessage {
  native : boolean
  objectID : string
}

interface BuildScrollPanelMessage extends BBjMessage {
  objectID : string
}

interface BuildServerDirectoryChooserMessage extends BBjMessage {
  roots : any[]
  directory : string
  objectID : string
}

interface BuildServerFileChooserMessage extends BBjMessage {
  roots : any[]
  directory : string
  files : any[]
  objectID : string
}

interface BuildSimpleWindowMessage extends BBjMessage {
  fieldset : boolean
  objectID : string
}

interface BuildSliderBarMessage extends BBjMessage {
  objectID : string
}

interface BuildSplitterMessage extends BBjMessage {
  objectID : string
}

interface BuildStaticTextMessage extends BBjMessage {
  objectID : string
}

interface BuildStatusBarMessage extends BBjMessage {
  objectID : string
}

interface BuildTabPanelMessage extends BBjMessage {
  objectID : string
}

interface BuildTextAreaMessage extends BBjMessage {
  objectID : string
}

interface BuildTimeSpinnerMessage extends BBjMessage {
  inputtID : string
  objectID : string
}

interface BuildToolButtonMessage extends BBjMessage {
  fastTouchClick : boolean
  objectID : string
}

interface BuildTopLevelWindowMessage extends BBjMessage {
  windowMgrId : string
  windowType : any
  titleBar : boolean
  procID : number
  objectID : string
}

interface BuildTreeItemMessage extends BBjMessage {
  nodeID : number
  objectID : string
}

interface BuildTreeMessage extends BBjMessage {
  objectID : string
}

interface BuildWebComponentMessage extends BBjMessage {
  tagName : string
  objectID : string
}

interface BuildWindowMessage extends BBjMessage {
  tlw : boolean
  objectID : string
}

interface ClearAllGeolocationWatchesMessage extends BBjMessage {
  objectID : string
}

interface ClearComboBoxMessage extends BBjMessage {
  componentId : string
}

interface ClearGeolocationWatchMessage extends BBjMessage {
  watchID : number
  objectID : string
}

interface ClearListBoxMessage extends BBjMessage {
  componentId : string
}

interface ClearListBoxSelectionMessage extends BBjMessage {
  indices : number[]
  componentId : string
}

interface ClearStyleMessage extends BBjMessage {
  style : string
  componentId : string
}

interface ClearTreeMessage extends BBjMessage {
  componentId : string
}

interface ClearTreeSelectionMessage extends BBjMessage {
  componentId : string
}

interface ClearUserPropertiesMessage extends BBjMessage {
  CATEGORY_COOKIES : number
  CATEGORY_STORAGE : number
  CATEGORY_SESSION : number
  category : number
}

interface ClickChooserButtonMessage extends BBjMessage {
  button : number
  componentId : string
}

interface ClientExecMessage extends BBjMessage {
  command : string
}

interface BBjDebugGridResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface BooleanResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface ByteArrayResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface ConsoleReadResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface DateResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface DoubleArrayResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface DoubleResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface FontResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface HashMapIntegerStringResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface HashMapStringStringResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface IntegerArrayResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface IntegerResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface JSONArrayResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface JavaScriptObjectResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface StringArrayResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface StringResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface VoidResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface ClipboardIsFormatAvailableMessage extends BBjMessage {
  responder : any
  mime : string
  respond : boolean
}

interface ClipboardReadMessage extends BBjMessage {
  responder : any
  mime : string
  respond : boolean
}

interface ClipboardReadTextMessage extends BBjMessage {
  responder : any
  fmt : number
  respond : boolean
}

interface ClipboardWriteMessage extends BBjMessage {
  responder : any
  mime : string
  bytes : any
  respond : boolean
}

interface ClipboardWriteTextMessage extends BBjMessage {
  responder : any
  fmt : any
  text : string
  respond : boolean
}

interface CompoundAsyncServerMessage extends BBjMessage {
  msgs : any[]
}

interface CompoundClientMessage extends BBjMessage {
  msgs : any[]
  networkId : number
  pageId : string
  httpSessionId : string
}

interface CompoundServerMessage extends BBjMessage {
  msgs : any[]
}

interface CreateWindowMgrMessage extends BBjMessage {
  mdiPaneId : string
  objectID : string
}

interface DebugElementMessage extends BBjMessage {
  componentId : string
}

interface DoClientValidationFunctionMessage extends BBjMessage {
  text : string
  componentId : string
}

interface DoneLoadingMessage extends BBjMessage {
}

interface EditTreeItemMessage extends BBjMessage {
  startedit : boolean
  componentId : string
}

interface ExceptionResponseMessage extends BBjMessage {
  exception : any
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface ExecuteAsyncScriptMessage extends BBjMessage {
  js : string
  index : number
  componentId : string
}

interface ExecuteScriptMessage extends BBjMessage {
  js : string
  objectID : string
}

interface ExpandDirectoryMessage extends BBjMessage {
  expandRequest : number
  directories : string[]
  componentId : string
}

interface FileDownloadMessage extends BBjMessage {
  uuid : string
  filename : string
}

interface FinishFlushMessage extends BBjMessage {
}

interface FinishFlushSyncMessage extends BBjMessage {
}

interface FlushCommandsAndContinueMessage extends BBjMessage {
}

interface FlushCommandsAndWaitMessage extends BBjMessage {
}

interface GeolocationPositionEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GeolocationWatchEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GetAbsoluteLocationMessage extends BBjMessage {
  componentId : string
}

interface GetAllToolbarStylesMessage extends BBjMessage {
  componentId : string
}

interface GetApplicationNameMessage extends BBjMessage {
}

interface GetAttributeMessage extends BBjMessage {
  attribute : string
  selector : string
  componentId : string
}

interface GetAvailableStatesMessage extends BBjMessage {
  componentId : string
}

interface GetBackgroundSelectionColorMessage extends BBjMessage {
  componentId : string
}

interface GetBasicToolbarStylesMessage extends BBjMessage {
  componentId : string
}

interface GetBooleanValueMessage extends BBjMessage {
  objectID : string
}

interface GetBrowserNameMessage extends BBjMessage {
}

interface GetBrowserTitleMessage extends BBjMessage {
}

interface GetChooserButtonTextMessage extends BBjMessage {
  button : number
  componentId : string
}

interface GetClassListMessage extends BBjMessage {
  selector : string
  componentId : string
}

interface GetClientAddressMessage extends BBjMessage {
}

interface GetClientHostnameMessage extends BBjMessage {
}

interface GetClientLocaleMessage extends BBjMessage {
}

interface GetClientLocalesMessage extends BBjMessage {
}

interface GetClientOsNameMessage extends BBjMessage {
}

interface GetClientOsVersionMessage extends BBjMessage {
}

interface GetClientPropertyMessage extends BBjMessage {
  property : object
  componentId : string
}

interface GetCloseActionMessage extends BBjMessage {
  errAction : boolean
}

interface GetComputedPxMessage extends BBjMessage {
  property : string
  componentId : string
}

interface GetComputedStyleMessage extends BBjMessage {
  property : string
  pseudo : string
  selector : string
  componentId : string
}

interface GetCurrentParagraphIndexMessage extends BBjMessage {
  componentId : string
}

interface GetCursorPosMessage extends BBjMessage {
  componentId : string
}

interface GetDisplayAttributesMessage extends BBjMessage {
}

interface GetDoubleValueMessage extends BBjMessage {
  objectID : string
}

interface GetDragActionsMessage extends BBjMessage {
  componentId : string
}

interface GetDragEnabledMessage extends BBjMessage {
  componentId : string
}

interface GetDrawPanelDataURLMessage extends BBjMessage {
  componentId : string
}

interface GetDropActionsMessage extends BBjMessage {
  componentId : string
}

interface GetDropdownButtonWidthMessage extends BBjMessage {
  componentId : string
}

interface GetEditBoxTypeMessage extends BBjMessage {
  objectID : string
}

interface GetElementDataURLMessage extends BBjMessage {
  componentID : string
  tlw : boolean
  responder : any
}

interface GetElementPropertyMessage extends BBjMessage {
  property : string
  componentId : string
}

interface GetExpandedTreeItemsMessage extends BBjMessage {
  componentId : string
}

interface GetFileChooserDirectoryMessage extends BBjMessage {
  componentId : string
}

interface GetFileFilterMessage extends BBjMessage {
  componentId : string
}

interface GetFocusedControlMessage extends BBjMessage {
  componentId : string
}

interface GetFontMetricsMessage extends BBjMessage {
  family : string
  style : number
  size : number
}

interface GetFontValueMessage extends BBjMessage {
  componentId : string
}

interface GetFontsScaledMessage extends BBjMessage {
  componentId : string
}

interface GetGeolocationPositionMessage extends BBjMessage {
  objectID : string
}

interface GetHorizontalScrollBarHeightMessage extends BBjMessage {
  componentId : string
}

interface GetHorizontalScrollBarValueMessage extends BBjMessage {
  componentId : string
}

interface GetHorizontalScrollBarWidthMessage extends BBjMessage {
  componentId : string
}

interface GetHorizontalScrollPositionMessage extends BBjMessage {
  componentId : string
}

interface GetHorizontalScrollWidthMessage extends BBjMessage {
  componentId : string
}

interface GetHtmlEditVersionMessage extends BBjMessage {
  componentId : string
}

interface GetHtmlMessage extends BBjMessage {
  objectID : string
}

interface GetInputTextMessage extends BBjMessage {
  componentId : string
}

interface GetIntegerValueMessage extends BBjMessage {
  componentId : string
}

interface GetJulianValueMessage extends BBjMessage {
  componentId : string
}

interface GetLastCollapsedTreeItemMessage extends BBjMessage {
  componentId : string
}

interface GetLastDeselectedTreeItemMessage extends BBjMessage {
  componentId : string
}

interface GetLastExpandedTreeItemMessage extends BBjMessage {
  componentId : string
}

interface GetLastSelectedTreeItemMessage extends BBjMessage {
  componentId : string
}

interface GetLineCountMessage extends BBjMessage {
  componentId : string
}

interface GetLocaleMessage extends BBjMessage {
  objectID : string
}

interface GetLocationMessage extends BBjMessage {
  componentId : string
}

interface GetMdiClientPositionMessage extends BBjMessage {
  objectID : string
}

interface GetMdiSizeMessage extends BBjMessage {
  size : any
  objectID : string
}

interface GetParagraphMessage extends BBjMessage {
  index : number
  componentId : string
}

interface GetPreferredSizeMessage extends BBjMessage {
  componentId : string
}

interface GetProgressBarMaximumMessage extends BBjMessage {
  componentId : string
}

interface GetProgressBarMinimumMessage extends BBjMessage {
  componentId : string
}

interface GetProgressBarValueMessage extends BBjMessage {
  componentId : string
}

interface GetPublicAddressMessage extends BBjMessage {
  retry : number
  ms : number
  responder : any
}

interface GetScriptValueMessage extends BBjMessage {
  objectID : string
}

interface GetSelectedButtonGroupIndexMessage extends BBjMessage {
  objectID : string
}

interface GetSelectedIndexMessage extends BBjMessage {
  componentId : string
}

interface GetSelectedIndicesMessage extends BBjMessage {
  componentId : string
}

interface GetSelectedTabIndexMessage extends BBjMessage {
  componentId : string
}

interface GetSelectedTextMessage extends BBjMessage {
  componentId : string
}

interface GetSelectedTreeItemsMessage extends BBjMessage {
  componentId : string
}

interface GetShouldDoOptimizationsMessage extends BBjMessage {
}

interface GetShowAllFilesMessage extends BBjMessage {
  componentId : string
}

interface GetShowConfirmCloseDialogMessage extends BBjMessage {
}

interface GetSizeMessage extends BBjMessage {
  componentId : string
}

interface GetSliderLabelsMessage extends BBjMessage {
  objectID : string
}

interface GetSliderValueMessage extends BBjMessage {
  objectID : string
}

interface GetSpellCheckLanguageMessage extends BBjMessage {
  objectID : string
}

interface GetSpinnerListIndexMessage extends BBjMessage {
  objectID : string
}

interface GetSpinnerNextDateMessage extends BBjMessage {
  objectID : string
}

interface GetSpinnerNextTimeMessage extends BBjMessage {
  objectID : string
}

interface GetSpinnerPreviousDateMessage extends BBjMessage {
  objectID : string
}

interface GetSpinnerPreviousTimeMessage extends BBjMessage {
  objectID : string
}

interface GetStateMessage extends BBjMessage {
  state : string
  objectID : string
}

interface GetStatusBarSegmentRectangleMessage extends BBjMessage {
  index : number
  componentId : string
}

interface GetStringArrayValueMessage extends BBjMessage {
  componentId : string
}

interface GetStyleMessage extends BBjMessage {
  style : string
  selector : string
  componentId : string
}

interface GetTabBoundsMessage extends BBjMessage {
  index : number
  componentId : string
}

interface GetTextAreaSelectionMessage extends BBjMessage {
  componentId : string
}

interface GetTextBoxSelectionMessage extends BBjMessage {
  componentId : string
}

interface GetTextMessage extends BBjMessage {
  objectID : string
}

interface GetTextSelectionColorMessage extends BBjMessage {
  componentId : string
}

interface GetThemeMessage extends BBjMessage {
}

interface GetThumbSizeMessage extends BBjMessage {
  componentId : string
}

interface GetTimeValueMessage extends BBjMessage {
  componentId : string
}

interface GetTopLevelWindowContentSizeMessage extends BBjMessage {
  componentId : string
}

interface GetTopLevelWindowLocationMessage extends BBjMessage {
  componentId : string
}

interface GetTreeItemStateMessage extends BBjMessage {
  componentId : string
}

interface GetTreeItemTextMessage extends BBjMessage {
  componentId : string
}

interface GetUnformattedMessage extends BBjMessage {
  componentId : string
}

interface GetUrlMessage extends BBjMessage {
}

interface GetUserAgentStringMessage extends BBjMessage {
}

interface GetUserPropertiesMessage extends BBjMessage {
  category : number
  properties : any[]
}

interface GetUserPropertyMessage extends BBjMessage {
  category : number
  key : string
}

interface GetVerticalScrollBarHeightMessage extends BBjMessage {
  componentId : string
}

interface GetVerticalScrollBarValueMessage extends BBjMessage {
  componentId : string
}

interface GetVerticalScrollBarWidthMessage extends BBjMessage {
  componentId : string
}

interface GetVerticalScrollHeightMessage extends BBjMessage {
  componentId : string
}

interface GetVerticalScrollPositionMessage extends BBjMessage {
  componentId : string
}

interface GetWindowLocationMessage extends BBjMessage {
  componentId : string
}

interface GetWindowSizeMessage extends BBjMessage {
  componentId : string
}

interface GetWindowValuesMessage extends BBjMessage {
  componentId : string
}

interface HeartbeatMessage extends BBjMessage {
}

interface HidePopupMenuMessage extends BBjMessage {
  componentId : string
}

interface HidePrintPopupMessage extends BBjMessage {
  job : string
}

interface InitializeCKEditorMessage extends BBjMessage {
  responder : any
  respond : boolean
}

interface InitializeMessage extends BBjMessage {
  params : any
}

interface InjectLinkUrlMessage extends BBjMessage {
  url : string
  top : boolean
  attributes : any
  componentId : string
}

interface InjectScriptMessage extends BBjMessage {
  js : string
  top : boolean
  attributes : any
  componentId : string
}

interface InjectScriptUrlMessage extends BBjMessage {
  url : string
  top : boolean
  attributes : any
  componentId : string
}

interface InjectStyleMessage extends BBjMessage {
  style : string
  top : boolean
  attributes : any
}

interface InjectStyleUrlMessage extends BBjMessage {
  url : string
  top : boolean
  attributes : any
  componentId : string
}

interface InsertComboBoxItemMessage extends BBjMessage {
  item : string
  index : number
  componentId : string
}

interface InsertComboBoxItemsMessage extends BBjMessage {
  index : number
  items : string[]
  componentId : string
}

interface InsertListBoxItemMessage extends BBjMessage {
  item : string
  index : number
  componentId : string
}

interface InsertListBoxItemsMessage extends BBjMessage {
  items : string[]
  index : number
  componentId : string
}

interface InsertMenuItemMessage extends BBjMessage {
  itemID : string
  index : number
  componentId : string
}

interface InsertSeparatorMessage extends BBjMessage {
  index : number
  componentId : string
}

interface InsertTabItemMessage extends BBjMessage {
  widgetID : string
  text : string
  index : number
  componentId : string
}

interface IsDirtyMessage extends BBjMessage {
  objectID : string
}

interface IsDropdownMenuVisibleMessage extends BBjMessage {
  objectID : string
}

interface IsEnabledMessage extends BBjMessage {
  componentId : string
}

interface IsGeolocationAvailableMessage extends BBjMessage {
  objectID : string
}

interface IsHorizontalScrollBarVisibleMessage extends BBjMessage {
  componentId : string
}

interface IsMaximizedMessage extends BBjMessage {
  componentId : string
}

interface IsPopupMenuVisibleMessage extends BBjMessage {
  componentId : string
}

interface IsSpellCheckedMessage extends BBjMessage {
  objectID : string
}

interface IsTabCloseableMessage extends BBjMessage {
  index : number
  objectID : string
}

interface IsTabEnabledMessage extends BBjMessage {
  index : number
  objectID : string
}

interface IsToolButtonDownMessage extends BBjMessage {
  objectID : string
}

interface IsTouchSupportedMessage extends BBjMessage {
}

interface IsTreeItemSelectedMessage extends BBjMessage {
  objectID : string
}

interface IsVerticalScrollBarVisibleMessage extends BBjMessage {
  componentId : string
}

interface IsVisibleMessage extends BBjMessage {
  componentId : string
}

interface MaximizeMessage extends BBjMessage {
  maximized : boolean
  componentId : string
}

interface ModifyClassNameMessage extends BBjMessage {
  titlebar : boolean
  oldClass : string[]
  newClass : string[]
  componentId : string
}

interface NotifyDialogMessage extends BBjMessage {
  msg : string
  title : string
  nag : boolean
  nagCode : string
}

interface PackMessage extends BBjMessage {
  componentId : string
}

interface PlaySoundMessage extends BBjMessage {
  url : string
  loop : boolean
}

interface PrintFocusableListMessage extends BBjMessage {
  componentId : string
}

interface PrintHtmlViewContentMessage extends BBjMessage {
  objectID : string
}

interface PutClientPropertyMessage extends BBjMessage {
  property : object
  value : object
  componentId : string
}

interface RegisterFormValidationMessage extends BBjMessage {
  validateableID : string
  componentId : string
}

interface RemoveAttributeMessage extends BBjMessage {
  attribute : string
  selector : string
  componentId : string
}

interface RemoveButtonFromGroupMessage extends BBjMessage {
  index : number
  objectId : string
}

interface RemoveClassMessage extends BBjMessage {
  className : string
  selector : string
  componentId : string
}

interface RemoveComboBoxItemMessage extends BBjMessage {
  index : number
  componentId : string
}

interface RemoveDropdownMenuMessage extends BBjMessage {
  componentId : string
}

interface RemoveFileChooserDialogMessage extends BBjMessage {
  componentId : string
}

interface RemoveFileFilterMessage extends BBjMessage {
  description : string
  componentId : string
}

interface RemoveListBoxItemMessage extends BBjMessage {
  index : number
  componentId : string
}

interface RemoveMenuItemMessage extends BBjMessage {
  index : number
  componentId : string
}

interface RemoveParagraphMessage extends BBjMessage {
  index : number
  componentId : string
}

interface RemovePopupMenuMessage extends BBjMessage {
  componentId : string
}

interface RemoveStyleDependentNameMessage extends BBjMessage {
  styleName : string
  componentId : string
}

interface RemoveStyleNameMessage extends BBjMessage {
  styleName : string
  componentId : string
}

interface RemoveTabItemMessage extends BBjMessage {
  index : number
  componentId : string
}

interface RemoveTopLevelWindowGlassMessage extends BBjMessage {
  click : boolean
  componentId : string
}

interface RemoveTreeItemMessage extends BBjMessage {
  componentId : string
}

interface RemoveWidgetFromNavGroupsMessage extends BBjMessage {
  windowID : string
  componentId : string
}

interface RemoveWidgetMessage extends BBjMessage {
  parentCompID : string
  childCompID : string
}

interface RestoreMessage extends BBjMessage {
  componentId : string
}

interface RevalidateMDIMessage extends BBjMessage {
  objectId : string
}

interface RevalidateMessage extends BBjMessage {
  componentId : string
}

interface ScrollDirectoryToVisibleMessage extends BBjMessage {
  directory : string
  componentId : string
}

interface ScrollFileNameToVisibleMessage extends BBjMessage {
  filename : string
  componentId : string
}

interface ScrollTreeItemToVisibleMessage extends BBjMessage {
  componentId : string
}

interface SelectAllMessage extends BBjMessage {
  componentId : string
}

interface SelectionChangeEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface SetAcceleratorMessage extends BBjMessage {
  keystroke : any
  componentId : string
}

interface SetAcceptableMessage extends BBjMessage {
  acceptable : boolean
  uniqueCallbackKey : number
  componentId : string
}

interface SetAccessKeyMessage extends BBjMessage {
  key : any
  componentId : string
}

interface SetAmPmStringsMessage extends BBjMessage {
  am : string
  pm : string
  componentId : string
}

interface SetAttributeMessage extends BBjMessage {
  attribute : string
  value : string
  selector : string
  componentId : string
}

interface SetBackgroundSelectionColorMessage extends BBjMessage {
  color : string
  componentId : string
}

interface SetBasicToolbarMessage extends BBjMessage {
  basicToolbar : boolean
  componentId : string
}

interface SetBasicToolbarStylesMessage extends BBjMessage {
  styles : any[]
  componentId : string
}

interface SetBeepMessage extends BBjMessage {
  beep : boolean
  componentId : string
}

interface SetBlockIncrementMessage extends BBjMessage {
  blockIncrement : number
  componentId : string
}

interface SetBooleanPropertyMessage extends BBjMessage {
  property : string
  value : boolean
  componentId : string
}

interface SetBooleanValueMessage extends BBjMessage {
  value : boolean
  fireEvents : boolean
  objectId : string
}

interface SetBrowserTitleMessage extends BBjMessage {
  title : string
}

interface SetCEditTracksContainerBoundsMessage extends BBjMessage {
  track : boolean
  componentId : string
}

interface SetCancelButtonMessage extends BBjMessage {
  buttonId : string
  componentId : string
}

interface SetCaptionTextMessage extends BBjMessage {
  captionText : string
  componentId : string
}

interface SetCausesControlValidationMessage extends BBjMessage {
  causes : boolean
  componentId : string
}

interface SetChildWindowMessage extends BBjMessage {
  childWindow : boolean
  componentId : string
}

interface SetChooserButtonAccessKeyMessage extends BBjMessage {
  button : number
  accessKey : any
  componentId : string
}

interface SetChooserButtonMnemonicIndexMessage extends BBjMessage {
  button : number
  index : number
  componentId : string
}

interface SetChooserButtonTextMessage extends BBjMessage {
  button : number
  text : string
  componentId : string
}

interface SetChooserButtonsVisibleMessage extends BBjMessage {
  visible : boolean
  componentId : string
}

interface SetClientValidationFunctionMessage extends BBjMessage {
  javascript : string
  componentId : string
}

interface SetClientValidationInvalidMessage extends BBjMessage {
  invalid : string
  componentId : string
}

interface SetClientValidationRequiredMessage extends BBjMessage {
  required : boolean
  componentId : string
}

interface SetCloseActionMessage extends BBjMessage {
  errAction : boolean
  actionType : number
  actionValue : string
}

interface SetComboBoxDropDownHeightMessage extends BBjMessage {
  height : number
  componentId : string
}

interface SetComboBoxDropDownOpenMessage extends BBjMessage {
  open : boolean
  componentId : string
}

interface SetComboBoxDropDownWidthMessage extends BBjMessage {
  width : any
  componentId : string
}

interface SetComboBoxHeightMessage extends BBjMessage {
  height : number
  componentId : string
}

interface SetComboBoxIndexMessage extends BBjMessage {
  index : number
  componentId : string
}

interface SetComboBoxListSearchMessage extends BBjMessage {
  listSearchTimeout : any
  componentId : string
}

interface SetComboBoxRowCountMessage extends BBjMessage {
  rows : number
  componentId : string
}

interface SetComboBoxWidthMessage extends BBjMessage {
  width : number
  componentId : string
}

interface SetCommaMessage extends BBjMessage {
  comma : any
  componentId : string
}

interface SetComponentsBaseMessage extends BBjMessage {
  componentsBase : string
}

interface SetContentPaneMessage extends BBjMessage {
  childCompID : string
  flowLayout : any
  componentId : string
}

interface SetCursorPosMessage extends BBjMessage {
  cursorPos : number
  componentId : string
}

interface SetCustomFontMessage extends BBjMessage {
  customFont : boolean
  componentId : string
}

interface SetDateOffsetMessage extends BBjMessage {
  offset : number
  componentId : string
}

interface SetDatePivotMessage extends BBjMessage {
  pivot : boolean
  componentId : string
}

interface SetDefaultButtonMessage extends BBjMessage {
  buttonId : string
  componentId : string
}

interface SetDisableOnClickMessage extends BBjMessage {
  disableOnClick : boolean
  componentId : string
}

interface SetDockedChildrenPanelBorderColorMessage extends BBjMessage {
  borderColor : string
  componentId : string
}

interface SetDockedChildrenPanelBorderMessage extends BBjMessage {
  paintsBorder : boolean
  componentId : string
}

interface SetDotMessage extends BBjMessage {
  dot : any
  componentId : string
}

interface SetDoubleValueMessage extends BBjMessage {
  value : any
  objectId : string
}

interface SetDragActionsMessage extends BBjMessage {
  dragActions : number
  componentId : string
}

interface SetDragEnabledMessage extends BBjMessage {
  dragEnabled : boolean
  componentId : string
}

interface SetDragTypeMessage extends BBjMessage {
  dragType : string
  componentId : string
}

interface SetDrawPanelMessage extends BBjMessage {
  drawPanelId : string
  componentId : string
}

interface SetDrawPanelTrackingMessage extends BBjMessage {
  tracking : boolean
  componentId : string
}

interface SetDropActionsMessage extends BBjMessage {
  dropActions : number
  componentId : string
}

interface SetDropTypesMessage extends BBjMessage {
  dropTypes : string[]
  componentId : string
}

interface SetDropdownButtonWidthMessage extends BBjMessage {
  dropdownButtonWidth : number
  componentId : string
}

interface SetDropdownMenuMessage extends BBjMessage {
  popupMenuID : string
  componentId : string
}

interface SetDropdownMenuVisibleMessage extends BBjMessage {
  popupMenuID : string
  visible : boolean
  componentId : string
}

interface SetEditBoxPassHomeDeleteMessage extends BBjMessage {
  passHomeDelete : boolean
  componentId : string
}

interface SetEnabledMessage extends BBjMessage {
  enabled : boolean
  componentId : string
}

interface SetFileChooserDialogDirectoryMessage extends BBjMessage {
  directory : string
  files : any[]
  objectId : string
}

interface SetFileChooserDialogTypeMessage extends BBjMessage {
  dialogType : number
  componentId : string
}

interface SetFileChooserDirectoryMessage extends BBjMessage {
  directory : string
  files : any[]
  componentId : string
}

interface SetFileChooserDropZoneVisibleMessage extends BBjMessage {
  visible : boolean
  componentId : string
}

interface SetFileChooserMultipleSelectMessage extends BBjMessage {
  multipleSelect : boolean
  componentId : string
}

interface SetFileChooserNewFolderEnabledMessage extends BBjMessage {
  newFolderEnabled : boolean
  componentId : string
}

interface SetFileFilterMessage extends BBjMessage {
  description : string
  componentId : string
}

interface SetFileSelectionModeMessage extends BBjMessage {
  selectFiles : boolean
  selectDirectories : boolean
  componentId : string
}

interface SetFirstComponentMessage extends BBjMessage {
  widgetID : string
  componentId : string
}

interface SetFirstFocusableMessage extends BBjMessage {
  first : string
  componentId : string
}

interface SetFlowLayoutMessage extends BBjMessage {
  flowLayout : boolean
  componentId : string
}

interface SetFocusMessage extends BBjMessage {
  componentId : string
}

interface SetFocusTraversalKeysMessage extends BBjMessage {
  traversalProp : string
  traversalKeys : any
  componentId : string
}

interface SetFocusableMessage extends BBjMessage {
  focusable : boolean
  componentId : string
}

interface SetFontValueMessage extends BBjMessage {
  family : string
  style : number
  size : number
  componentId : string
}

interface SetFontsScaledMessage extends BBjMessage {
  value : boolean
  componentId : string
}

interface SetForwardAcceleratorsMessage extends BBjMessage {
  forward : boolean
  componentId : string
}

interface SetFullWidthTitleMessage extends BBjMessage {
  fullWidth : boolean
  componentId : string
}

interface SetGeolocationOptionsMessage extends BBjMessage {
  enableHighAccuracy : boolean
  maximumAge : any
  timeout : any
  objectId : string
}

interface SetHandlesKeyEventsMessage extends BBjMessage {
  handlesKeyEvents : boolean
  componentId : string
}

interface SetHorizontalScrollBarValueMessage extends BBjMessage {
  value : number
  componentId : string
}

interface SetHorizontalScrollPositionMessage extends BBjMessage {
  position : number
  componentId : string
}

interface SetHorizontalScrollbarMessage extends BBjMessage {
  scrollbar : boolean
  componentId : string
}

interface SetHtmlMessage extends BBjMessage {
  text : string
  reset : boolean
  componentId : string
}

interface SetImageAtIndexMessage extends BBjMessage {
  index : number
  imageInfo : any
  url : string
  visibleRect : boolean
  x : number
  y : number
  w : number
  h : number
  imageWidth : number
  componentId : string
}

interface SetImageInfoMessage extends BBjMessage {
  url : string
  visibleRect : boolean
  x : number
  y : number
  w : number
  h : number
  imageWidth : number
  componentId : string
}

interface SetImageSizeAtIndexMessage extends BBjMessage {
  index : number
  imageWidth : any
  imageHeight : any
  componentId : string
}

interface SetImageSizeMessage extends BBjMessage {
  imageWidth : any
  imageHeight : any
  componentId : string
}

interface SetImageUrlAndVisibleRectMessage extends BBjMessage {
  imageUrl : string
  x : number
  y : number
  w : number
  h : number
  componentId : string
}

interface SetImageUrlMessage extends BBjMessage {
  imageUrl : string
  componentId : string
}

interface SetIndexVisibleMessage extends BBjMessage {
  index : number
  componentId : string
}

interface SetInputPassEnterMessage extends BBjMessage {
  passEnter : boolean
  componentId : string
}

interface SetInputPassTabMessage extends BBjMessage {
  passTab : boolean
  componentId : string
}

interface SetInsertModeMessage extends BBjMessage {
  insert : boolean
  componentId : string
}

interface SetIntegerValueMessage extends BBjMessage {
  value : number
  componentId : string
}

interface SetLastFocusableMessage extends BBjMessage {
  last : string
  componentId : string
}

interface SetLineWrapMessage extends BBjMessage {
  lineWrap : boolean
  componentId : string
}

interface SetListBoxIndexMessage extends BBjMessage {
  index : number
  componentId : string
}

interface SetListBoxIndicesMessage extends BBjMessage {
  clear : boolean
  indices : number[]
  componentId : string
}

interface SetListButtonDeselectMessage extends BBjMessage {
  deselect : boolean
  componentId : string
}

interface SetListPageSizeMessage extends BBjMessage {
  pageSize : number
  componentId : string
}

interface SetListStyleMessage extends BBjMessage {
  index : number
  style : string
  value : string
  componentId : string
}

interface SetLocaleMessage extends BBjMessage {
  locale : string
  componentId : string
}

interface SetLocationMessage extends BBjMessage {
  x : number
  y : number
  componentId : string
}

interface SetLongCueMessage extends BBjMessage {
  longCue : string
  componentId : string
}

interface SetMaskMessage extends BBjMessage {
  mask : string
  componentId : string
}

interface SetMaskRoundingMessage extends BBjMessage {
  maskRounding : boolean
  componentId : string
}

interface SetMaxLengthMessage extends BBjMessage {
  maxLength : number
  componentId : string
}

interface SetMaximumMessage extends BBjMessage {
  value : any
  componentId : string
}

interface SetMaximumSizeMessage extends BBjMessage {
  maximumWidth : number
  maximumHeight : number
  componentId : string
}

interface SetMdiBackgroundImageMessage extends BBjMessage {
  mdiWindowMgrId : string
  location : number
  url : string
  visibleRect : boolean
  x : number
  y : number
  w : number
  h : number
  imageWidth : number
}

interface SetMdiBorderMessage extends BBjMessage {
  mdiWindowMgrId : string
  tlwId : string
  direction : number
}

interface SetMdiMenuItemActionMessage extends BBjMessage {
  mdiWindowMgrId : string
  action : string
  objectID : string
}

interface SetMdiToolbarMessage extends BBjMessage {
  mdiWindowMgrId : string
  toolbarWindowId : string
}

interface SetMdiToolbarSizeMessage extends BBjMessage {
  height : number
  mdiWindowMgrId : string
}

interface SetMenuBarMessage extends BBjMessage {
  windowID : string
  menubarID : string
}

interface SetMenuBarMinimumHeightMessage extends BBjMessage {
  height : number
  componentId : string
}

interface SetMetaMessage extends BBjMessage {
  name : string
  content : string
  attributes : any
}

interface SetMinimumMessage extends BBjMessage {
  value : any
  componentId : string
}

interface SetMinimumSizeMessage extends BBjMessage {
  minimumWidth : number
  minimumHeight : number
  componentId : string
}

interface SetMultipleSelectMessage extends BBjMessage {
  multipleSelect : boolean
  componentId : string
}

interface SetNavigatorButtonWidthMessage extends BBjMessage {
  width : number
  componentId : string
}

interface SetNegateableMessage extends BBjMessage {
  negateable : boolean
  componentId : string
}

interface SetNoEdgeMessage extends BBjMessage {
  noEdge : boolean
  componentId : string
}

interface SetOpaqueMessage extends BBjMessage {
  opaque : boolean
  componentId : string
}

interface SetOrientationMessage extends BBjMessage {
  orientation : number
  componentId : string
}

interface SetOvertypeModeMessage extends BBjMessage {
  overtype : boolean
  componentId : string
}

interface SetPadCharacterMessage extends BBjMessage {
  pad : any
  componentId : string
}

interface SetPaddingBottomMessage extends BBjMessage {
  paddingBottom : number
  componentId : string
}

interface SetPaddingLeftMessage extends BBjMessage {
  paddingLeft : number
  componentId : string
}

interface SetPaddingRightMessage extends BBjMessage {
  paddingRight : number
  componentId : string
}

interface SetPaddingTopMessage extends BBjMessage {
  paddingTop : number
  componentId : string
}

interface SetPlaceholderColorMessage extends BBjMessage {
  color : string
  componentId : string
}

interface SetPopupMenuMessage extends BBjMessage {
  popupMenuID : string
  componentId : string
}

interface SetPopupMenuRowCountMessage extends BBjMessage {
  rows : number
  componentId : string
}

interface SetPopupTargetMessage extends BBjMessage {
  popupID : string
  targetID : string
}

interface SetPreserveSizeMessage extends BBjMessage {
  preserveSize : boolean
  componentId : string
}

interface SetProgressBarIndeterminateMessage extends BBjMessage {
  indeterminate : boolean
  componentId : string
}

interface SetProgressBarMaximumMessage extends BBjMessage {
  value : any
  componentId : string
}

interface SetProgressBarMinimumMessage extends BBjMessage {
  value : any
  componentId : string
}

interface SetProgressBarOrientationMessage extends BBjMessage {
  orientation : number
  componentId : string
}

interface SetProgressBarTextVisibleMessage extends BBjMessage {
  visible : boolean
  componentId : string
}

interface SetProgressBarValueMessage extends BBjMessage {
  value : any
  componentId : string
}

interface SetRadioButtonSelectMessage extends BBjMessage {
  selectOnFocus : boolean
  componentId : string
}

interface SetReadOnlyMessage extends BBjMessage {
  readonly : boolean
  componentId : string
}

interface SetReportAllKeyEventsMessage extends BBjMessage {
  reportAllKeyEvents : boolean
  componentId : string
}

interface SetReportAllMouseEventsMessage extends BBjMessage {
  reportAllMouseEvents : boolean
  componentId : string
}

interface SetResizableMessage extends BBjMessage {
  resizable : boolean
  componentId : string
}

interface SetRestoreMessage extends BBjMessage {
  restore : string
  componentId : string
}

interface SetRestrictedDirectoryMessage extends BBjMessage {
  restrictedDirectory : string
  componentId : string
}

interface SetRightMouseClickableMessage extends BBjMessage {
  value : boolean
  componentId : string
}

interface SetSecondComponentMessage extends BBjMessage {
  widgetID : string
  componentId : string
}

interface SetSelectAllOnKeyFocusMessage extends BBjMessage {
  selectAllOnKeyFocus : boolean
  componentId : string
}

interface SetSelectAllOnMouseFocusMessage extends BBjMessage {
  selectAllOnMouseFocus : boolean
  componentId : string
}

interface SetSelectAllOnRequestFocusMessage extends BBjMessage {
  selectAllOnRequestFocus : boolean
  componentId : string
}

interface SetSelectedTabIndexMessage extends BBjMessage {
  index : number
  componentId : string
}

interface SetSelectionRangeMessage extends BBjMessage {
  selectionStart : number
  selectionEnd : number
  componentId : string
}

interface SetShouldDoOptimizationMessage extends BBjMessage {
  key : string
  value : string
}

interface SetShowAllFilesMessage extends BBjMessage {
  value : boolean
  componentId : string
}

interface SetShowConfirmCloseDialogMessage extends BBjMessage {
  showConfirmDialog : boolean
}

interface SetShowWeeksMessage extends BBjMessage {
  showWeeks : boolean
  componentId : string
}

interface SetSizeMessage extends BBjMessage {
  width : number
  height : number
  componentId : string
}

interface SetSliderInvertedMessage extends BBjMessage {
  inverted : boolean
  componentId : string
}

interface SetSliderLabelsMessage extends BBjMessage {
  indices : number[]
  labels : string[]
  componentId : string
}

interface SetSliderMajorTickSpacingMessage extends BBjMessage {
  value : number
  componentId : string
}

interface SetSliderMinorTickSpacingMessage extends BBjMessage {
  value : number
  componentId : string
}

interface SetSliderPaintLabelsMessage extends BBjMessage {
  paint : boolean
  componentId : string
}

interface SetSliderPaintTicksMessage extends BBjMessage {
  paint : boolean
  componentId : string
}

interface SetSliderSnapToTicksMessage extends BBjMessage {
  snap : boolean
  componentId : string
}

interface SetSliderValueMessage extends BBjMessage {
  value : any
  componentId : string
}

interface SetSlotMessage extends BBjMessage {
  slot : string
  controlID : string
  componentId : string
}

interface SetSpellCheckLanguageMessage extends BBjMessage {
  spellCheckLanguage : string
  componentId : string
}

interface SetSpellCheckedMessage extends BBjMessage {
  spellChecked : any
  componentId : string
}

interface SetSpinnerDateFieldMessage extends BBjMessage {
  field : number
  componentId : string
}

interface SetSpinnerListIndexMessage extends BBjMessage {
  index : number
  componentId : string
}

interface SetSpinnerListMessage extends BBjMessage {
  list : any
  componentId : string
}

interface SetSpinnerMaximumMessage extends BBjMessage {
  value : any
  componentId : string
}

interface SetSpinnerMinimumMessage extends BBjMessage {
  value : any
  componentId : string
}

interface SetSpinnerStepSizeMessage extends BBjMessage {
  value : any
  componentId : string
}

interface SetSpinnerTimeFieldMessage extends BBjMessage {
  field : number
  componentId : string
}

interface SetSpinnerValueMessage extends BBjMessage {
  value : any
  componentId : string
}

interface SetStateMessage extends BBjMessage {
  state : string
  value : any
  componentId : string
}

interface SetStatusBarAlignmentMessage extends BBjMessage {
  index : number
  align : number
  componentId : string
}

interface SetStatusBarHeightMessage extends BBjMessage {
  height : number
  componentId : string
}

interface SetStatusBarMessage extends BBjMessage {
  statusbarID : string
  dockPosition : number
  componentId : string
}

interface SetStatusBarOffsetsMessage extends BBjMessage {
  offsets : number[]
  componentId : string
}

interface SetStatusBarTextMessage extends BBjMessage {
  index : number
  text : string
  componentId : string
}

interface SetStringArrayValueMessage extends BBjMessage {
  value : any[]
  componentId : string
}

interface SetStyleMessage extends BBjMessage {
  style : string
  value : string
  selector : string
  componentId : string
}

interface SetTabAccessKeyMessage extends BBjMessage {
  index : number
  key : number
  componentId : string
}

interface SetTabCloseableMessage extends BBjMessage {
  index : number
  closeable : boolean
  componentId : string
}

interface SetTabEnabledMessage extends BBjMessage {
  index : number
  enabled : boolean
  componentId : string
}

interface SetTabHeightMessage extends BBjMessage {
  height : any
  componentId : string
}

interface SetTabItemMessage extends BBjMessage {
  widgetID : string
  index : number
  componentId : string
}

interface SetTabPlacementMessage extends BBjMessage {
  placement : number
  componentId : string
}

interface SetTabStyleMessage extends BBjMessage {
  index : number
  style : string
  value : string
  componentId : string
}

interface SetTabTextMessage extends BBjMessage {
  index : number
  text : string
  componentId : string
}

interface SetTabTitleMessage extends BBjMessage {
  index : number
  title : string
  componentId : string
}

interface SetTextAreaLimitsMessage extends BBjMessage {
  maxLineCount : number
  maxLineLength : number
  maxLength : number
  componentId : string
}

interface SetTextAreaSelectionMessage extends BBjMessage {
  par1 : number
  off1 : number
  par2 : number
  off2 : number
  componentId : string
}

interface SetTextAtIndexMessage extends BBjMessage {
  index : number
  text : string
  componentId : string
}

interface SetTextLeftMessage extends BBjMessage {
  value : boolean
  componentId : string
}

interface SetTextMessage extends BBjMessage {
  text : string
  componentId : string
}

interface SetTextSelectionColorMessage extends BBjMessage {
  color : string
  componentId : string
}

interface SetThemeMessage extends BBjMessage {
  theme : string
  dark : string
  light : string
}

interface SetThumbSizeMessage extends BBjMessage {
  value : number
  componentId : string
}

interface SetTitleBarVisibleMessage extends BBjMessage {
  visible : boolean
  componentId : string
}

interface SetTitleMessage extends BBjMessage {
  title : string
  componentId : string
}

interface SetToggleableMessage extends BBjMessage {
  toggleable : boolean
  componentId : string
}

interface SetToolButtonDownMessage extends BBjMessage {
  down : boolean
  componentId : string
}

interface SetTopLevelWindowEnabledMessage extends BBjMessage {
  enabled : boolean
  componentId : string
}

interface SetTopLevelWindowMessage extends BBjMessage {
  topLevelWindowID : string
  componentId : string
}

interface SetTreeCollapsedIconMessage extends BBjMessage {
  imageInfo : any
  url : string
  visibleRect : boolean
  x : number
  y : number
  w : number
  h : number
  imageWidth : number
  componentId : string
}

interface SetTreeEditableMessage extends BBjMessage {
  editable : boolean
  componentId : string
}

interface SetTreeExpandedIconMessage extends BBjMessage {
  imageInfo : any
  url : string
  visibleRect : boolean
  x : number
  y : number
  w : number
  h : number
  imageWidth : number
  componentId : string
}

interface SetTreeImageSizeMessage extends BBjMessage {
  imageWidth : any
  imageHeight : any
  componentId : string
}

interface SetTreeItemEditableMessage extends BBjMessage {
  editable : boolean
  componentId : string
}

interface SetTreeItemInfoMessage extends BBjMessage {
  text : string
  icon : any
  url : string
  visibleRect : boolean
  x : number
  y : number
  w : number
  h : number
  imageWidth : number
  selectedIcon : any
  selectedIcon_url : string
  selectedIcon_visibleRect : boolean
  selectedIcon_x : number
  selectedIcon_y : number
  selectedIcon_w : number
  selectedIcon_h : number
  selectedIcon_imageWidth : number
  componentId : string
}

interface SetTreeItemSelectedMessage extends BBjMessage {
  selected : boolean
  componentId : string
}

interface SetTreeItemStateMessage extends BBjMessage {
  state : boolean
  componentId : string
}

interface SetTreeLeafIconMessage extends BBjMessage {
  imageInfo : any
  url : string
  visibleRect : boolean
  x : number
  y : number
  w : number
  h : number
  imageWidth : number
  componentId : string
}

interface SetTreeNodeDragTypeMessage extends BBjMessage {
  nodeID : number
  dragType : string
  componentId : string
}

interface SetTreeNodeDropTypesMessage extends BBjMessage {
  nodeID : number
  dropTypes : string[]
  componentId : string
}

interface SetTreeRootMessage extends BBjMessage {
  nodeID : string
  componentId : string
}

interface SetTreeRootVisibleMessage extends BBjMessage {
  visible : boolean
  componentId : string
}

interface SetTreeSelectedIconMessage extends BBjMessage {
  imageInfo : any
  url : string
  visibleRect : boolean
  x : number
  y : number
  w : number
  h : number
  imageWidth : number
  componentId : string
}

interface SetTreeSelectionModeMessage extends BBjMessage {
  mode : number
  componentId : string
}

interface SetUnformattedMessage extends BBjMessage {
  unformatted : boolean
  componentId : string
}

interface SetUrlMessage extends BBjMessage {
  url : string
  componentId : string
}

interface SetUserPropertiesMessage extends BBjMessage {
  category : number
  samesite : string
  path : string
  properties : any
}

interface SetUserPropertyMessage extends BBjMessage {
  category : number
  samesite : string
  path : string
  key : string
  value : string
}

interface SetVerticalScrollBarValueMessage extends BBjMessage {
  value : number
  componentId : string
}

interface SetVerticalScrollPositionMessage extends BBjMessage {
  position : number
  componentId : string
}

interface SetVerticalScrollbarMessage extends BBjMessage {
  scrollbar : boolean
  componentId : string
}

interface SetVisibleMessage extends BBjMessage {
  visible : boolean
  componentId : string
}

interface SetWidgetMessage extends BBjMessage {
  widgetID : string
  componentId : string
}

interface SetWindowClosableMessage extends BBjMessage {
  closable : boolean
  componentId : string
}

interface SetWindowIconifiableMessage extends BBjMessage {
  iconifiable : boolean
  componentId : string
}

interface SetWindowLocationMessage extends BBjMessage {
  x : number
  y : number
  componentId : string
}

interface SetWindowMaximizableMessage extends BBjMessage {
  maximizable : boolean
  componentId : string
}

interface SetWindowTitleMessage extends BBjMessage {
  title : string
  componentId : string
}

interface SetWindowVisibleMessage extends BBjMessage {
  visible : boolean
  componentId : string
}

interface SetWordBreakMessage extends BBjMessage {
  wordBreak : boolean
  componentId : string
}

interface SetWordWrapMessage extends BBjMessage {
  wrap : boolean
  componentId : string
}

interface ShowDatePickerMessage extends BBjMessage {
  componentId : string
}

interface ShowFileChooserDialogMessage extends BBjMessage {
  sessionID : number
  dialogType : number
  title : string
  roots : any[]
  directory : string
  files : any[]
  filename : string
  filters : any[]
  selectFiles : boolean
  selectDirectories : boolean
  client : boolean
  restricted : boolean
  style : string
  attributes : any
  objectId : string
}

interface ShowHelpDialogMessage extends BBjMessage {
  url : string
}

interface ShowHelpWindowMessage extends BBjMessage {
  url : string
}

interface ShowMsgBoxMessage extends BBjMessage {
  dialog : number
  name : string
  text : string
  title : string
  rawText : boolean
  msgType : number
  icon : number
  buttons : string[]
  styles : string[]
  results : number[]
  default : number
  x : string
  y : string
  w : string
  h : string
  timeout : number
  image : string
  imagewidth : string
  imageheight : string
  attributes : any
}

interface ShowPopupMenuMessage extends BBjMessage {
  x : number
  y : number
  uiobjectID : string
  componentId : string
}

interface ShowPrintPopupMessage extends BBjMessage {
  job : string
}

interface ShowPromptMessage extends BBjMessage {
  name : string
  text : string
  title : string
  default : string
  rawText : boolean
  icon : number
  buttons : string[]
  styles : string[]
  x : string
  y : string
  w : string
  h : string
  timeout : number
  image : string
  imagewidth : string
  imageheight : string
  attributes : any
}

interface ShowTimePickerMessage extends BBjMessage {
  componentId : string
}

interface ShowToolTipTextMessage extends BBjMessage {
  x : number
  y : number
  componentId : string
}

interface ShowUserLoginDialogMessage extends BBjMessage {
  title : string
  userPrompt : string
  passwordPrompt : string
  rememberUsername : string
  loginButton : string
  cancelButton : string
  user : string
  attributes : any
}

interface SpinSpinnerMessage extends BBjMessage {
  increase : boolean
  componentId : string
}

interface TerminateMessage extends BBjMessage {
}

interface UnregisterFormValidationMessage extends BBjMessage {
  validateableID : string
  componentId : string
}

interface UpdateDockedWidgetMessage extends BBjMessage {
  childCompID : string
  size : any
  componentId : string
}

interface UpdateFocusableMessage extends BBjMessage {
  next : string
  prev : string
  componentId : string
}

interface WatchGeolocationPositionMessage extends BBjMessage {
  objectID : string
}

interface ActivateEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ActiveWindowEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ButtonPushEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface CheckChangeEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface CheckOffEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface CheckOnEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ClickEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface CloseEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ColorChooserApproveEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ColorChooserCancelEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ColorChooserChangeEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ControlScrollEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface DeactivateEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface DoubleClickEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface DragSourceDropEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface DropTargetDropEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface EditKeypressEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface EditModifyEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ExecuteScriptEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface FileChooserApproveEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface FileChooserCancelEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface FileChooserChangeEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface FileChooserFilterEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface FontChooserApproveEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface FontChooserCancelEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface FontChooserChangeEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface FormValidationEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GainedFocusEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridCellModifyEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridCellSelectionChangedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridCheckOffEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridCheckOnEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridColumnSelectionChangedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridColumnSizeEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridDoubleClickEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridEditStartEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridEditStopEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridEnterKeyEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridGainedFocusEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridHitBottomEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridHitTopEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridKeypressEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridLeftColumnChangeEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridLostFocusEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridMouseDownEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridMouseMoveEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridMouseUpEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridRightMouseDownEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridRightMouseUpEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridRowSelectionChangedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridSelectCellEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridSelectColumnEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridSelectRowEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridSpecialKeyEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface GridTopRowChangeEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface HyperlinkActivateEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface HyperlinkEnterEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface HyperlinkExitEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface InactiveWindowEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface InputKeypressEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface KeypressEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface LinkFailedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface LinkLoadedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ListCancelEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ListChangeEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ListClickEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ListCloseEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ListDoubleClickEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ListOpenEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ListSelectEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface LostFocusEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface MenuItemSelectEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface MouseDownEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface MouseEnterEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface MouseExitEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface MouseMoveEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface MouseScrollEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface MouseUpEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface NativeJavaScriptEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface NavigatorFirstEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface NavigatorLastEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface NavigatorNextEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface NavigatorPreviousEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface NoOpFieldChangedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface NoOpFileChooserExpandEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface NoOpGridSynchEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface NoOpPopupRegistrationEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface PageLoadedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface PopupMenuItemSelectEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface PopupRequestEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ResizeEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface RightMouseDownEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ScreenResizeEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ScriptFailedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ScriptLoadedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface SpinEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface StateChangeEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TabCloseEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TabDeselectedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TabKeypressEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TabPopupEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TabSelectedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface ToolButtonPushEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TreeMouseDoubleClickEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TreeMouseDownEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TreeMouseUpEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TreeNodeCollapsedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TreeNodeDeselectedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TreeNodeEditStoppedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TreeNodeExpandedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TreeNodeSelectedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TreeRightMouseDownEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface TreeRightMouseUpEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface WebComponentDefinedEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface WebEventCallbackMessage extends BBjMessage {
  event : string
  eventType : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface WindowGainedFocusEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface WindowLostFocusEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface WindowMoveEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface WindowScrollEventCallbackMessage extends BBjMessage {
  event : string
  ucbk : number
  enabled : boolean
  componentId : string
}

interface AddConsoleRowMessage extends BBjMessage {
  objectId : string
}

interface BuildConsoleMessage extends BBjMessage {
  floatWindow : boolean
  windowMgrId : string
  objectID : string
}

interface ConsoleReadMessage extends BBjMessage {
  objectId : string
  terminators : any
  timeout : number
  length : number
  lengthTerminates : boolean
}

interface ConsoleTerminateMessage extends BBjMessage {
  objectId : string
}

interface ReadConsoleMessage extends BBjMessage {
  prompt : string
  objectId : string
}

interface SetConsoleSizeMessage extends BBjMessage {
  rows : number
  cols : number
  objectId : string
}

interface WriteConsoleMessage extends BBjMessage {
  text : string
  outputType : any
  objectId : string
}

interface DrawArcMessage extends BBjMessage {
  x : number
  y : number
  radius : number
  aspect : any
  startAngle : any
  endAngle : any
  pie : boolean
  penWidth : any
  penColor : string
  pattern : number
  mode : number
  units : number
  fill : number
  fillColor : string
  backColor : string
  componentId : string
}

interface DrawArrowMessage extends BBjMessage {
  x1 : number
  y1 : number
  x2 : number
  y2 : number
  penWidth : any
  penColor : string
  pattern : number
  head : boolean
  tail : boolean
  mode : number
  units : number
  componentId : string
}

interface DrawClearMessage extends BBjMessage {
  color : string
  componentId : string
}

interface DrawEllipseMessage extends BBjMessage {
  x : number
  y : number
  width : number
  height : number
  penWidth : any
  penColor : string
  pattern : number
  fill : number
  fillColor : string
  backColor : string
  mode : number
  units : number
  componentId : string
}

interface DrawImageMessage extends BBjMessage {
  url : string
  x1 : number
  y1 : number
  x2 : number
  y2 : number
  units : number
  componentId : string
}

interface DrawLineMessage extends BBjMessage {
  x1 : any
  y1 : any
  x2 : any
  y2 : any
  penWidth : any
  penColor : string
  pattern : number
  mode : number
  units : number
  componentId : string
}

interface DrawPointMessage extends BBjMessage {
  x : any
  y : any
  penWidth : any
  penColor : string
  mode : number
  units : number
  componentId : string
}

interface DrawPolygonMessage extends BBjMessage {
  x : number[]
  y : number[]
  penWidth : any
  penColor : string
  pattern : number
  fill : number
  fillColor : string
  backColor : string
  mode : number
  units : number
  componentId : string
}

interface DrawPolylineMessage extends BBjMessage {
  x : number[]
  y : number[]
  penWidth : any
  color : string
  pattern : number
  mode : number
  units : number
  componentId : string
}

interface DrawRectMessage extends BBjMessage {
  x1 : any
  y1 : any
  x2 : any
  y2 : any
  penWidth : any
  penColor : string
  pattern : number
  fill : number
  fillColor : string
  backColor : string
  roundX : any
  roundY : any
  mode : number
  units : number
  componentId : string
}

interface DrawTextMessage extends BBjMessage {
  text : string
  x : number
  y : number
  opaque : number
  backcolor : string
  textcolor : string
  font : string
  size : any
  underline : boolean
  strikethrough : boolean
  mode : number
  units : number
  componentId : string
}

interface MeasureTextListMessage extends BBjMessage {
  text : any[]
  font : string
  componentId : string
}

interface MeasureTextMessage extends BBjMessage {
  text : string
  font : string
  componentId : string
}

interface PopMessage extends BBjMessage {
  componentId : string
}

interface PushMessage extends BBjMessage {
  componentId : string
}

interface SetEnableRepaintMessage extends BBjMessage {
  repaint : boolean
  componentId : string
}

interface SetPaintMenuBarLineMessage extends BBjMessage {
  paintMenu : boolean
  componentId : string
}

interface SetPatternMessage extends BBjMessage {
  pattern : number
  componentId : string
}

interface SetPenColorMessage extends BBjMessage {
  pencolor : string
  componentId : string
}

interface SetPenWidthMessage extends BBjMessage {
  penwidth : any
  componentId : string
}

interface SetScribbleMessage extends BBjMessage {
  scribble : boolean
  componentId : string
}

interface SetVirtualCoordinatesMessage extends BBjMessage {
  x1 : number
  y1 : number
  x2 : number
  y2 : number
  componentId : string
}

interface SetWorldCoordinatesMessage extends BBjMessage {
  x1 : number
  y1 : number
  x2 : number
  y2 : number
  componentId : string
}

interface BuildDAGridMessage extends BBjMessage {
  cols : number
  rows : number
  rowHeaderID : string
  colHeaderID : string
  fieldID : string
  objectID : string
}

interface BuildGridMessage extends BBjMessage {
  cols : number
  rows : number
  rowHeaderID : string
  colHeaderID : string
  fieldID : string
  objectID : string
}

interface BuildGridSectionMessage extends BBjMessage {
  section : string
  objectID : string
}

interface DAGridMessage extends BBjMessage {
  gridMessageType : any
  stringArg : string
  booleanArg : any
  oldData : string[]
  newData : string[]
  intArgs : number[]
  componentId : string
}

interface GridDebugMessage extends BBjMessage {
  gridMessageType : any
  strings : string[]
  componentId : string
}

interface GridDefaultsUpdateMessage extends BBjMessage {
  key : string
  value : string
  componentId : string
}

interface GridFieldUpdateMessage extends BBjMessage {
  rows : number
  cols : number
  sizeChanged : boolean
  updates : any
  newCellStyles : any
  componentId : string
}

interface GridGetBooleanValueMessage extends BBjMessage {
  gridMessageType : any
  stringArg : string
  intArgs : number[]
  componentId : string
}

interface GridGetCellValueMessage extends BBjMessage {
  gridMessageType : any
  intArgs : number[]
  componentId : string
}

interface GridGetDebugGridValueMessage extends BBjMessage {
  gridMessageType : any
  intArgs : number[]
  componentId : string
}

interface GridGetIntArrayValueMessage extends BBjMessage {
  gridMessageType : any
  intArgs : number[]
  componentId : string
}

interface GridGetIntValueMessage extends BBjMessage {
  gridMessageType : any
  intArgs : number[]
  componentId : string
}

interface GridGetStringValueMessage extends BBjMessage {
  gridMessageType : any
  intArgs : number[]
  stringArg1 : string
  stringArg2 : string
  componentId : string
}

interface GridGetWindowSynchDataResponseMessage extends BBjMessage {
  value : object
  origMsg : string
  networkId : number
  pageId : string
  httpSessionId : string
}

interface GridGetWindowSynchDataMessage extends BBjMessage {
  componentId : string
}

interface GridHeaderUpdateMessage extends BBjMessage {
  isRowHeader : boolean
  size : number
  sizeChanged : boolean
  updates : any
  defaults : any
  newCellStyles : any
  componentId : string
}

interface GridSetCellListSelectionMessage extends BBjMessage {
  row : number
  col : number
  index : number
  repaint : boolean
  componentId : string
}

interface GridSetCellValueMessage extends BBjMessage {
  gridMessageType : any
  cell : any
  cellList : any[]
  componentId : string
}

interface GridSetDoubleMessage extends BBjMessage {
  gridMessageType : any
  stringArg : string
  booleanArg : any
  doubleArgs : any
  componentId : string
}

interface GridSetListMessage extends BBjMessage {
  row : number
  col : number
  listID : string
  componentId : string
}

interface GridSetStringsMessage extends BBjMessage {
  gridMessageType : any
  strings : string[]
  componentId : string
}

interface GridSetValueMessage extends BBjMessage {
  shouldDelay : boolean
  gridMessageType : any
  stringArg : string
  booleanArg : any
  intArgs : number[]
  componentId : string
}

