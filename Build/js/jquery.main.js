(function($) {
	$(function(){
        var myModule = function(){
            var plugin = {
                initialize: function(options){
                    this.menu = document.getElementById(options.menu);
                    this.openLink = options.openLink;
                    this.activeClass = options.activeClass;
                    this.delegateElement = options.delegateElement;

                    this.bind()
                },
                bind: function(){
                    this.menu.addEventListener('click', this.click.bind(this));
                },
                destroy: function(){
                    this.menu.removeEventListener('click');
                },
                click: function(e){
                    var element      = e.target,
                        parent       = element.parentNode,
                        elementClass = element.getAttribute('class');

                    if(elementClass) {
                        var names = elementClass.split(' ');
                        for(var i = 0, length = names.length; i < length; i++) {
                            if(names[i] === this.openLink) {
                                parent.classList.toggle(this.activeClass);
                                if(parent.classList.contains(this.activeClass)) {
                                    e.preventDefault();
                                }
                            }
                        }
                    }
                }
            }
            return {
                init: function(opt) {
                    return plugin.initialize(opt)
                },
                destroy: function(){
                    return plugin.destroy();
                }
            }
        };

        var touchNav = myModule();
        touchNav.init({
            menu: 'nav',
            openLink: 'open',
            activeClass: 'active'
        });
    });


})(jQuery);