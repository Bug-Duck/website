export interface Article {
  id: number
  title: string
  coverImg: string
  summary: string
  date: string
}

export const articles: Article[] = [
  {
    id: 3,
    title: 'BugDuck join the CosCon 2024',
    coverImg: '/coscon24/image.png',
    summary: 'We have made a presentation in the CosCon 2024, Beijing, China.',
    date: '2024-08-10'
  },
  {
    id: 2,
    title: 'BugDuck join the AdvantureX 2024',
    coverImg: '/adventure-x-hangzhou-2024.png',
    summary: 'The June 2024, we joined a Hackathon as a team in AdvantureX 2024, Hangzhou, China.',
    date: '2024-07-22'
  },
  {
    id: 1,
    title: 'Newcar join the Dromara Open Source Community',
    coverImg: '/images/tech2024.jpg',
    summary: 'Newcar has joined the Dromara Open Source Community! Welcome to visit the new repository: [Newcar](https://github.com/dromara/newcar)',
    date: '2024-04-16'
  },
]

// 获取单篇文章的方法
export function getArticleById(id: number): Article | undefined {
  return articles.find(article => article.id === id)
}

// 获取所有文章的方法
export function getAllArticles(): Article[] {
  return articles
} 