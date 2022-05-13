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
								<a href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAQdJREFUSEvtlj1OhkAQht8R7/FxE7FbOxrXWNoQbiHeYvUrtCNgYWzMduINPALcwAuQMUYkgpBdDD8xLuUy8Ow8sy+BsNFFG3Hxd8EiTn2qvd2XOfbqSqvz0mTy1x2L+D4A8y0AvwMhvGglg0XAJ1EWMtHD4MuXBIsoL0Fo9a7ScaP4uQ8DuPhco1IreTe76h+aGZW+kd05m6gf27Oo6ZSIOEvAdNkuWs60z3HgQfMizgswjizH8qivZWiqtVI9CUx8pdVZsgEYF7PFaVrHdKzVaZPp8b6tVH9/3MUJ7gNiylFz3x0uoygXpxXjlPrAYfvHcVDz29Nevhpn1CuYfKqnAsbq/x/4HZsTmR/Tyk57AAAAAElFTkSuQmCC" alt="facebook"/></a>
								<a href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAi5JREFUSEvtVk1yEkEYfV9jqTtmFgo7uUHGE4gnkJxAUgG3khNkPIG6laTAEwRPILmBuQFLiIsZdmJBv1QjpGaG+emBKrPQrmLBzNfvfd/7vn49ggda8kC8+E/815Q/WGpnEDiPtXovZBOA+U0oMvyt9OfwxA1NJfVB0PgFhNv/5lmM2IA8WcnVosLjaFCWDAaQK/kOoJESs05AyBaI+azrmKTuV4z4+UXQEsgVgNGs4xwX6V7rh2MIXhXE3UiFLSzRmHbd8TY2RlzvBz5Fzjcvx1rz7Oc790cacL0fNCnraouWkVu0ZjOKlSTeAaOIH+3XlqV2GfRA+VjECmCeJN3psXlQuwiZAhYSMhLq0eIRrk3/E+pk8gv5Ydp1/WTAzlTXL4M2KQOLSiYZQxXbakW8lk+rFxB6m6NhwZ8fIsKT6ak7zK24xMBYJ6Q1X6YNaNo5NhJWrZHzA+ezjuOkhRzSY4vc5NusU21ZEZugZ18CTynlA3xjgZ430a+jphENTPXqzRk1pDGbK5UEcZ20yULijQcbx9q711lDlWqZ0Yz+yC3GW8uTC89mp+6nPIVyr8X1baXRJpUn4FsbqQn5etuptotii4mX6hzCXhGQeW9LGvNqU91T4ogrOFTKE967V+o5TCQyF2EvzaGyEt69nSC+xR27xZsDMlxUtG/z4WA11ViiTVEeSCeSyA2IkCITQI9uO+7IpgXWBrIvWJl9B3/slSErlHpfsDL7/r2K7wD9S/Af8rHTiwAAAABJRU5ErkJggg==" alt="twitter"/></a>
								<a href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAm5JREFUSEvVlj1y2kAYhp9VnKGEnMBQB8XmBCEdojE+QDI4Fwg3MJwg5AR2fIHgBtHFqVOALVLbNwgqGcvazAciyPoJku0ZnG00Gq322e/9fhVbWmpLXJ43eEyr9IL5XhZ17ihc1hjMNu1NtTiAHRvQ0lDedFD4u4IbHwZ3FHppl0gEOzTqCnUSArrAJCN8HyjKXrmAQh2+Zhj7NwYWS18yHwtUoc9voVNjdJMRutj2i+a+j+4DbwV+S6EWtTwGdrDkh08CrTJq5QHKXofme4VWVewzB+tC4MAXE7sTccf9ox0ssW7XQ1fyWipQ0GdyokYfibWgvsuzil1JBYvMO8x/g7o0GYqvYmspo38AKviuJwbGufhxivVBw9clWH18w/DEwdLy7lF4FZb7ntQSVHJD4IeJXY9SHZpd0MfJ8uuuyah3RaMNhjLwp1VGPx2aE9B7oN+ZjET6xcoMDkFdUH3wg0OMOmjxXxFUz2TYDV9s7ecHgIMoHQOuR6EcjdDARRIbxWhsPAq8tjZu0cq6VTZErX4UeEpjoFEHUT+FJb3Cain4Fk3D/xO8NalDwTXzKFRSgusaKD1pcAWlcJXDM9B9jVrlpPi2LdAnT6d15P6rgCRHfKYCsi6ZTEzsWlKFGtMo72C0Ff6iZGqMiYd/mlbXM5XMpaQPbxLxEvu3BLsmdmlTd1q0RWBgYh/mbYvJ5TJDWwzklolhF7jw0Ed522OQBZ8BaTSJZTZ19AF1GsDFCBne8ow+K1ld0K1wV0rsTmGZAsul00iqLGaoHMvVy2Gvk2vYiwKWkZxt0jQwZknDXfTM5z3Q55A489atWfwHpuptLqb2ObAAAAAASUVORK5CYII=" alt="instagram"/></a>
								<a href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZhJREFUSEvtlr8vA2EYxz/vxcAgarCYWE21kzDqtcFikEiIgbGGtre1trsasNmQSIwkXE1C2IXJ2j+BhESr+sppaN+r8+vuUkOf8b3nns89z/N9n+cELTLRIi7/DGzY80AfL9VT1hJXYVSlOeNM4RLkSB0m57Die0HDVXDGXgK2XJBbLH0oXHDaziLIqRD5gBXvDhecOh5FExcKRLJPXp8NF+xETx8to2kGkn7ggK7HRXIzD+GDgyZ4xAv2HqfsKIieN9Zz6YaN6TuvPFSwcTSG1M4UZ8Eqpl4TnGHnkGSV55YuSBemEHIdGHCBDhHaCuZE0f0B/sGCBSTbX3SoSKk87M7ePxiccka+kcYmlp5s9AkC3BjvHqj1WLUilj4YPNgpt6nv1HTwiU6c81K5t7Hc/jMWYhcz5iyVumXsQ2BSFWl1HDNx/n7mHyzFNPmYA6rbZ+oXQYNdAT2vXRus9uYPk6tdaq+Z3haXIq7kQYTOjqg6ZjuKH2vNOBmAirr6nirXTXv3B37B/gh8s6K8l8QvXvTr2rKMXwHMhSYub5P1qQAAAABJRU5ErkJggg==" alt="in"/></a>
							</div>
							<div>
								<img src="https://basvuru.istanbulc.edu.tr/assets/img/iuc_large_p.png" alt="Iuc Logo" width="260" height="77" />
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}

export default Footer