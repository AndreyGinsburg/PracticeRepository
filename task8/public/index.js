let maxID;

var photoPosts = [
  {
    id: '1',
    description: 'Второе место на РТЮМ',
    createdAt: new Date(2018, 2, 19, 22, 41),
    author: 'Ginpukisreal',
    photoLink: 'http://www.uni.bsu.by/arrangements/turnir/foto2008/rtum2015_gomel_big.jpg',
    hashtags: ['#RTYM','#Gomel,'],
    likes: ['boris_minsk', 'kukkel', 'dubovik_official']
    
   },

   {
    id: '2',
    description: 'Учусь вот',
    createdAt: new Date(2018, 2, 19, 23, 12),
    author: 'Akiyama_Mio',
    photoLink: 'http://pm1.narvii.com/6720/ea5b1161f93ad90b0daaa7a6759ce6f5acace16a_00.jpg',
    hashtags: ['#Родина','#СлушаюХацунеМику,'],
    likes: ['Ginpukisreal','Kurisu_Makise']
   },
   
   {
    id: '3',
    description: 'Лучший напиток после конференции',
    createdAt: new Date(2018, 2, 19, 23, 12),
    author: 'Kurisu_Makise',
    photoLink: 'https://2ch.hk/b/arch/2016-03-28/src/121556262/14591321612550.jpg',
    hashtags: ['#Dr.Pepper'],
    likes: ['Ginpukisreal','VKoz','Okabe_Rintaro']
   },

   {
    id: '4',
    description: 'Лайк если любишь этот корпус',
    createdAt: new Date(2018, 2, 19, 23, 18),
    author: 'BSU',
    photoLink: 'https://www.belnovosti.by/sites/default/files/styles/692/public/article/17-07-2017/bsu-student.jpg?itok=kAlbI9Jq',
    hashtags: ['#ГлавныйКорпус'],
    likes: []
   },
   
   {
    id: '5',
    description: 'Наконец-то успех',
    createdAt: new Date(2018, 2, 19, 23, 18),
    author: 'boris_minsk',
    photoLink: 'http://quizup-players.imgix.net/players/1033889251093300208/pictures/aldv7u6sky/original.jpg',
    hashtags: ['#IMCтакнерадует'],
    likes: ['Ginpukisreal','VKoz','kukkel','Katarina1999']
   },
   
   {
    id: '6',
    description: 'Прекрасный город',
    createdAt: new Date(2018, 2, 19, 23, 18),
    author: 'Ginpukisreal',
    photoLink: 'https://gdb.rferl.org/14AF7C89-419F-4EB1-87EC-FB88746217B6_w1023_r1_s.jpg',
    hashtags: ['#Jerusalem'],
    likes: ['Katarina1999','kukkel']
   },
   
   {
    id: '7',
    description: 'С лучшим другом',
    createdAt: new Date(2018, 2, 19, 23, 18),
    author: 'sONYA',
    photoLink: 'https://www.gl5.ru/photos/f/fadeev-max/versus.jpg',
    hashtags: ['#ОхладиПыл','#Рилток'],
    likes: ['dubovik_official']
   },
   
   {
    id: '8',
    description: 'Жалко что 3 не доделал',
    createdAt: new Date(2018, 2, 19, 23, 18),
    author: 'dubovik_official',
    photoLink: 'https://s9.stc.all.kpcdn.net/share/i/12/10133290/cr-1200-628.vn-4-1411783-100-tl-0-0.t-13-3733742-ttps-50-12-32173D-1030-l-85-m-23.t-13-3733742-ttps-50-12-FFF-1030-l-85-m-22.t-207-5-ossb-25-10-FFF-788-l-115-t-47',
    hashtags: ['#Бразилия','#IMO','#Gomel'],
    likes: ['Ginpukisreal','VKoz','Katarina1999','boris_minsk','kukkel']
   },
   
   {
   id: '9',
    description: 'Лайк если любишь этот корпус',
    createdAt: new Date(2018, 2, 20, 23, 18),
    author: 'BSU',
    photoLink: 'https://www.belnovosti.by/sites/default/files/styles/692/public/article/17-07-2017/bsu-student.jpg?itok=kAlbI9Jq',
    hashtags: ['#ГлавныйКорпус'],
    likes: []
   },
   
   {
    id: '10',
    description: 'Наконец-то успех',
    createdAt: new Date(2018, 2, 20, 23, 18),
    author: 'boris_minsk',
    photoLink: 'http://quizup-players.imgix.net/players/1033889251093300208/pictures/aldv7u6sky/original.jpg',
    hashtags: ['#IMCтакнерадует'],
    likes: ['Ginpukisreal','VKoz','kukkel','Katarina1999']
   },
   
   {
    id: '11',
    description: 'Прекрасный город',
    createdAt: new Date(2018, 2, 20, 23, 18),
    author: 'Ginpukisreal',
    photoLink: 'https://gdb.rferl.org/14AF7C89-419F-4EB1-87EC-FB88746217B6_w1023_r1_s.jpg',
    hashtags: ['#Jerusalem'],
    likes: ['Katarina1999','kukkel']
   },
   
   {
    id: '12',
    description: 'С лучшим другом',
    createdAt: new Date(2018, 2, 20, 23, 18),
    author: 'sONYA',
    photoLink: 'https://www.gl5.ru/photos/f/fadeev-max/versus.jpg',
    hashtags: ['#ОхладиПыл','#Рилток'],
    likes: ['dubovik_official']
   },
   
   {
    id: '13',
    description: 'Жалко что 3 не доделал',
    createdAt: new Date(2018, 2, 20, 23, 18),
    author: 'dubovik_official',
    photoLink: 'https://s9.stc.all.kpcdn.net/share/i/12/10133290/cr-1200-628.vn-4-1411783-100-tl-0-0.t-13-3733742-ttps-50-12-32173D-1030-l-85-m-23.t-13-3733742-ttps-50-12-FFF-1030-l-85-m-22.t-207-5-ossb-25-10-FFF-788-l-115-t-47',
    hashtags: ['#Бразилия','#IMO','#Gomel'],
    likes: ['Ginpukisreal','VKoz','Katarina1999','boris_minsk','kukkel']
   },
   
   {
    id: '14',
    description: 'Учусь вот',
    createdAt: new Date(2018, 2, 21, 23, 18),
    author: 'Akiyama_Mio',
    photoLink: 'http://pm1.narvii.com/6720/ea5b1161f93ad90b0daaa7a6759ce6f5acace16a_00.jpg',
    hashtags: ['#Родина','#СлушаюХацунеМику,'],
    likes: ['Ginpukisreal','Kurisu_Makise']
   },
   
   {
    id: '15',
    description: 'Лучший напиток после конференции',
    createdAt: new Date(2018, 2, 22, 23, 18),
    author: 'Kurisu_Makise',
    photoLink: 'https://2ch.hk/b/arch/2016-03-28/src/121556262/14591321612550.jpg',
    hashtags: ['#Dr.Pepper'],
    likes: ['Ginpukisreal','VKoz','Okabe_Rintaro']
   },

   {
    id: '16',
    description: 'Лайк если любишь этот корпус',
    createdAt: new Date(2018, 2, 23, 23, 18),
    author: 'BSU',
    photoLink: 'https://www.belnovosti.by/sites/default/files/styles/692/public/article/17-07-2017/bsu-student.jpg?itok=kAlbI9Jq',
    hashtags: ['#ГлавныйКорпус'],
    likes: []
   },
   
   {
    id: '17',
    description: 'Наконец-то успех',
    createdAt: new Date(2018, 2, 23, 23, 18),
    author: 'boris_minsk',
    photoLink: 'http://quizup-players.imgix.net/players/1033889251093300208/pictures/aldv7u6sky/original.jpg',
    hashtags: ['#IMCтакнерадует'],
    likes: ['Ginpukisreal','VKoz','kukkel','Katarina1999']
   },
   
   {
    id: '18',
    description: 'Прекрасный город',
    createdAt: new Date(2018, 2, 23, 23, 18),
    author: 'Ginpukisreal',
    photoLink: 'https://gdb.rferl.org/14AF7C89-419F-4EB1-87EC-FB88746217B6_w1023_r1_s.jpg',
    hashtags: ['#Jerusalem'],
    likes: ['Katarina1999','kukkel']
   },
   
   {
    id: '19',
    description: 'С лучшим другом',
    createdAt: new Date(2018, 2, 23, 23, 18),
    author: 'sONYA',
    photoLink: 'https://www.gl5.ru/photos/f/fadeev-max/versus.jpg',
    hashtags: ['#ОхладиПыл','#Рилток'],
    likes: ['dubovik_official']
   },
   
   {
    id: '20',
    description: 'Жалко что 3 не доделал',
    createdAt: new Date(2018, 3, 23, 23, 18),
    author: 'dubovik_official',
    photoLink: 'https://s9.stc.all.kpcdn.net/share/i/12/10133290/cr-1200-628.vn-4-1411783-100-tl-0-0.t-13-3733742-ttps-50-12-32173D-1030-l-85-m-23.t-13-3733742-ttps-50-12-FFF-1030-l-85-m-22.t-207-5-ossb-25-10-FFF-788-l-115-t-47',
    hashtags: ['#Бразилия','#IMO','#Gomel'],
    likes: ['Ginpukisreal','VKoz','Katarina1999','boris_minsk','kukkel']
   },
]

