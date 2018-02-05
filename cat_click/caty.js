

/*$(document).ready(function(){
		var count1=0; 
		var count2=0;
		var catname1= 'CLIF';
		var catname2= 'MARY';

		document.geteleentById('name1').innerHTML= catname1;
		document.geteleentById('name2').innerHTML= catname2;
		document.geteleentById('cl1').addEventListener('click', function(event){
		document.geteleentById('inc1').innerHTML = ++count1;
		}, false);
		
		document.geteleentById('cl2').addEventListener('click', function(event){
		document.geteleentById('inc2').innerHTML = ++count2;
		}, false);

	var count= [0,0,0,0,0]


	document.geteleentById('cat1').addEventListener('click', function(event){
		
		
		
	}

)
*/

var model={  
			currentCat: null,
			cats: [ 
			{name: 'lucy' ,
			  clickCount: 0,
			  imgSrc: 'cat1.jpg'},
			  
			{name: 'mia' ,
			  clickCount: 0,
			  imgSrc: 'cat2.jpg'},
			  
			{name: 'lizy' ,
			  clickCount: 0,
			  imgSrc: 'cat3.jpg'},
			  
			{name: 'helen' ,
			  clickCount: 0,
			  imgSrc: 'cat4.jpg'},
			  
			{name: 'bella' ,
			  clickCount: 0,
			  imgSrc: 'cat5.jpg'} ]
			
};
 
 var controller= {
	 
			init: function(){
				model.currentCat= model.cats[0];
				bullet_cat_list.init();
				imageView.init();
			},
	 
			getCatnames: function(){
				
				var names=[];
				
				_.each(model.cats, function(obj){
					names.push(obj.name);
					});
				
				return names;
			},

			get_c: function(){

				return model.cats;
			},
	 
			incrementCounter: function(){
				model.currentCat.clickCount++;

			},
			
			setCurrentCat: function(cat){
				model.currentCat= cat;
			},

			getCurrentCat: function(){
				return model.currentCat;
			}
 };
 
var imageView={

		init: function(){

        this.catNameele = document.geteleentById('cat-name');
        this.catImageele = document.geteleentById('cat-img');
        this.countele = document.geteleentById('cat-count');		
		this.catImageele.addEventListener('click', function(){controller.incrementCounter(); imageView.render();});
		this.render();

		},

		render: function(){
		
		var currentCat = controller.getCurrentCat();
        this.countele.textContent = currentCat.clickCount;
        this.catNameele.textContent = currentCat.name;
        this.catImageele.src = currentCat.imgSrc;
		
		}

};

var bullet_cat_list = {

    init: function() {

        this.cat_list = document.getElementById('buttons_list');
        this.render();
    },

    render: function() {
        var cat, ele, i;
        var cats = controller.get_c();

       this.cat_list.innerHTML = '';

        for (i = 0; i < cats.length; i++) {
            cat = cats[i];
            ele = document.createElement('li');
            ele.textContent = cat.name;
            ele.addEventListener('click', (function(the_cat) {
                return function() {
                    controller.setCurrentCat(the_cat);
					controller.incrementCounter();
                    imageView.render();
                };
            })(cat));
            this.cat_list.appendChild(ele);
        }
    }
};

controller.init();
			  
