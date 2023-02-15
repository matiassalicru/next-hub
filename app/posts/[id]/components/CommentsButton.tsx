'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const COMMENTS_ROUTE = 'comments'

const CommentsButton = ({ id }: { id: string }): JSX.Element => {
  const pathname = usePathname();
  const isCommentsRoute = pathname?.includes(COMMENTS_ROUTE)
  const [areCommentsVisibles, setAreCommentsVisibles] = useState(isCommentsRoute)

  return (
    <Link
      href={areCommentsVisibles ? `/posts/${id}` : `/posts/${id}/comments`}
      onClick={() => setAreCommentsVisibles((prev) => !prev)}>
      {areCommentsVisibles ? <p>Ocultar comments</p> : <p>Mostrar comments</p>}
    </Link>
  )
}

export default CommentsButton
