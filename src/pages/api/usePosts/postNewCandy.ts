import { instance } from '..';

export interface NewCandy {
  candy_id: string;
  category_name: string;
  candy_name: string;
  category_image_url: string;
}

export interface Candy {
  category_id: string;
  candy_name: string;
  shopping_link: string;
  candy_image_url: string;
  detail_info?: string;
}

export const postNewCandy = async (data: Candy) => {
  const cards = await instance.post(
    `/api/candies`,
    {
      category_id: `${data.category_id}`,
      candy_name: `${data.candy_name}`,
      shopping_link: `${data.shopping_link}`,
      candy_image_url: `${data.candy_image_url}`,
      detail_info: `${data.detail_info}`,
    },
    {
      headers: {
        'x-auth-token': localStorage.getItem('userToken'),
      },
    },
  );

  return cards.data.result as NewCandy;
};
