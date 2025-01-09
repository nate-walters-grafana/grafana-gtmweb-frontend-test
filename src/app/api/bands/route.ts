const bands = [
  {
    id: 0,
    title: 'Dave Matthews Band',
    href: 'https://davematthewsband.com/',
    description:
      'The most popular jam band of all time. Dave Matthews Band has been touring for over 30 years and has a dedicated fanbase that follows them around the world.',
    imageUrl:
      '/dave-matthews-band.jpg',
    date: 'Jan 1, 2025',
    datetime: '2025-01-01',
    category: { title: 'Music', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Editor / Rolling Stone',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    title: 'The Grateful Dead',
    href: 'https://www.dead.net/',
    description:
      'The jam band that started it all. The Grateful Dead toured until 1995 and have since had various reunions and spin-off bands. Their music is a mix of rock, folk, bluegrass, and blues.',
    imageUrl:
      '/the-grateful-dead.jpg',
    date: 'Jan 5, 2025',
    datetime: '2025-01-05',
    category: { title: 'Music', href: '#' },
    author: {
      name: 'Lindsay Walton',
      role: 'Staff Writer / SPIN',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Phish',
    href: 'https://phish.com/',
    description:
      'The reigning kings of jam. Phish have influenced countless other bands with their blend of rock, jazz, and funk. They are known for their live shows and improvisational style.',
    imageUrl:
      '/phish.jpg',
    date: 'Jan 8, 2025',
    datetime: '2025-01-08',
    category: { title: 'Music', href: '#' },
    author: {
      name: 'Madison Bloom',
      role: 'Staff Writer / Pitchfork',
      href: '#',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/C4E03AQFohKnlPw0uwQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517249203329?e=2147483647&v=beta&t=rQxGxSuadIUVeQ2P20HTPfc8wWcdWpNUbA48NYkOt58',
    },
  },
]

export async function GET(request: Request) {
  return new Response(JSON.stringify(bands), {
    headers: { 'Content-Type': 'application/json' },
  });
}