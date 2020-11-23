const items = [
    {
      image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
      title: 'BIOLOID',
      description: 'Это популярная серия программируемых робототехнических конструкторов компании Robotis. Серия представлена разнообразными универсальными наборами, которые подойдут как начинающим робототехникам, так и специалистам, работающим над решением актуальных робототехнических задач. Также в наборе есть пульт для управления роботом и набор пластиковых элементов для придания уникального вида собранным моделям.',
      price: '82 000'
    },
    {
      image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
      title: 'BIOLOID Premium kit',
      description: 'BIOLOID Premium kit – набор для создания различных шагающих роботов на основе моторов Dynamixel и контроллера СМ-530, для образования, игр и соревнований.',
      price: '126 000'
    },
    {
      image: 'https://code.s3.yandex.net/web-code/oop/card_detail2.png',
      title: 'Airwheel',
      description: 'Модель позволяет использовать при движении и педали и электрическую тягу, а также их сочетание. Съемный аккумулятор легко заменяется во время поездки, позволяя тем самым существенно увеличивать ее продолжительность.',
      price: '145 000'
    },
  ];
  
  class Card {
    constructor(name, link, templateSelector) {
        this._name = name;
        this._link = link;
        this._temlate = templateSelector;
    }

    _getTemplate() {
      const cardElement = document
        .querySelector('.horizontal-card')
        .content
        .querySelector('.card')
        .cloneNode(true);
  
      return cardElement;
    }
    
    generateCard() {
      this._element = this._getTemplate();
  
      this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
      this._element.querySelector('.card__title').textContent = this._title;
      this._element.querySelector('.card__info').textContent = this._description;
      this._element.querySelector('.card__price-property').textContent = this._price;
      
      return this._element;
    }
  }
  
  items.forEach((item) => {
    const card = new Card(item.title, item.description, item.price, item.image);
    const cardElement = card.generateCard();
  
    // Добавляем в DOM
    document.querySelector('.card-list__items').append(cardElement);
  }); 
  