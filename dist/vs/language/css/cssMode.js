!function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports)
void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vs/language/css/workerManager",["require","exports"],e)}(function(e,n){function t(e){var n,t,i=new r(function(e,r){n=e,t=r},function(){})
return e.then(n,t),i}var r=monaco.Promise,i=function(){function e(e){var n=this
this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return n._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e=this,n=[],r=0;r<arguments.length;r++)n[r-0]=arguments[r]
var i
return t(this._getClient().then(function(e){i=e}).then(function(t){return e._worker.withSyncedResources(n)}).then(function(e){return i}))},e}()
n.WorkerManager=i}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports)
void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vscode-languageserver-types/main",["require","exports"],e)}(function(e,n){var t,r,i,o,u
!function(e){e.create=function(e,n){return{line:e,character:n}},e.is=function(e){var n=e
return s.defined(n)&&s.number(n.line)&&s.number(n.character)}}(t=n.Position||(n.Position={})),function(e){e.create=function(e,n,r,i){if(s.number(e)&&s.number(n)&&s.number(r)&&s.number(i))return{start:t.create(e,n),end:t.create(r,i)}
if(t.is(e)&&t.is(n))return{start:e,end:n}
throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+r+", "+i+"]")},e.is=function(e){var n=e
return s.defined(n)&&t.is(n.start)&&t.is(n.end)}}(r=n.Range||(n.Range={})),function(e){e.create=function(e,n){return{uri:e,range:n}},e.is=function(e){var n=e
return s.defined(n)&&r.is(n)&&(s.string(n.uri)||s.undefined(n.uri))}}(n.Location||(n.Location={})),function(e){e.create=function(e,n,t,r,i){var o={range:e,message:n}
return s.defined(t)&&(o.severity=t),s.defined(r)&&(o.code=r),s.defined(i)&&(o.source=i),o},e.is=function(e){var n=e
return s.defined(n)&&r.is(n.range)&&s.string(n.message)&&(s.number(n.severity)||s.undefined(n.severity))&&(s.number(n.code)||s.string(n.code)||s.undefined(n.code))&&(s.string(n.source)||s.undefined(n.source))}}(i=n.Diagnostic||(n.Diagnostic={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r]
var i={title:e,command:n}
return s.defined(t)&&t.length>0&&(i.arguments=t),i},e.is=function(e){var n=e
return s.defined(n)&&s.string(n.title)&&s.string(n.title)}}(o=n.Command||(n.Command={})),function(e){e.replace=function(e,n){return{range:e,newText:n}},e.insert=function(e,n){return{range:{start:e,end:e},newText:n}},e.del=function(e){return{range:e,newText:""}}}(u=n.TextEdit||(n.TextEdit={}))
var a=function(){function e(){this.workspaceEdit={changes:Object.create(null)},this.textEditChanges=Object.create(null)}return Object.defineProperty(e.prototype,"edit",{get:function(){return this.workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){var n=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,n){this.edits.push(u.insert(e,n))},e.prototype.replace=function(e,n){this.edits.push(u.replace(e,n))},e.prototype.delete=function(e){this.edits.push(u.del(e))},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}(),t=this.textEditChanges[e]
if(!t){var r=[]
this.workspaceEdit.changes[e]=r,t=new n(r),this.textEditChanges[e]=t}return t},e}()
n.WorkspaceChange=a,function(e){e.create=function(e){return{uri:e}},e.is=function(e){var n=e
return s.defined(n)&&s.string(n.uri)}}(n.TextDocumentIdentifier||(n.TextDocumentIdentifier={})),function(e){e.create=function(e,n){return{uri:e,version:n}},e.is=function(e){var n=e
return s.defined(n)&&s.string(n.uri)&&s.number(n.version)}}(n.VersionedTextDocumentIdentifier||(n.VersionedTextDocumentIdentifier={})),function(e){e.create=function(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}},e.is=function(e){var n=e
return s.defined(n)&&s.string(n.uri)&&s.string(n.languageId)&&s.number(n.version)&&s.string(n.text)}}(n.TextDocumentItem||(n.TextDocumentItem={})),function(e){e.create=function(e){return{label:e}}}(n.CompletionItem||(n.CompletionItem={})),function(e){e.create=function(e,n){return{items:e||[],isIncomplete:!!n}}}(n.CompletionList||(n.CompletionList={})),function(e){e.create=function(e,n){return n?{label:e,documentation:n}:{label:e}}}(n.ParameterInformation||(n.ParameterInformation={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r]
var i={label:e}
return s.defined(n)&&(i.documentation=n),s.defined(t)?i.parameters=t:i.parameters=[],i}}(n.SignatureInformation||(n.SignatureInformation={})),function(e){e.create=function(e,n){var t={range:e}
return s.number(n)&&(t.kind=n),t}}(n.DocumentHighlight||(n.DocumentHighlight={})),function(e){e.create=function(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}}
return i&&(o.containerName=i),o}}(n.SymbolInformation||(n.SymbolInformation={})),function(e){e.create=function(e){return{diagnostics:e}},e.is=function(e){var n=e
return s.defined(n)&&s.typedArray(n.diagnostics,i.is)}}(n.CodeActionContext||(n.CodeActionContext={})),function(e){e.create=function(e,n){var t={range:e}
return s.defined(n)&&(t.data=n),t},e.is=function(e){var n=e
return s.defined(n)&&r.is(n.range)&&(s.undefined(n.command)||o.is(n.command))}}(n.CodeLens||(n.CodeLens={})),function(e){e.create=function(e,n){return{tabSize:e,insertSpaces:n}},e.is=function(e){var n=e
return s.defined(n)&&s.number(n.tabSize)&&s.boolean(n.insertSpaces)}}(n.FormattingOptions||(n.FormattingOptions={})),function(e){e.create=function(e,n,t,r){return new c(e,n,t,r)},e.is=function(e){var n=e
return!!(s.defined(n)&&s.string(n.uri)&&(s.undefined(n.languageId)||s.string(n.languageId))&&s.number(n.lineCount)&&s.func(n.getText)&&s.func(n.positionAt)&&s.func(n.offsetAt))}}(n.TextDocument||(n.TextDocument={}))
var s,c=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(){return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1)
var i=n.charAt(r)
t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0)
var n=this.getLineOffsets(),r=0,i=n.length
if(0===i)return t.create(0,e)
for(;r<i;){var o=Math.floor((r+i)/2)
n[o]>e?i=o:r=o+1}var u=r-1
return t.create(u,e-n[u])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets()
if(e.line>=n.length)return this._content.length
if(e.line<0)return 0
var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length
return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}()
!function(e){var n=Object.prototype.toString
e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===n.call(e)},e.number=function(e){return"[object Number]"===n.call(e)},e.func=function(e){return"[object Function]"===n.call(e)},e.typedArray=function(e,n){return Array.isArray(e)&&e.every(n)}}(s||(s={}))}),define("vscode-languageserver-types",["vscode-languageserver-types/main"],function(e){return e}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports)
void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vs/language/css/languageFeatures",["require","exports","vscode-languageserver-types"],e)}(function(e,n){function t(e,n){var t="number"==typeof n.code?String(n.code):n.code
return{severity:function(e){switch(e){case 1:return monaco.Severity.Error
case 2:return monaco.Severity.Warning
case 3:case 4:default:return monaco.Severity.Info}}(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source}}function r(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function i(e){if(e)return new c(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function o(e){return{uri:s.parse(e.uri),range:i(e.range)}}function u(e){if(e&&e.changes){var n=[]
for(var t in e.changes)for(var r=0,o=e.changes[t];r<o.length;r++){var u=o[r]
n.push({resource:s.parse(t),range:i(u.range),newText:u.newText})}return{edits:n}}}function a(e,n){return e.onCancellationRequested(function(){return n.cancel()}),n}var s=(e("vscode-languageserver-types"),monaco.Uri),c=monaco.Range,f=function(){function e(e,n){var t=this
this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null)
var r=function(e){var n,r=e.getModeId()
r===t._languageId&&(t._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(n),n=setTimeout(function(){return t._doValidate(e.uri,r)},500)}),t._doValidate(e.uri,r))},i=function(e){delete t._listener[e.uri.toString()]}
this._disposables.push(monaco.editor.onDidCreateModel(r)),this._disposables.push(monaco.editor.onWillDisposeModel(i)),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){i(e.model),r(e.model)})),this._disposables.push({dispose:function(){for(var e in t._listener)t._listener[e].dispose()}}),monaco.editor.getModels().forEach(r)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then(function(n){return n.doValidation(e.toString())}).then(function(r){var i=r.map(function(e){return t(0,e)})
monaco.editor.setModelMarkers(monaco.editor.getModel(e),n,i)}).done(void 0,function(e){console.error(e)})},e}()
n.DiagnostcsAdapter=f
var d=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t){var o=(e.getWordUntilPosition(n),e.uri)
return a(t,this._worker(o).then(function(e){return e.doComplete(o.toString(),r(n))}).then(function(e){if(e){var n=e.items.map(function(e){return{label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:function(e){var n=monaco.languages.CompletionItemKind
switch(e){case 1:return n.Text
case 2:return n.Method
case 3:return n.Function
case 4:return n.Constructor
case 5:return n.Field
case 6:return n.Variable
case 7:return n.Class
case 8:return n.Interface
case 9:return n.Module
case 10:return n.Property
case 11:return n.Unit
case 12:return n.Value
case 13:return n.Enum
case 14:return n.Keyword
case 15:return n.Snippet
case 16:return n.Color
case 17:return n.File
case 18:return n.Reference}return n.Property}(e.kind),textEdit:function(e){if(e)return{range:i(e.range),text:e.newText}}(e.textEdit)}})
return{isIncomplete:e.isIncomplete,items:n}}}))},e}()
n.CompletionAdapter=d
var l=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var o=e.uri
return a(t,this._worker(o).then(function(e){return e.doHover(o.toString(),r(n))}).then(function(e){if(e)return{range:i(e.range),contents:function(e){if(e)return Array.isArray(e)?e:[e]}(e.contents)}}))},e}()
n.HoverAdapter=l
var g=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,n,t){var o=e.uri
return a(t,this._worker(o).then(function(e){return e.findDocumentHighlights(o.toString(),r(n))}).then(function(e){if(e)return e.map(function(e){return{range:i(e.range),kind:function(e){switch(e){case 2:return monaco.languages.DocumentHighlightKind.Read
case 3:return monaco.languages.DocumentHighlightKind.Write
case 1:return monaco.languages.DocumentHighlightKind.Text}return monaco.languages.DocumentHighlightKind.Text}(e.kind)}})}))},e}()
n.DocumentHighlightAdapter=g
var p=function(){function e(e){this._worker=e}return e.prototype.provideDefinition=function(e,n,t){var i=e.uri
return a(t,this._worker(i).then(function(e){return e.findDefinition(i.toString(),r(n))}).then(function(e){if(e)return[o(e)]}))},e}()
n.DefinitionAdapter=p
var h=function(){function e(e){this._worker=e}return e.prototype.provideReferences=function(e,n,t,i){var u=e.uri
return a(i,this._worker(u).then(function(e){return e.findReferences(u.toString(),r(n))}).then(function(e){if(e)return e.map(o)}))},e}()
n.ReferenceAdapter=h
var m=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,n,t,i){var o=e.uri
return a(i,this._worker(o).then(function(e){return e.doRename(o.toString(),r(n),t)}).then(function(e){return u(e)}))},e}()
n.RenameAdapter=m
var v=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri
return a(n,this._worker(t).then(function(e){return e.findDocumentSymbols(t.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,containerName:e.containerName,kind:function(e){var n=monaco.languages.SymbolKind
switch(e){case 1:return n.Array
case 2:return n.Module
case 3:return n.Namespace
case 4:return n.Package
case 5:return n.Class
case 6:return n.Method
case 7:return n.Property
case 8:return n.Field
case 9:return n.Constructor
case 10:return n.Enum
case 11:return n.Interface
case 12:return n.Function
case 13:return n.Variable
case 14:return n.Constant
case 15:return n.String
case 16:return n.Number
case 17:return n.Boolean
case 18:return n.Array}return n.Function}(e.kind),location:o(e.location)}})}))},e}()
n.DocumentSymbolAdapter=v}),function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports)
void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define("vs/language/css/cssMode",["require","exports","./workerManager","./languageFeatures"],e)}(function(e,n){var t=e("./workerManager"),r=e("./languageFeatures")
n.setupMode=function(e){var n=[],i=new t.WorkerManager(e)
n.push(i)
var o=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t]
return i.getLanguageServiceWorker.apply(i,[e].concat(n))},u=e.languageId
n.push(monaco.languages.registerCompletionItemProvider(u,new r.CompletionAdapter(o))),n.push(monaco.languages.registerHoverProvider(u,new r.HoverAdapter(o))),n.push(monaco.languages.registerDocumentHighlightProvider(u,new r.DocumentHighlightAdapter(o))),n.push(monaco.languages.registerDefinitionProvider(u,new r.DefinitionAdapter(o))),n.push(monaco.languages.registerReferenceProvider(u,new r.ReferenceAdapter(o))),n.push(monaco.languages.registerDocumentSymbolProvider(u,new r.DocumentSymbolAdapter(o))),n.push(monaco.languages.registerRenameProvider(u,new r.RenameAdapter(o))),n.push(new r.DiagnostcsAdapter(u,o))}})