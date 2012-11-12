// concrete5 Redactor functionality
if (typeof RedactorPlugins === 'undefined') var RedactorPlugins = {};

RedactorPlugins.concrete5inline = {

	init: function() {
		this.$toolbar.css({ position: 'fixed', width: '100%', zIndex: 1005, top: '50px', left: '0px' });
		this.$toolbar.append($('<li id="ccm-redactor-actions-buttons" class="ccm-ui"><button id="ccm-redactor-cancel-button" type="button" class="btn btn-mini">Cancel</button><button id="ccm-redactor-save-button" type="button" class="btn btn-primary btn-mini">Save</button></li>'));
		var editor = this.$editor;
		$('#ccm-redactor-cancel-button').on('click', function() {
			ccm_onInlineEditCancel(function() {
				editor.destroyEditor();
			});
		});
		$('#ccm-redactor-save-button').on('click', function() {
			$('#redactor-content').val(editor.getCode());
			editor.destroyEditor();
			$('#ccm-block-form').submit();
		});
	}


}
