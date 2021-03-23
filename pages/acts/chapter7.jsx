import Nav from '../../components/Nav'
import { useState } from 'react' 


export default function chapter7() {
	const [sched, setSched] = useState([
		'hello',

		])



	return (
		<div className="chapter7">
			<Nav />
			<div className="content">
				<div className="head">
              	<img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2019/01/featured_5.jpg" alt="" />
				<p>Tv Shows Schedule</p>
				</div>

				<div className="content">
					<table>
	<tbody>
		<tr>
			<td></td>
			<td>5am</td>
			<td>6am</td>
			<td>6:30am</td>
			<td>7am</td>
			<td>7:30am</td>
			<td>8am</td>
			<td>8:30am</td>
		</tr>
		<tr>
			<td>Monday</td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2019/03/Tv-Mass_480x270.jpg" alt="" /></td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/05/BATIBOT_480X270.jpg" alt="" /></td>
			<td>BEN 10</td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/07/CKND_480x270.png" alt="" /></td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/07/DEXTER_480x270.png" alt="" /></td>
			<td>GENERATOR REX</td>
			<td>ADVENTURE TIME</td>
		</tr>
		<tr>
			<td>Tuesday</td>

			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2019/03/Tv-Mass_480x270.jpg" alt="" /></td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/05/BATIBOT_480X270.jpg" alt="" /></td>
			<td>BEN 10</td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/07/CKND_480x270.png" alt="" /></td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/07/DEXTER_480x270.png" alt="" /></td>
			<td>GENERATOR REX</td>
			<td>ADVENTURE TIME</td>
		</tr>
		<tr>
			<td>Wednesday</td>
	
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2019/03/Tv-Mass_480x270.jpg" alt="" /></td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/05/BATIBOT_480X270.jpg" alt="" /></td>
			<td>BEN 10</td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/07/CKND_480x270.png" alt="" /></td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/07/DEXTER_480x270.png" alt="" /></td>
			<td>GENERATOR REX</td>
			<td>ADVENTURE TIME</td>
		</tr>
		<tr>
			<td>Thursday</td>
	
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2019/03/Tv-Mass_480x270.jpg" alt="" /></td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/05/BATIBOT_480X270.jpg" alt="" /></td>
			<td>BEN 10</td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/07/CKND_480x270.png" alt="" /></td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/07/DEXTER_480x270.png" alt="" /></td>
			<td>GENERATOR REX</td>
			<td>ADVENTURE TIME</td>
		</tr>
		<tr>
			<td>Friday</td>

			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2019/03/Tv-Mass_480x270.jpg" alt="" /></td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/05/BATIBOT_480X270.jpg" alt="" /></td>
			<td>BEN 10</td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/07/CKND_480x270.png" alt="" /></td>
			<td><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2020/07/DEXTER_480x270.png" alt="" /></td>
			<td>Generator Rex</td>
			<td>Adventure Time</td>
		</tr>
		<tr>
			<td>Satuday</td>
			<td></td>
			<td>Power to Unite</td>
			<td colspan="3"><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2019/03/Tv-Mass_480x270.jpg" alt="" /></td>
			<td>Johnny Bravo</td>
			<td>Top 20 Funniest</td>
		</tr>
		<tr>
			<td>Sunday</td>
			<td></td>
			<td colspan="2"><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2019/03/Tv-Mass_480x270.jpg" alt="" /></td>
			<td colspan="2"><img src="http://corpcms.tv5.com.ph/5network/wp-content/uploads/2019/01/featured_Helens-Kitchen.jpg" alt="" /></td>
			<td colspan="2">NBA</td>
			<td></td>
		</tr>
	</tbody>
</table>
				</div>
			</div>
		</div>
	)
}


