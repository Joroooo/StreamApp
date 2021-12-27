import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {

  constructor() { }

	btsImages: any = [];
  visibleImages: any = [];
	bannerImages: any = [];


	getImages(){
		return this.visibleImages = IMAGES.slice(0);
	}
	getImage(id: number){
		return IMAGES.slice(0).find(image => image.id == id)
	}

	getBannerImages() {
		return this.bannerImages = BANNERIMAGES.slice(0);
	}
	getBannerImage(id: number) {
		return BANNERIMAGES.slice(0).find(banner => banner?.id == id);
	}
	getBTSImages() {
		return this.btsImages = BTSIMAGES.slice(0);
	}

	getLimitedImages(take?:number) {
		const query = take? `?limit=${take}` : '';
	//	return this.http.get<IMovie[]>(`http://localhost:3000/api/posts/${query}`);
	}

	/* 

	getImagesWithObservable(): Observable<IMAGES[]> {
		let images = of(IMAGES);
		return images;
	}
	
	
	*/
}

const IMAGES =[
	{"id": 33, "slide": 1, "category":"services", "author": "YEARS&YEARS", "title": "Sweet Talker", "gif": "../assets/gif/32.gif", "url": "../assets/images/thumb/32.jpg", "link": "https://www.youtube.com/embed/0trBZ5rDlRU", "production": "Partizan", "executiveProducer": "Mayling Wong", "service": "Four Elements", "executiveProducerTwo": "Rosen Savkov", "producer": "Lyubo Yonchev", "director": "Sophia Ray"},
	{"id": 1, "slide": 1, "category":"services", "author": "Sigrid", "title": "Burning Bridges", "gif": "../assets/gif/1.gif", "url": "../assets/images/thumb/1.png", "link": "https://www.youtube.com/embed/udRAIF6MOm8", "production": "Partizan", "service": "Four Elements", "director": "Sophia Ray"},
	{"id": 2, "slide": 2, "category": "services", "author": "BMW", "title": "Control", "gif": "../assets/gif/2.gif", "url": "../assets/images/thumb/2.png", "link": "https://player.vimeo.com/video/542495362?h=721300e39f&color=e8eaea", "production": " Interrogate", "service": " Four Elements", "director": "Lee Ford"},
	{"id": 3, "slide": 3, "category": "services", "author": "AU/RA", "title": "Emoji", "gif": "../assets/gif/3.gif", "url": "../assets/images/thumb/3.png", "link": "https://www.youtube.com/embed/cYhoPMma0i0", "label": "Loudmouth Music", "production": "Partizan", "service": "Four Elements", "director": "Sophia Ray"},
	{"id": 4, "slide": 4, "category": "services", "author": "Kenzie", "title": "Funeral", "gif": "../assets/gif/4.gif", "url": "../assets/images/thumb/4.png", "link": "https://www.youtube.com/embed/K96PeRuHUxw", "label": "BBYTTH", "production": " Partizan", "service": "Four Elements", "director": " Camille Summers-Valli"},
	{"id": 5, "slide": 5, "category": "services", "author": "Novo Amor", "title": "Carry You", "gif": "../assets/gif/5.gif", "url": "../assets/images/thumb/5.png", "link": "https://www.youtube.com/embed/utj0BFuv1-Q", "label": "AllPoints", "production": " Partizan", "service": " Four Elements", "director": "Ethan Graham"},
	{"id": 6, "slide": 6, "category": "services", "author": "FWD", "title": "Insurance", "gif": "../assets/gif/6.gif", "url": "../assets/images/thumb/6.png", "link": "https://player.vimeo.com/video/192099614?h=0bac8061df", "label": " Universal Music", "production": "Partizan", "service": "Four Elements", "director": "Ethan Graham"},
	{"id": 7, "slide": 7, "category": "services", "author": "Dotan", "title": "Bones", "gif": "../assets/gif/7.gif", "url": "../assets/images/thumb/7.png", "link": "https://www.youtube.com/embed/BX5b4OPOUlw", "label": "Universal Music", "production": " Partizan", "service": "Four Elements", "director": "Ethan Graham"},
	{"id": 8, "slide": 8, "category": "services", "author": "Kenzie", "title": "Dark July", "gif": "../assets/gif/8.gif", "url": "../assets/images/thumb/8.png", "link": "https://www.youtube.com/embed/7dJAu8mB4Ec", "label": " BBYTTH", "production": "Partizan", "service": "Four Elements", "director": "Camille Summers-Valli"},
	{"id": 9, "slide": 9, "category": "services", "author": "VICTORIA", "title": "Growing Up is Getting Old (Eurovision Song Contest 2021)", "gif": "../assets/gif/9.gif", "url": "../assets/images/thumb/9.png", "link": "https://www.youtube.com/embed/UsmJ2nEV7gI", "label": "Ligna Group", "production": "Four Elements", "service": "Four Elements", "director": "Victoria Karakoleva"},
	{"id": 10, "slide": 10, "category": "services", "author": "DAYO", "subauthor": "+ ALXNDR LONDON", "title": "Yellow Hat [SAVE YOURSELF]", "gif": "../assets/gif/10.gif", "url": "../assets/images/thumb/10.png", "link": "https://www.youtube.com/embed/t7Go-Rf6Zyk", "label": "Ligna Group", "production": "Four Elements", "service": " Four Elements", "director": "Victoria Karakoleva"},
	{"id": 11, "slide": 11, "category": "services", "author": "Virginia", "title": "Нека Бъдем Себе си", "gif": "../assets/gif/11.gif", "url": "../assets/images/thumb/11.png", "link": "https://www.youtube.com/embed/GVYfUr23gqM", "label": "Ligna Group", "production": "Four Elements", "service": "Four Elements", "executive": " Slav Lambrinov", "director": "Boyko Shtonov"},
	{"id": 12, "slide": 12, "category": "services", "author": "VICTORIA", "title": "Ugly Cry", "gif": "../assets/gif/12.gif", "url": "../assets/images/thumb/12.png", "link": "https://www.youtube.com/embed/9l8HFrI_GGA", "label": " Ligna Group", "production": " Four Elements", "service": "Four Elements", "executive": " Slav Lambrinov", "director": "Victoria Karakoleva"},
	{"id": 13, "slide": 13, "category": "services", "author": "Robbers On Parole", "title": "2 Far Gone", "gif": "../assets/gif/13.gif", "url": "../assets/images/thumb/13.png", "link": "https://www.youtube.com/embed/CnB5PSzRXRQ", "label": "Ligna Group", "production": " Four Elements", "service": "Four Elements", "executive": "Slav Lambrinov", "director": "Lora Musheva"},
	{"id": 14, "slide": 14, "category": "services", "author": "Papi Hans", "title": "Кекс", "gif": "../assets/gif/14.gif", "url": "../assets/images/thumb/14.png", "link": "https://www.youtube.com/embed/e1HrZAuIzKU", "production": "Four Elements", "service": "Four Elements", "executive": " Slav Lambrinov", "director": "Boyko Shtonov"},
	{"id": 15, "slide": 15, "category": "services", "author": "VICTORIA", "title": "Tears Getting Sober (Eurovision Song Contest 2020)", "gif": "../assets/gif/15.gif", "url": "../assets/images/thumb/15.png", "link": "https://www.youtube.com/embed/V_hgYnwZR8I", "label": "Ligna Group", "production": " Four Elements", "service": "Four Elements", "executive": "Slav Lambrinov", "director": " Victoria Karakoleva"},
	{"id": 16, "slide": 16, "category": "services", "author": "DARA", "title": "Mamacita", "gif": "../assets/gif/16.gif", "url": "../assets/images/thumb/16.png", "link": "https://www.youtube.com/embed/3fhlAjXVFZA", "label": " Virginia Records", "production": " Four Elements", "service": "Four Elements", "executive": "Slav Lambrinov", "director": "Dimitris Georgiev"},
	{"id": 17, "slide": 16, "category": "services", "author": "Hundred Waters", "title": "Wave to Anchor", "gif": "../assets/gif/17.gif", "url": "../assets/images/thumb/17.png", "link": "https://www.youtube.com/embed/MMUZEMoBi4w", "label": "Owsla", "production": " Partizan", "service": "Four Elements", "director": "Allie Avital"},

	{"id": 19, "slide": 16, "category": "services", "author": "VICTORIA", "title": "Open Up Yourself", "gif": "../assets/gif/18.gif", "url": "../assets/images/thumb/18.png", "link": "https://www.youtube.com/embed/kOrC4PdUE6c", "label": "Ligna Group", "production": "Co- Four Elements", "service": "Four Elements", "executive": " Slav Lambrinov", "director": "Dimitri Stefanov"},
	{"id": 20, "slide": 16, "category": "services", "author": "Mihaela Fileva", "title": "Латино Сеньорита", "gif": "../assets/gif/19.gif", "url": "../assets/images/thumb/19.png", "link": "https://www.youtube.com/embed/vY043BefRuA", "label": " Monte Music", "production": "Four Elements", "service": "Four Elements", "director": "Boyko Shtonov"},
	{"id": 21, "slide": 16, "category": "services", "author": "The End of the Circle", "title": "short film", "gif": "../assets/images/thumb/20.png", "url": "../assets/images/thumb/20.png", "link": "https://player.vimeo.com/video/585939636?h=ecab769051&color=09a170", "label": " Monte Music", "production": "National Academy of Theatre and Film Arts", "service": " Four Elements", "coproducer": "Co- Four Elements, ImmerseFX, LP Studio & New European Wave Entertainment", "director": "Dimitris Georgiev"},
	{"id": 22, "slide": 16, "category": "services", "author": "Grafa", "title": "Страничен Наблюдател", "gif": "../assets/gif/21.gif", "url": "../assets/images/thumb/21.png", "link": "https://www.youtube.com/embed/X9mZoeV5r4Y", "label": "Monte Music", "production": "Four Elements", "service": "Four Elements", "director": " Boyko Shtonov"},
	{"id": 23, "slide": 16, "category": "services", "author": "CRAVE", "title": "Atom", "gif": "../assets/gif/22.gif", "url": "../assets/images/thumb/22.png", "link": "https://www.youtube.com/embed/bFQt3dC8wXE", "label": " Ligna Group", "production": " Atom Theatre and Balkan Dance Project, Festival Velenje", "coproducer": "Co- NON AEON Production, Four Elements", "executive": "Slav Lambrinov", "director": "Ivelina Alexieva"},
	{"id": 24, "slide": 16, "category": "services", "author": "VICTORIA", "title": "Alright", "gif": "../assets/gif/23.gif", "url": "../assets/images/thumb/23.png", "link": "https://www.youtube.com/embed/NTqf3HFRAw4",  "label": " Ligna Group", "production": "Four Elements", "service": "Four Elements", "executive": "Slav Lambrinov", "director": "Victoria Karakoleva"},
	{"id": 25, "slide": 16, "category": "services", "author": "Preya", "title": "Всички Наши Места", "gif": "../assets/gif/24.gif", "url": "../assets/images/thumb/24.png", "link": "https://www.youtube.com/embed/VByRFi7MEyw", "label": "Monte Music", "production": " Four Elements", "service": "Four Elements",  "director": "Boyko Shtonov"},
	{"id": 26, "slide": 16, "category": "productions", "author": "Spell", "title": "short film", "gif": "../assets/gif/25.gif", "url": "../assets/images/thumb/25.png", "link": "https://www.youtube.com/embed/GbFajG015Zw", "production": "Four Elements", "coproducer": "Crystal Frame, Studio 1+1", "support": "With the financial support of the Bulgarian National Culture Fund", "service": "Four Elements",  "director": " Victoria Karakoleva"},
	{"id": 27, "slide": 16, "category": "productions", "author": "Timmy", "title": "short film", "gif": "../assets/gif/26.gif", "url": "../assets/images/thumb/26.png", "link": "https://www.youtube.com/embed/b1MOnTt57LE", "production": "Crystal Frame, Four Elements, iFilm", "coproducer": "Fabian&Fred, Sireal Films", "support": "With the financial support of the Bulgarian National Culture Fund", "director": "Lyubo Yonchev"},
	{"id": 28, "slide": 16, "category": "productions", "author": "XVII", "title": "short film", "gif": "../assets/gif/27.gif", "url": "../assets/images/thumb/27.png", "link": "https://www.youtube.com/embed/MmCrUO6lI0c", "production": " ИON AEON Production, Four Elements", "coproducer": "Associated  Fabian&Fred, Sireal Films", "support": "With the financial support of the Bulgarian National Culture Fund", "director": "Radi Stoyanov"},
	{"id": 29, "slide": 16, "category": "productions", "author": "Shadows", "title": "short film", "gif": "../assets/gif/28.gif", "url": "../assets/images/thumb/28.png", "link": "https://www.youtube.com/embed/0p50abuUiRw", "production": "Four Elements", "coproducer": "Co- Crystal Frame", "support": "With the financial support of the Bulgarian National Culture Fund", "director": " Victoria Karakoleva"},
	{"id": 30, "slide": 16, "category": "productions", "author": "Grafa & Beloslava", "title": "Сън", "gif": "../assets/gif/29.gif", "url": "../assets/images/thumb/29.png", "link": "https://www.youtube.com/embed/CoZ45ztf5iA", "label": "Monte Music ", "production": " Four Elements", "coproducer": "Crystal Frame", "support": "With the financial support of the Bulgarian National Culture Fund", "director": "Boyko Shtonov"},
	{"id": 31, "slide": 16, "category": "productions", "author": "Shooting Star", "title": "short film", "gif": "../assets/images/thumb/30.png", "url": "../assets/images/thumb/30.png", "link": "https://www.youtube.com/embed/CBZLyUChUSI", "production": " Crystal Frame", "coproducer": "Co- Mito Production", "support": "With the financial support of the Bulgarian National Culture Fund", "director": "Lyubo Yonchev"},
	{"id": 32, "slide": 16, "category": "productions", "author": "Trials", "title": "short film", "gif": "../assets/gif/31.gif", "url":"../assets/images/thumb/31.png", "link": "https://www.youtube.com/embed/c8Tvb2MeEA0", "production": " National Academy of Theatre and Film Arts", "coproducer": "Four Elements", "support": "With the financial support of the Bulgarian National Culture Fund", "director": "Boya Harizanova"},

];

