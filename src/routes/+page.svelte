<script>
	import { Document, Page } from 'svelte-pdfjs';
	import { set_pdfjs_context } from 'svelte-pdfjs/vite';

	set_pdfjs_context();
</script>

<Document file="/hi.pdf">
	<Page num={1} />
</Document>
