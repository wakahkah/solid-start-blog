import { Outlet } from 'solid-start'
import style from './blogPost.module.scss'

export default function BlogPost() {
    return (
        <div class={style.blogPost}>
            <h1>Layout</h1>
            <Outlet />
        </div>
    )
}