const BANNERIMAGES = [{"id": 1}];

const BTSIMAGES = [
	
	{"id": 1, "category": "photo", "link": "../assets/images/photo/1.jpg"},
	{"id": 2, "category": "photo","link": "../assets/images/photo/2.jpg"},
	{"id": 3, "category": "photo", "link": "../assets/images/photo/3.jpg"},
	{"id": 4, "category": "bts", "link": "../assets/images/bts/1.jpg"},
	{"id": 5, "category": "bts","link": "../assets/images/bts/2.jpg"},
	{"id": 6, "category": "bts", "link": "../assets/images/bts/3.jpg"},
	{"id": 7, "category": "bts", "link": "../assets/images/bts/4.jpg"},
	{"id": 8, "category": "bts","link": "../assets/images/bts/5.jpg"},
	{"id": 9, "category": "bts", "link": "../assets/images/bts/6.jpg"},
	{"id": 10, "category": "bts", "link": "../assets/images/bts/7.jpg"},
	{"id": 11, "category": "bts","link": "../assets/images/bts/8.jpg"},
	{"id": 12, "category": "bts", "link": "../assets/images/bts/9.jpg"},
	{"id": 13, "category": "bts", "link": "../assets/images/bts/10.jpg"},
	{"id": 14, "category": "bts","link": "../assets/images/bts/11.jpg"},
	{"id": 15, "category": "bts", "link": "../assets/images/bts/12.jpg"},
	{"id": 16, "category": "bts", "link": "../assets/images/bts/13.jpg"},
	{"id": 17, "category": "bts","link": "../assets/images/bts/14.jpg"},
	{"id": 18, "category": "bts", "link": "../assets/images/bts/15.jpg"},

];

