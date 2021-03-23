
import Link from 'next/link'

export default function Nav() {
	return (
		<div className="nav">
			<div className="hero"></div>
			<div className="acts">
				<Link href="/"><div className="home active">Home</div></Link>
				<Link href="/acts/chapter2"><div className="home ">Chapter 2</div></Link>
				<Link href="/acts/chapter3"><div className="home ">Chapter 3</div></Link>
				<Link href="/acts/chapter4"><div className="home ">Chapter 4</div></Link>
				<Link href="/acts/chapter5"><div className="home ">Chapter 5</div></Link>
				<Link href="/acts/chapter6"><div className="home ">Chapter 6</div></Link>
				<Link href="/acts/chapter7"><div className="home ">Chapter 7</div></Link>
				<Link href="/acts/chapter8"><div className="home ">Chapter 8</div></Link>
			</div>
		</div>
	)
}