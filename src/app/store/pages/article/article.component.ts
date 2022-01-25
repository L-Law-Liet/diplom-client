import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article = {
    id: 1,
    title: 'News1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ? Assumenda est facere fuga magnam nam vel! Aperiam consectetur consequuntur eum, hic magnam maxime minima, natus nobis perferendis perspiciatis porro quibusdam quo repudiandae tenetur voluptatum. A commodi dicta ex ipsum minus nemo temporibus. Ad adipisci assumenda consectetur, cum dolore doloribus eaque enim esse est eum ex expedita fuga in iusto molestias nam nesciunt nobis pariatur quam rem repellat repudiandae sequi tenetur veniam veritatis voluptatibus voluptatum? Architecto at debitis dolor dolores dolorum esse illo nesciunt quaerat, saepe veniam. Exercitationem itaque laborum non quasi sapiente tempore voluptatem. Accusamus blanditiis consectetur dicta error, fugiat hic illum inventore laboriosam magni odit officia pariatur sint sit ut voluptate. Accusantium ad animi architecto atque consequatur cupiditate, deserunt distinctio doloribus dolorum eaque eligendi eos ex excepturi facere fuga fugiat illum ipsa laboriosam magni minima molestias nam obcaecati odio officiis optio possimus quibusdam rem unde veniam veritatis voluptas voluptatem voluptatibus voluptatum. Eveniet laudantium, perferendis? Ab alias culpa cumque cupiditate deserunt eius error excepturi facere fuga, fugiat illum in ipsa ipsum iure, laborum libero magnam, natus officia perspiciatis quas quidem quis reprehenderit saepe temporibus totam vel velit veniam. Ea laudantium qui quis quos sequi ut. Aliquam assumenda atque blanditiis dolorem esse fuga harum magnam mollitia natus necessitatibus, obcaecati, pariatur possimus, qui quis temporibus tenetur totam! Aliquid architecto autem, cupiditate eaque, esse fugit harum in ipsa laudantium nisi possimus quae quas reiciendis repellat suscipit tempora ut, vitae! Doloremque earum error hic ipsum laboriosam laudantium nulla quo sequi? Assumenda blanditiis error ex officia repellat sed? Aliquid cum, doloremque earum error et ex excepturi exercitationem expedita illo in incidunt iusto laudantium molestias mollitia necessitatibus nesciunt nostrum, numquam praesentium quos ratione repellat unde vitae! Accusantium !',
    image: 'https://via.placeholder.com/640x480.png/777?text=News1',
    created_at: '12.09.2022'}
  constructor() { }

  ngOnInit(): void {
  }

}