var functions = (function() {
    return {

        getAuthorsList() {
            let photo_posts = this;
            let authors = [];
            for (post of photo_posts) {
                if (authors.indexOf(post.author) == -1){
                    authors.push(post.author)
                }
            }
            return authors;
        },
   
        getPhotoPosts(skip = 0, top = 5, filter) {
            let posts = this;
            if (typeof filter === 'object') {
                posts = posts.filter((photo) => {
                    if (filter.hasOwnProperty('author')) {
                        if (filter.author !== photo.author)
                            return false;
                    }
                    if (filter.hasOwnProperty('Date')) {
                        if (Date.parse(filter.Date) !== Date.parse(new Date(new Date(photo.createdAt).getFullYear(),new Date(photo.createdAt).getMonth()+1,new Date(photo.createdAt).getDate())))
                            return false;
                    }
                    if (filter.hasOwnProperty('hashtags')) {
                        if (!filter.hashtags.every((tag) => {
                                return photo.hashtags.includes(tag);
                            }))
                            return false;
                    }
                    return true;
                });
            }
            return posts.slice(skip, top + skip);
        },

        getPhotoPost(id) {
            if (typeof id !== 'string' || id === ''){
                return;
            }
            for (var i = 0; i < photoPosts.length; ++i) {
                if (photoPosts[i].id === id){
                    return photoPosts[i];
                }
            }
            return 'There is no such id '
        },


        validatePhotoPost(photo) {
            if (typeof photo !== 'object')
                return false;
            if (typeof photo.id !== 'string' || photo.id === '')
                return false;
            if (typeof photo.description !== 'string' || photo.description === '' || photo.description.length > 200)
                return false;
            if (!(photo.createdAt instanceof Date))
                return false;
            if (typeof photo.author !== 'string' || photo.author === '')
                return false;
            if (typeof photo.photoLink !== 'string' || photo.photoLink === '')
                return false;
            if (!Array.isArray(photo.hashtags) || !Array.isArray(photo.likes))
                return false;
            return true;
        },

        addPhotoPost(photo) {
            if (!this.validatePhotoPost(photo))
                return false;
            this.push(photo);
            this.sort((photo1, photo2) => {
                return (new Date(photo2.createdAt) - new Date(photo1.createdAt));
            });
            return true;
        },

        editPhotoPost(id, editPost) {
            if (typeof id !== 'string' || id === '' || typeof editPost !== 'object') {
                return false;
            }
            let post = this.getPhotoPost(id);
            if (post) {
                if (editPost.hasOwnProperty('description'))
                    post.description = editPost.description;
                if (editPost.hasOwnProperty('photoLink'))
                    post.photoLink = editPost.photoLink;
                if (editPost.hasOwnProperty('hashtags'))
                    post.hashtags = editPost.hashtags;
                if (editPost.hasOwnProperty('like'))
                    post.likes = editPost.likes;
                return true;
            }
            return false;
        },


        removePhotoPost(id) {
            if (typeof id !== 'string' || id === '') {
                return false;
            }
            let photos = this;
            for (var i = 0; i < photos.length; ++i) {
                if (photos[i].id === id) {
                    photos.splice(i, 1);
                    return true;
                }
            }
            return false;
        }
    }
})();


for (method in functions) {
    photoPosts.__proto__[method] = functions[method];
}








