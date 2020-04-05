window.addEventListener('load',()=>{
	var images=document.querySelectorAll("img");
	var slider=document.querySelector("#container");
	var prevBtn=document.querySelector("#prev");
	var nextBtn=document.querySelector("#next");
	let counter=1;
	const size=images[1].offsetWidth;
	slider.style.transform='translateX(' + (-size*counter) + 'px)';		//one image width to start from image1
	nextBtn.addEventListener("click",()=>{
		if(counter>=images.length-1) return;
		slider.style.transition='transform 0.5s ease-in-out';
		counter++;
		slider.style.transform='translateX(' + (-size*counter) + 'px)';
	});
	prevBtn.addEventListener("click",()=>{
		if(counter<=0) return;
		slider.style.transition='transform 0.5s ease-in-out';
		counter--;
		slider.style.transform='translateX(' + (-size*counter) + 'px)';
	});
	slider.addEventListener("transitionend",()=>{
		if(images[counter].id==="lastClone")
		{
			slider.style.transition='none';
			counter=images.length - 2;
			slider.style.transform='translateX(' + (-size*counter) + 'px)';
		}
		if(images[counter].id==="firstClone")
		{
			slider.style.transition='none';
			counter=1;
			slider.style.transform='translateX(' + (-size*counter) + 'px)';
		}
	});
});