import React from 'react'
import './Footer.css'


const Footer = () => {
	var liStyle = {
		color: 'white'
	  };
	return (
		<>

			<footer class="footer">
				<div class="container">
					<div class="row">
						<div class="footer-col">
						<h4 style={{ color: "#11253e" }}>.</h4>
							<ul>
								<li><a href="/">Ana Sayfa</a></li>
								<li><a href="/">Akademik</a></li>
								<li><a href="/">Öğrenci</a></li>
								<li><a href="/">Bilgi İşlem</a></li>
							</ul>
						</div>
						<div class="footer-col">
							<h4 style={{ color: "#11253e" }}>.</h4>
							<ul>
								<li style={liStyle}> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAeJJREFUSEvFlmtRA0EQhLsVQBQACgAFBAegAFAAKAAcREKigEIBoACiACQEBUP11e7Vstnn8SPzM7mbb6bndcSOjDviohtsZocAjgGcuKA/AaxJfvck0Qw2s2sADwAETpkCWJBctQRQBbsMn4MMa34VwGVNgSLYzCTnK4D9Gi36fwPgnKSCSFoWbGaCfRSkrcWimp+SVBBbVgIvAVzVvAf/r12Qe8FvK5LqjTawq+tXJ3TuwG8AQvhRqt7JjM3s0XVwK3tJ8kYPu75Qibzdk1zEjnJgRX3WQJW8aiCVZICbWVyid5JS44/lwGqIUK5UDILO1TwBTA0Vz/mG5KwVbJVsR6h/zswEPUg2ErmVYC7jrBOtR59pAC1NgNapX69jXL017oUK1FVjdeFtJNsUqFw8kdSUNDWXpAlHQi/Nwi2U6N5cW7TPsZtHjYnO32AMGqQDmpR58JcL08wuAOgqefOzqBWYXIMJXzoU2glbVrtOrYsk5fuFpIJPWg2sZSDJa8skdv6jRZK7TEWpvaeE5Lkkwt+zEo890+Kl82gkj0LMqX76BJm33Ofs/Z0MdiNWgjdDm2ocR5qRvUne0Fez1OFL7lPXH/c7klKiyyaBnezDxSl9SZYimQzuSq93c/3Xeen9X7WQvh8XxPCJAAAAAElFTkSuQmCC"
									alt="location" />
									Üniversite Mahallesi Bağlariçi Caddesi No:7, 34320 Avcılar/İstanbul
								</li>
								<li style={{ color: "white" }}>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAYJJREFUSEvtlmFVAzEQhGcUgANwADioA0ABrQKKAloFFAXUAaAAJIADcAAKhjd9SV+u3CUtzeP+3P7MJfvtzu7mQvRk7ImLAfxvyjekljQGcAvguHIEHwDmJJfR7xosaQTgpTJw090ZyTcvpuBZyNbr88oBWMWVX5LmdIJnJKvAJTUSKoEd1BOACcmvv2Qv6RDAA4CL5Hwx47jXTXEZ67JtAJJOATy2NGkR/AzgPICc8U3akbkAwmTcAXDGttRXHkySkqYA7CDakuSkAPW4XCV7HPBCkrZqLoO9MYyYa30QDnoULL1LsDZJnntLa4lt364tydfgZzdwOGTJ7OAkkd7w6NTzb2iU9h3AKG3KnTPeyGoB4DpZ85hYmTij/nRP0iVq2F7gkL2vVAcQpY8ASzvtasC9wQHuOrqJovSWdpwbuSrgpO7O3OZMs5dMNXBupNq+DWCr0vVbXP26Klr013pl9vMQSObU0R1VzNauPgH4H//76VMZVHQ3vKuLEtXa0JvUP4sv4h9duHwiAAAAAElFTkSuQmCC"
										alt="mail-logo" style={{ alignItems: "flex-start" }} />
									bilgi@iuc.edu.tr
								</li>
								<li style={{ color: "white" }}>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAVxJREFUSEvt1t1RwzAQBODdCoAKoARKgAqACiAVQAdAB6QCQgWkAyiBEpIOQgXHHCMbWZZs3RlPXqJHT6RPp5+NiD017smFGxaROwBC8s0zeRcsIisAtwFckVxYcTOcoI1nxk1wgn4H9chTeTWcQS8C+AnAjFfBOZTkl8Iicg7AjI/CQ2izwR58EK5BvXgRtqAePAt7UCveg6egFrwDZ8LhmeSTNZXCadd+j1HfTsi0cMje1wT5T1iHXpDUuP37kxCRawDvM8M3JNcdOAqDYwAfYQKdikXkAcBVYenXJJfRPsdLfQlg14ROD446SQqLyAuA+5H9XpLUyWmitTDJ3iEuXacc3HzbAtgkEzgDcBqqOpkL7h24XHVzVHyAswfpsNTpNSxdp130nPFEddxnS1KvW6eVYH0zp7ntnUCbz/EAQw8BfUtpfk9pGqO/b7OqiqdItX1HH3u1A1l/9wODmCUuf7HoQQAAAABJRU5ErkJggg=="
										alt="kep-logo" />
									istanbulc@hs01.kep.tr
								</li>
							</ul>
						</div>
						<div class="footer-col">
							<h4 style={{ color: "#11253e" }}>.</h4>
							<ul>
								<li style={{ color: "white" }}>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAhNJREFUSEvllutNw0AQhGcqACqADkgqACoAKiB0ABWQVAAdABUAFZBUQNJBqIB0sGiiPetyWdvgWOIHJ1lRZPu+fczOmfijxT/iohFsZvsArgAsSE77DLIW7NB3AAMHXpN86gseggNo4vUG3wIH0E8Ah1mmvcAj8CuAcwctAJwCuADw2Cd8A2xm6udHDiW50n8zG/UJL8HKToLSOiuVbGY3AO79/orkQVexNWV8SVJlX6+g9zOSCrTTinpsvtOE5DgDa45PojZ0IUfgOYBjAG8kJaqUcQpIKh+k3neB6p0ILJOQW4Fkdd/Mktp36m0KNAIryxd/oOpzoeqdZ7nOuTRCewCmJM+yci/dTPQ73KXcdWCJ6q4cqyJraUEjt57zTPmqlvzgtsnbm7z6y/ebkxxmm1caAKDMxySfa/y9tiVNp1OedTVaDnhIAvSAlLWuo0DlIbztPE6jpf02NvCyK7j8ANFz8ndVJTnc1rvhOOURu3fLOCS0cAMPQJOgg2WmA0V9b/P21k+f4uAQXD2d/MQ4Anjl/61gV6tUmmeuFki1jZ9Drgeddqn3ekf6aP7mCsqu3slO0xL4SaouKxCofH22p/H7UcZFABKUjsfU93RblqpK6JLClVn6XtuA/irjAq6vT8GjAMrkt6CdwUUQUrQuZZe3QY+9ARhF1vrrUrep2adAFVmSlLOFq3dwW2Dp/v8DfwMQkfMfj2HxMQAAAABJRU5ErkJggg=="
										alt="telefon-logo" />
									+90 (212) 404 03 00
								</li>
								<li style={{ color: "white" }}>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAhNJREFUSEvllutNw0AQhGcqACqADkgqACoAKiB0ABWQVAAdABUAFZBUQNJBqIB0sGiiPetyWdvgWOIHJ1lRZPu+fczOmfijxT/iohFsZvsArgAsSE77DLIW7NB3AAMHXpN86gseggNo4vUG3wIH0E8Ah1mmvcAj8CuAcwctAJwCuADw2Cd8A2xm6udHDiW50n8zG/UJL8HKToLSOiuVbGY3AO79/orkQVexNWV8SVJlX6+g9zOSCrTTinpsvtOE5DgDa45PojZ0IUfgOYBjAG8kJaqUcQpIKh+k3neB6p0ILJOQW4Fkdd/Mktp36m0KNAIryxd/oOpzoeqdZ7nOuTRCewCmJM+yci/dTPQ73KXcdWCJ6q4cqyJraUEjt57zTPmqlvzgtsnbm7z6y/ebkxxmm1caAKDMxySfa/y9tiVNp1OedTVaDnhIAvSAlLWuo0DlIbztPE6jpf02NvCyK7j8ANFz8ndVJTnc1rvhOOURu3fLOCS0cAMPQJOgg2WmA0V9b/P21k+f4uAQXD2d/MQ4Anjl/61gV6tUmmeuFki1jZ9Drgeddqn3ekf6aP7mCsqu3slO0xL4SaouKxCofH22p/H7UcZFABKUjsfU93RblqpK6JLClVn6XtuA/irjAq6vT8GjAMrkt6CdwUUQUrQuZZe3QY+9ARhF1vrrUrep2adAFVmSlLOFq3dwW2Dp/v8DfwMQkfMfj2HxMQAAAABJRU5ErkJggg=="
										alt="telefon-logo" />
									+90 (212) 414 34 34 
								</li>
								<li style={{ color: "white" }}>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAhNJREFUSEvllutNw0AQhGcqACqADkgqACoAKiB0ABWQVAAdABUAFZBUQNJBqIB0sGiiPetyWdvgWOIHJ1lRZPu+fczOmfijxT/iohFsZvsArgAsSE77DLIW7NB3AAMHXpN86gseggNo4vUG3wIH0E8Ah1mmvcAj8CuAcwctAJwCuADw2Cd8A2xm6udHDiW50n8zG/UJL8HKToLSOiuVbGY3AO79/orkQVexNWV8SVJlX6+g9zOSCrTTinpsvtOE5DgDa45PojZ0IUfgOYBjAG8kJaqUcQpIKh+k3neB6p0ILJOQW4Fkdd/Mktp36m0KNAIryxd/oOpzoeqdZ7nOuTRCewCmJM+yci/dTPQ73KXcdWCJ6q4cqyJraUEjt57zTPmqlvzgtsnbm7z6y/ebkxxmm1caAKDMxySfa/y9tiVNp1OedTVaDnhIAvSAlLWuo0DlIbztPE6jpf02NvCyK7j8ANFz8ndVJTnc1rvhOOURu3fLOCS0cAMPQJOgg2WmA0V9b/P21k+f4uAQXD2d/MQ4Anjl/61gV6tUmmeuFki1jZ9Drgeddqn3ekf6aP7mCsqu3slO0xL4SaouKxCofH22p/H7UcZFABKUjsfU93RblqpK6JLClVn6XtuA/irjAq6vT8GjAMrkt6CdwUUQUrQuZZe3QY+9ARhF1vrrUrep2adAFVmSlLOFq3dwW2Dp/v8DfwMQkfMfj2HxMQAAAABJRU5ErkJggg=="
										alt="telefon-logo" />
									+90 (212) 404 07 01
								</li>
							</ul>
						</div>
						<div class="footer-col">
							<h4>Sosyal Medya</h4>
							<div class="social-links">
								<a href="/"><i class="fab fa-facebook-f"></i></a>
								<a href="/"><i class="fab fa-twitter"></i></a>
								<a href="/"><i class="fab fa-instagram"></i></a>
								<a href="/"><i class="fab fa-linkedin-in"></i></a>
							</div>
							<div>
								<img src="https://basvuru.istanbulc.edu.tr/assets/img/iuc_large_p.png" alt="Iuc Logo" width="280" height="77" />
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}

export default Footer