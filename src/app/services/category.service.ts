import { Injectable, signal } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly categories = signal<string[]>([
    'Sports', 'Dance', 'Music', 'Art', 'Fitness', 'Technology',
    'Cooking', 'Photography', 'Education', 'Health', 'Business', 'Travel'
  ]);

  private readonly data = signal<Category[]>([
    {
      name: 'Sports',
      providers: [
        { name: 'Pro1', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80' }, // cycling
        { name: 'Pro2', image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' }, // soccer
        { name: 'Pro3', image: 'https://images.unsplash.com/photo-1526676317768-d9b14f15615a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8c3ByaW50fHwwfHx8fDE2MjY3OTcxMDY&ixlib=rb-1.2.1&q=80&w=1080' }, // running
        { name: 'Pro4', image: 'https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/uwmpanthers.com/images/2014/9/23/6207069.jpeg' }, // basketball
      ],
    },
    {
      name: 'Dance',
      providers: [
        { name: 'Pro1', image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' }, // ballet
        { name: 'Pro2', image: 'https://images.squarespace-cdn.com/content/v1/52d01437e4b077a4dd8e2f6f/1389369337154-KR6EQIW56YV3BUBHZWWN/SSGrace.jpg' }, // performance
        { name: 'Pro3', image: 'https://images.squarespace-cdn.com/content/v1/6564176ed7ab6b1e7312a22e/2afe5527-139a-49e8-b6e1-c67f2ee3f67d/image-asset.jpg' }, // modern dance
        { name: 'Pro4', image: 'https://www.karachandance.com/wp-content/uploads/2017/08/4Q-1-e1610510597936.jpg' }, // stage
      ],
    },
    {
      name: 'Music',
      providers: [
        { name: 'Pro1', image: 'http://images.unsplash.com/photo-1573120525707-4549889744f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8bXVzaWMlMjBhcnRpc3R8fDB8fHx8MTYyODI2MzQ4OQ&ixlib=rb-1.2.1&q=80&w=1080' }, // guitar
        { name: 'Pro2', image: 'https://images.unsplash.com/photo-1535057697339-e2a798221230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cGxheSUyMG11c2ljfHwwfHx8fDE2MjA0NDA4Njg&ixlib=rb-1.2.1&q=80&w=1080' }, // piano
        { name: 'Pro3', image: 'https://images.unsplash.com/photo-1598901704027-18db7e0e8c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8Y291bnRyeSUyMG11c2ljfHwwfHx8fDE2MzAxMzgwMDQ&ixlib=rb-1.2.1&q=80&w=1080' }, // violin
        { name: 'Pro4', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D' }, // concert
      ],
    },
    {
      name: 'Art',
      providers: [
        { name: 'Pro1', image: 'https://images.unsplash.com/photo-1542772144-515ddfae17e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dXJiYW4lMjBhcnR8fDB8fHx8MTYyOTMzNTM4Nw&ixlib=rb-1.2.1&q=80&w=1080' }, // painting
        { name: 'Pro2', image: 'https://i.etsystatic.com/19869671/r/il/0f3eda/2156248904/il_1080xN.2156248904_2ps9.jpg' }, // sculpture
        { name: 'Pro3', image: 'https://images.unsplash.com/photo-1566599670054-cfebb4dd357a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max' }, // drawing
        { name: 'Pro4', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80' }, // gallery
      ],
    },
    {
      name: 'Fitness',
      providers: [
        { name: 'Pro1', image: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=600' }, // Woman stretching
        { name: 'Pro2', image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8Z3ltJTIwd29ya291dHx8MHx8fHwxNjMxNzM0MDQ4&ixlib=rb-1.2.1&q=80&w=1080' }, // Man lifting weights
        { name: 'Pro3', image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80' }, // Man doing push-ups
        { name: 'Pro4', image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&h=600' }, // Woman doing squats with barbell
      ],
    },    
    {
      name: 'Technology',
      providers: [
        { name: 'Pro1', image: 'https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8Y29tcHV0ZXIlMjB0ZWNobm9sb2d5fHwwfHx8fDE2MjkwNTkwNjM&ixlib=rb-1.2.1&q=80&w=1080' }, // computer
        { name: 'Pro2', image: 'https://images.unsplash.com/photo-1599687268471-c20750aa2957?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' }, // code
        { name: 'Pro3', image: 'https://images.unsplash.com/photo-1596831749402-783c83a82655?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' }, // laptop
        { name: 'Pro4', image: 'https://images.unsplash.com/photo-1603389335957-10bea39c9d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaG5vbG9neSUyMHByb2R1Y3RzfHwwfHx8fDE2MjkxNTAyMzc&ixlib=rb-1.2.1&q=80&w=1080' }, // server
      ],
    },
    {
      name: 'Cooking',
      providers: [
        { name: 'Pro1', image: 'https://plus.unsplash.com/premium_photo-1664283229621-794dec382c4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }, // chef
        { name: 'Pro2', image: 'https://plus.unsplash.com/premium_photo-1669833055018-a6a1ba07b4a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29va2luZyUyMGNoZWZ8ZW58MHx8MHx8&w=1000&q=80' }, // food
        { name: 'Pro3', image: 'https://plus.unsplash.com/premium_photo-1672076781343-cd9998afbec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY29va2luZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }, // kitchen
        { name: 'Pro4', image: 'https://plus.unsplash.com/premium_photo-1666712683208-b20e12a3fa41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2luZyUyMGNoZWZ8ZW58MHx8MHx8fDA%3D&w=1000&q=80' }, // meal
      ],
    },
    {
      name: 'Photography',
      providers: [
        { name: 'Pro1', image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }, // camera
        { name: 'Pro2', image: 'https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' }, // portrait
        { name: 'Pro3', image: 'https://images.unsplash.com/photo-1599302592205-d7d683c83eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8Mnx8dHJvcGljYWwlMjBzdW5zZXR8fDB8fHw&ixlib=rb-1.2.1&q=80&w=1080' }, // landscape
        { name: 'Pro4', image: 'https://images.unsplash.com/photo-1503864664483-e8a499e2eb22?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' }, // photo
      ],
    },
    {
      name: 'Education',
      providers: [
        { name: 'Pro1', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }, // books
        { name: 'Pro2', image: 'https://images.unsplash.com/photo-1540402871140-1e9e22e05299?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w5NDE1OTMxfHxlbnwwfHx8fA%3D%3D&w=1000&q=80' }, // classroom
        { name: 'Pro3', image: 'https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&bg=white&mark-w=824&mark-y=0&blend-mode=normal&blend-align=middle%2Cright&mark-x=0&mark=https:%2F%2Fimages.unsplash.com%2Fphoto-1453749024858-4bca89bd9edc%3Fixlib%3Drb-4.0.3%26w%3D824%26fit%3Dcrop%26q%3D60%26fm%3Djpg%26crop%3Dedges%252Cfaces%26cs%3Dtinysrgb%26auto%3Dformat%26h%3D630%26mark-w%3D64%26mark-align%3Dtop%252Cleft%26mark-pad%3D50%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Flogo.png%26blend%3D000000&blend=https:%2F%2Fimages.unsplash.com%2Fopengraph%2F1x1.png%3Fauto%3Dformat%26fit%3Dcrop%26w%3D376%26h%3D630%26q%3D60%26bg%3Dwhite%26mark-w%3D372%26mark-y%3D317%26blend-mode%3Dnormal%26blend-pad%3D0%26blend-w%3D372%26blend-align%3Dtop%252Cleft%26blend-x%3D4%26mark-x%3D4%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252F1x1.png%253Far%253D372%25253A313%2526auto%253Dformat%2526fit%253Dcrop%2526h%253D313%2526q%253D60%2526crop%253Dedges%25252Cfaces%2526blend-mode%253Dnormal%2526blend-alpha%253D100%2526blend%253Df2f2f2f2%26blend%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1503676260728-1c00da094a0b%253Fixlib%253Drb-4.0.3%2526w%253D1080%2526fit%253Dcrop%2526q%253D60%2526fm%253Djpg%2526crop%253Dedges%25252Cfaces%2526cs%253Dtinysrgb%2526ar%253D372%25253A313%2526auto%253Dformat%2526blend-mode%253Dnormal%2526blend-alpha%253D10%2526blend%253D000000' }, // study
        { name: 'Pro4', image: 'https://images.unsplash.com/photo-1552256028-2c58c3cbfa7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60' }, // learning
      ],
    },
    {
      name: 'Health',
      providers: [
        { name: 'Pro1', image: 'https://images.unsplash.com/photo-1544463914-80667a08622d?auto=format&auto=compress&h=1000&q=45&w=1000&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D' }, // wellness
        { name: 'Pro2', image: 'https://images.unsplash.com/photo-1549477880-6703139139c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8NDY1NzkwMXx8ZW58MHx8fHw%3D&w=1000&q=80' }, // doctor
        { name: 'Pro3', image: 'https://images.unsplash.com/photo-1511909525232-61113c912358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8aGVhbHRoJTIwYW5kJTIwZml0bmVzc3x8MHx8fHwxNjI5MTI4NjY2&ixlib=rb-1.2.1&q=80&w=1080' }, // hospital
        { name: 'Pro4', image: 'https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&bg=white&mark-w=824&mark-y=0&blend-mode=normal&blend-align=middle%2Cright&mark-x=0&mark=https:%2F%2Fplus.unsplash.com%2Fpremium_photo-1661543009359-27d02e92876b%3Fixlib%3Drb-4.0.3%26w%3D824%26fit%3Dcrop%26q%3D60%26fm%3Djpg%26crop%3Dedges%252Cfaces%26cs%3Dtinysrgb%26auto%3Dformat%26h%3D630%26mark-w%3D64%26mark-align%3Dtop%252Cleft%26mark-pad%3D50%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Flogo.png%26blend%3D000000&blend=https:%2F%2Fimages.unsplash.com%2Fopengraph%2F1x1.png%3Fauto%3Dformat%26fit%3Dcrop%26w%3D376%26h%3D630%26q%3D60%26bg%3Dwhite%26mark-w%3D372%26mark-y%3D317%26blend-mode%3Dnormal%26blend-pad%3D0%26blend-w%3D372%26blend-align%3Dtop%252Cleft%26blend-x%3D4%26mark-x%3D4%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1666620693112-a0a435ff6a46%253Fixlib%253Drb-4.0.3%2526w%253D1080%2526fit%253Dcrop%2526q%253D60%2526fm%253Djpg%2526crop%253Dedges%25252Cfaces%2526cs%253Dtinysrgb%2526ar%253D372%25253A313%2526auto%253Dformat%2526blend-mode%253Dnormal%2526blend-alpha%253D10%2526blend%253D000000%26blend%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1666620657207-c748f7600a42%253Fixlib%253Drb-4.0.3%2526w%253D1080%2526fit%253Dcrop%2526q%253D60%2526fm%253Djpg%2526crop%253Dedges%25252Cfaces%2526cs%253Dtinysrgb%2526ar%253D372%25253A313%2526auto%253Dformat%2526blend-mode%253Dnormal%2526blend-alpha%253D10%2526blend%253D000000' }, // health
      ],
    },
    {
      name: 'Business',
      providers: [
        { name: 'Pro1', image: 'https://images.unsplash.com/photo-1525095182007-3874c4e2b38b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8d29ybGQlMjBidXNpbmVzc3x8MHx8fHwxNjI1NzkwNzY4&ixlib=rb-1.2.1&q=80&w=1080' }, // office
        { name: 'Pro3', image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' }, // workspace
        { name: 'Pro4', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8Y29tcGFuaWVzfHwwfHx8fDE2MjkyOTE0Mjk&ixlib=rb-1.2.1&q=80&w=1080' }, // business
      ],
    },
    {
      name: 'Travel',
      providers: [
        { name: 'Pro1', image: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTI2NTE3NHx8ZW58MHx8fHw%3D&w=1000&q=80' }, // landscape
        { name: 'Pro2', image: 'https://images.unsplash.com/photo-1519055548599-6d4d129508c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dHJhdmVsbGluZ3x8MHx8fHwxNjI3MzczNzQx&ixlib=rb-1.2.1&q=80&w=1080' }, // adventure
        { name: 'Pro3', image: 'https://images.unsplash.com/photo-1504732099162-d8c9d5ba3bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8dHJhdmVsbGVyfHwwfHx8fDE2MjcyMDQxODg&ixlib=rb-1.2.1&q=80&w=1080' }, // journey
        { name: 'Pro4', image: 'https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHx6SEpoQkN3a1F0Y3x8ZW58MHx8fHw%3D&w=1000&q=80' }, // travel
      ],
    },
  ]);

  private readonly selectedCategory = signal<string>('');

  getCategories() {
    return this.categories;
  }

  getData() {
    return this.data;
  }

  getSelectedCategory() {
    return this.selectedCategory;
  }

  setSelectedCategory(category: string) {
    this.selectedCategory.set(category);
  }

  scrollToCategory(categoryName: string) {
    const element = document.getElementById(`category-${categoryName}`);
    if (element) {
      this.setSelectedCategory(categoryName);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollCategoryIntoView(categoryName: string) {
    const categoryElement = document.getElementById(`nav-${categoryName}`);
    if (categoryElement) {
      const container = categoryElement.parentElement;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const elementRect = categoryElement.getBoundingClientRect();
        
        const scrollLeft = elementRect.left + container.scrollLeft - (containerRect.width / 2) + (elementRect.width / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }
} 