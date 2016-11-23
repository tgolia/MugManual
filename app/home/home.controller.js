ngcontroller (John Papa explains how to use Tab shortcut here)

function HomeController() {
	var vm = this;
	
	vm.post = [];

	vm.addPost = addPost;

	function addPost() {
		vm.posts.push(vm.newPost);
	}
}