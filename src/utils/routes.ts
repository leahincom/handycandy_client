export const getRoutesName = {
  home: '/',
  complete: '/complete',
  completeDetail: (id: number) => `/complete/${id}`,
  reward: '/reward',
  category: '/category',
  categoryDetail: (slug: string) => `/category/${slug}`,
  wish: {
    total: '/wish/total',
    detail: (cid: string) => `/wish/detail/${cid}`,
    category: '/wish/category',
    categoryDetail: (slug: string) => `/wish/category/${slug}`,
  },
};
