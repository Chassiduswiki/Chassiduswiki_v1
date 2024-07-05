<div class="card">
<header>
	<h1><% tp.file.title %></h1>
	<p class="subtitle"> <% tp.system.prompt("Translation") %></p>
</header>
	<section>
	</section>
</div>

## Etymology

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio ipsum, various id accumsan suscipit, vulputate sit amet velit. Fusce elementum vehicula ipsum ac various.

## Definitions

<% tp.file.selection() %>

<div class="rectangle">
  <form action="https://submit-form.com/PyS1Ogeqs">
	<input type="hidden" name="page-id" value="<% tp.file.title.match(/[a-zA-Z]/g).join("") %>">
	<label for="message">Add Mareh Mekomos</label>
	<textarea
	  id="message"
	  name="message"
	  placeholder="Example: Sefer HaMaamarim 5723, pp. 111 ff."
	  required
	></textarea>
	<button type="submit">Submit</button>
  </form>
</div>
