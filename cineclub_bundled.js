import { renderRouteCard, renderGridCard, renderDiaryCard, renderStatsCard, renderMovieCard, renderWatchingCard, renderPartyCard, renderPartyStatsCard, renderLeaderboardCard } from "./og_render.mjs";
var LOGO_B64 = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAkuElEQVR4nO19eZBeV3Xn75x73/ItvapbrdZuybIkG2Mw3rDBSRwIeKgZhm0qpGam5g8mU5lJCEmcYGaqZlIzyUBC2AIVIEvNBBgWh4BJMDiEQILBYMA43rFl7VurV3V/21vuPWf+eF+3Wq3ultVqfRJYv/pK1fq+d9+975x7zz3bPY9UFUDx7zwQCADUi6oYawEkafrDHz7ynQe/+8MfPfbM3v0nRseSVnpGwxcciBBGwdqBgau2X3HD9S+57dabbrr5+nJcAeCdA5ExpqARQQEF+LTmZ1Bw7r/qvRhjATz142c/89m//ur9X9+zZ2+90WTDNgitCYkBeqEzACAV9d7nWSIi5Tjevn3ba19zx7/9pbe86JrdALz3bJgAFJN6YeOFK0CISEQAYjbP7T3w3vd96J7Pf+HkZM2Wy3FcMoahUBVVncetFzqIiMiAIKJJkuSNWldP5c1vfP3v3PWOXTt3qKqqZ+YF0x8AiQjRqXWggHhnbQDg/R/+6Lvf86Hx0Ymu3i4bBl6cep29CrOraRGuvsBw+kQsWGGMy33t5HT/mv533vWrd/3m25ngnDPG0ukEKyb7KXgRa8zY+MQv/8o77r33vnJvdxSGLpeii7m27Q4vyx8AICgBWmyaABQEUhCsNXnu6lNTr3vdq//s4x8eHhpyLi8m96nGcwxQQLy31u7dd+CN/+bfPfbo030Da71kqjJLebosc5bAUpRRIrI2mBwf2717x733fOqqq650zhljACJSQOcYQCLOGLt334E7X/fG5w4e7evrz7PssoBZFdggmDk5tWXD0P1f+eKOK7d774xp7wfkVVhJRIhpYnLq51/z+seffqa3tz/PHV2e76sEbfNgcvdV2//ha3+7dqBfVZgNQAwlEBQqiv/4K29/7LEne/v68zy/TP1VBAEuz3v6+p988plf/pVfFyVVQqHGMEHEG2M+/NE/v/cL9/UNDrosu0z9VQcBLs37B9f+zb33/fFHPm6M8V4AkMsdG9534PDNt726lTlrSFVmm6z2IIiwiNX9AgIRvGhsg+9952vbr9gsIqxQInrPH75vYmwiDANVBeiydn+BoKpBYCcmpt79nj8iIihIVX+8Z+8tt94hZC8rmh0AEVRBkj/47a9fs+sqBvDJT90zPVWzgblM/Q5AhWxgZ6Ybn/zU5wBwvdW8776vBeUu7z2Ay8LngoMgImG5+ytf/XqtUeOHHnr4ub37olIkqlQY0pdxIcGAqMSlcO++/d/93g/5Ww98p5W2jLk88TsKZkrT9MEHH+JHH3+S2UAKx/RlNlxwqAIqqiA2jzz6uN2zd7+14azuvxA06zxdoLyvTKNfvtVSfRU/raDVeY5k0WHM/b1ia6Yt5kWCMNyz7yCPT04Za3HBjK9VwU+R7da2sVTFGDs+MWFbzYSZFIrCi306lnryZSiyzGw96yxe5tcVjGSZG55qVbjxT3/wVezrzHuAiv6UmZMkszil+ayOFba6cmkFNzwrTr9hwftOrjCdWwREZDvY8RLD6aB4UdWFq43kIgpeVV0YI/7pxjzqzyf6xdxgXlgMOAUlXBqT7+KLoPPESkX4paJW/cQzQFcmwi+ZfI5LiAErManoVFLOKpJ0ZcbdynBBGLCyB1BVAhS0jCWxsEnhXgfhAlBqZfr0uTZckgErM9ZXMIJF7rvgO6CwXBa5XAEQFzyAQpWIVDF3l8XGoUX22qLjPJ+5v7KnXpIBy9/uQqxNIbWqAsPwUAYzsxZLQiGsNGu1AlrkcpAhYigTgajwcIlCFV51gX5HCs8KZVZSzUUBZZBXAs1Thzrv87iE9gCrBGUlqCpZbiWapQ2GQo0QUPhqZ1P0GBIyQibLBCZiAPAiTpB7zR2c8twGTcoEL5yTlAUurNiSZScQCkNNVAMlBRZ3R17wp74ovS4GglhFZsAc2la9+aqr41e8bEuW1A2URIVEiQoeEMEatkyGrWFmw0wASFTFe+997sQJVGRWSSVhDTyxOl+N/uYbycP76tXusndKGnn2uHjWMHUNbrtIXS+EEEKSirHTreRVu/AX79zaN5jDpxC0JYsQVMEEZgQhTAAKYC3YFh4uqEAcXII8g8sh0m4IQrFGILBm/2H+939w6OHj1e4obEomACsuFgsuGgPOVHVCUCUyiavdvrP08bvW95ay3JG1RoREMtGMRCAgIrFMJjK2iqBMQQkodlYmAnyKrI6sqa7lvYj3EGEwyIgBE3zaKsV0uNb3tj8+9qO9GtkgySiHFrtv5/eAi8MAIlKoKlhJWFkARiWCSf0d19kP/vbO7ijNOWxON8cPzwQaeNfMssRlTp0HoNYEURRVusLqGgRlrlTiajcUzelxNGe0NZM2a2kryZLUeyFVw4EJFZbgafP2nrC3q2Kysenq2973zPf3miDgek7eA6QCIu1obs55MWAphf15KvIKITXK3vowjNW5xi9cE330Xdd3V1ueurJ6fujJoz5hJfEuzdMkSxo+y6DKxgSlcqmrz1a6u666duDaG6JSn2hWO/rMxMMP5hMT9fpUWqulaSZOQWytMSEjCiO1cRdvu3F7FGoozcOT5tfe/8wj+xgmrLc0NY68YbBCnv9TLHhwLLGMlqTVihmwfJhwqUHMjY8UAAt5hoQ2lqT5M1fTn/y3F6/t9bA9aVodOTARRlVnuNEYs42mT1pZq6ZZIuKILZcrpVJPefOOjT//rxCuh3SJOrYzzX2PHPn2V/KpE2l9xuW5ei/ENgjDqBRGMdsIhLBs11+zwVDTuvrxSX3H+w8++BwJSyP15KzYVGHaKu/S418tcq1QC1o+hvV8hiiMQgSFJm5kzZ/fpR/9nV1DXWnOfXkaT7XioZ/713FXn7DLpo6O/eAH6ciREN6TV6fKbE2gJuzetlODtaLrOFwDcak/Fq/fHvSs0elxFwaAV0Nq2IZRWK5SVOI16yt9g9Ksjxw8MbytJ4tKw/2ND/7W1l9774//6VmUOG6wCEILL4uFp85nh1iq7QoZsMKhKHTWZcMKRW4DO9Vs/uxu++d3bxvobebolybGJmT49tvD/q3qKkxaHlq74da+w9/8W5pIKUgV4okNkWFrSiVSYhglwyxGiJiCOM6JjCEYggFsHJS6EHf1vuj6wd23mLACSZsjB0affXRo0Hijw72TH3n7tl/8g2e//1wSRoaUVE3HzILO+cSVoNSmPykJiG0wPd165Vb/ibuHBss1L+W0ERzYMxatGwq71jhfQbSe7eZcBmz/xq7hTSgsLiIocvLk02T8OLgJP6lu0udT1tclnUmaNTApQAxmY2zIJu7dsmPdS15J8RalTT5YX77ixr7dNx89OOE9Mtc92Jv+n3dsuXmr964YXec24Q4GJRQQFDoGibWWZmaSW67EJ9+5aSiYcULNWnroyf3IyUQxyBLHRDG4zByqmiAuKZGAVIVEjXOiyeSzT7QOPkV2gvWowVG4Y6NPPiTT4+Qde2EADDZsre3ZskOCLuIejbew3exdpdK/noLqoScOpEme5LhiKPu9t20NkEENdVAZ7ZwlzEqkgVBOgAm1Vm/evst+5rc2DpRnnENjJtn/zEgU9doI2cQUtOV1kpyBBuynwLXGzJTPKU1y30q9CDddmBqTTx74zjf6Rkai/gHNk+b+5+qH9vmk1mrOqEsJChuEREE5QhCRt0RWOfTsIRZAwGGzIfufOLj9mj4RDQJiNq5wPnXKLuscA5RUKQXUcmmqUX/VTvOJuzcMRtNN5dZUtufRiSgu+ZIQ0taxA1N7ftS38waoExii2smnfnTy2DN9w6FPynki4jJFYEMTltiUUj/2RHPSQlyQZ/0DaKUUZxF5IgYH5bDcV09ateN7yxt2eD9GGYxL1dRcMtWoTwjIJ1DnOVQRUQh1NlbTCQYUuQgMqBJZO1mb+bmr6S/v3jwQNbyWXL351NP1IDIUkSAXVw8TGn/kgWxqsjq8UcjUjx2ZfubhDZtsV18gSRneqHdKpMYaG5JhMDNIETiCeunNy+QsxIGUbExx3J+Hxw7unRl4pnvbTofUstfasWOPfjuvTzhNneaqHuJIRVUF2q4rcO52wApwYRkwX1sVEIdonazdsYs/effwUFzPTaU1I/t/XK+WqiYImBDAq8tzSm1Tpp/8wcmnfsjCmWTrd3RXu5DXpqJQQYBlEIMNGOAMnBcBgVABzQEPoyCAAatpUqe4e3hz9eij32kd2xv19nuf1Q4dSkcOU9LMmqnPc/UO4iGn6gAsr2evIlafAUslUBJRI8lu3x1/+l3r+yq1DL2tlj+8rxZ1DVJELDGxqDbIC1yau5bCOq+SNjbsHq6Wc5/URKMPfHbk8IQYhjBCEDEZRhEOQBEJ8HAiIurUBOwcy9teM7xzW4vDIMgbE48ftjbyEKj3SZI163mz7iWF94AKPEPZgJQ7JoYuyApYdOUaImmmL79u49Bam9SjZuL27m1UKwMmLCMIApI8T0Mxkqdpnvo8d67mG27jlX09Fefr4ybuuevPj/3F/VMpRz43RqHsmQvNVJm4qB7iVUVIyamaELHmtduvHrj6yiRtonlyOm3mYhOnuThxWZ4nSdrKBN47UWnnhndu/wXQ2XiAM8xZK1WNgkqpPkpd1B/09Pbtell53VYxrdbYaO2px6g2BhFqtbSVbNmxpnttmGUjZPrf/qF9n/iW6672lkRcWY2wICyO0xK0iFnOsp2pcOawaSS2nuXIRZIka5xsTOVhGHnNxIs48U7yTJ2q97OR/U5JnjmsPgOW2rgERii0gZAJvXYHVajzQzfeWt1+k2qPEMpDzUrv0OFvfTVImy3NN1y9tn9NmKXTEvT92odGP/FA2t/Vl2XqDcE7r0SQJdyWRbahN4Qsp+aMRwJNtVmrT081wqAs8Kq5ePVOslyUvaq0j6troa6pdooZnVwBROwtCGQAVvjqxq3VLddn6AtMn/EVl43H63Z0bfhx/eTxDdds6+4hn45RtP4df3z4//6T9PWsSdH0QRA6r7C+iMCcKS3aEoQIHgoVczJJgNDlsmlr79p1JWIDqCiRqIqoKgzC0Kp4mVtERFDtTGygcwwgElYFWxAZCImJS70wMWsPmX4Yy2lTKY56B7Lunr6h2NXHW9L9rj878ql/TPt7e7xPQIbVS9uRISSmnQyks4c/21BoqBQQOUBn6lARr2n/YImoNHcMXVUJVJDa5Q4iORxUSEmpc/HhDhpiirYLrl3iyKfNGWiLtKWSkJJIw5o0T2sK75wLy/zlrzX+3/0zld41zqWCgDSnwpcBIrU6Z6+2I/WnEm8JXskpLISSliHbEwQtAou0D0JAtfirfSzLOlhrTNXKcSVxRjrmpOloUF6Kda1ONCNo/ej+1vF9pY1VyTMFW9PIJw9OH3ouklwkhqKukkahcVBKFW3az2I5+SDsFBa5iSv0hUdrj/9ulvpZss82plNSXjwQ+qjmGq2wTJ7RwaBYBxlAJO2Z5+Azl6YyI8ce+seBNKkODIOpMTk68tj3svHjbBJyAYwQVLyjQNlVlOX5u4hZDCl5TgwHx09GR0a9zlsehc1Q5OAB0EIYaWJIwjACO4AALqTT0k+zOnZyp1eA9x7ekaOs1chSV5o4PvLg35XLXWopbc5wva6NemKakgcwKbxQHubl2eoui2GJXDZWghAHOUVkpEwFxWercc7Kq+JbJSPsTA4N2Isz2jbslo33LZVVd65c6eAmDEDVi0JyeJEsyxOfRTWm1CfTBBioyxKf1C3lyFMECRTKApBwRkKLyuVFH1hJFMRilSUnESVTbD5SpJ7SrNehEDQq5EWZFMqqGhD0zEzIuSm/ugmZnU3MalPBwQuJN66pTiULnAlJSbzkPs81JxVVBwGpUfKs6sWca1dFJZJCZvEcbZaepLPOB+IVxcJWLJE6yIBCDWqntikb8kGgHBmEICusJAmpAEYtESlIQVQUJ71ET8/Ow4r3g46uACY1TCBDbNhKEJgg7iY2AIi9wFrJQlYOxBoLJmJiAkguhfMsF8gu6yQDlImYCcZCAw5tGDmNu+J1W8trBkVl5tihfORoGIuGuQQxTMqsREWaTucPk3YIHXVFWCbDDI7VlmzsEKPv2pevedEtZLoB7d99fOyHD0w//SOKEjIxWIz1hkiKMHkHrdNOorMiyMAYwASgmEzStWnTwItuFrNGqJ/UUcmsfdkrs/FR1zhiKARnzDDEyoUB0GE/cYfQ6fR04mILhoeJ12/VsJd9v4TrSUVTokpqB9e7+oi3xjAVmegAfiqFT4GzMGD5Iztn6l5nub7QA4uTYFBSAVTnsgBJ2659ntX32/6auTufm6WzKsVNlrrtat3wLAw41zNi7bzPJTzpqhCvECUBQxpH9g1cPSnWUgaoY56S2kg2elTYQ/WUQ5iIAFmioM4KBr/M+Of/euYFZ52Oy3e6KFbo85tviy8I/C4Tx3AKL4B3JKl4Xzu0f+ThB5AeJzlOGHXT+44+9E03dUKyVH0OqKh3oqSq556oc9bs1eXLgyx6wVLfY2n/xFmxCnvA817p6kW9MMSpa2bNTLNs5ukfZmNHK/1DCkyfOJKeHNVWzVqvPoTLRZ0okUKgUMa5KEIdPmrxk2CIEYnAew+fa5b5pJklEsSN1okD6eh+UlEx5NIkqWkIziOYXLzo7Onhn1Z00hUBVRUv8JmKwKeaed+qUxDAGCg4b0qeuaxFgLgSxKkU5P9p5kAnV8Cs1qRCRMTsTeKQBqrwhpQcnKiqh3gvmkEEOhf1XcEy+MmwGzpqCQMACZiUmIw1phKaMgeBYaMg43NByqklCIgBRwjmiHhO1FeQwhhVIS1OobUTnmc9Gm3dt9BbACFhBakBeZJAeKl8i9VHB2PCAEDWAIbVWxMgilGOu9PAModCpC4NOLGpIxbmGFYL36mSChGfC0UIAvIAK4hVCV5hT1sPJLP6skLZSEDIVK037pw6WtjvuWuinSzWocRgYxCE0MBGUVQKpH+oZ+uVXX1DSjh5Yl/92WeizIllYyOwBzlASJebjov2ZYQBya1jNVYjNaqaL5BIRWhSAVYldZlViLBnpZxg6ByNvhXj7Jbwio2OhVYMYA0xMxDAxByyVCqDN9xe3fpiQQigsnXHVNRz/EffiSyTjUA5Uc4kdIpWzxeeSRGRCJNrSZok83io7Yeiwi4vsniFHNiYtCsMVI1AlzokszxBzkqTM7FCS/is3Sx+IpBhmUGWOCKm3uFN1Y1Xab6Ggh6FeDV9V990cuQwxvepCWBCJ00Q+Nyr0QjnBE/gLDPbBvLrNnPu2iSapT7NC/SoV7Wkk5l56NksR8nCL7rmlq/IubKg2NkZsIIMvcXniCoXuQZggIVMNDAoNlJUTdAHiGoqcaPUN5BNHPRMxuuWoVIlynLn2UJUWXjWJFagnbozr69Tag+LYWUKfC3xr70hft9/GkymMzZUZMbM5c6hnVUNBUUlfP9A17+46wlvQ+LiNOHijpaFzzWXWrEieXUWV8Rq5UcSkdJseVgFFKLqc2FRlQS+BZ+pOpZc0tTnzhInaXr71cHH334Fy4xzRGAlxyoK1kJ2tKGzn3lQbmddwZcNa2Mqbc34PBFJVBK4TF0qLlHXUtdSl+atpm/WXLMmZJjO7YTSiklfoBNaUFuAq6qoeIGoijCodvTA4M5RU419niqx5VY+erR14lDaqh99dnrDFeVWq/6Wl4fs1r3tg+OZVigw8EqUiIaqEcgBAPjUoerZ/VpZFWrUkvpqhckiCO3keNJqecNtvUqkqCWhRLxuUwVEbJi506UULzgDijXUNgGERBTiSXNymRs7cuh73xh66cvD6hoAjanRyYcfoPoEkR8/cpKazeGd3bXGiTfd2sM89MsfGUl9VQJjchtS6hhoz3FgVqnX9hnMom6KEhCx9HYzrOGgNDZ64uREHgRW21VtcnGSJrmSDqwr0ewLfNurtFOupI7aAU7hvFfNSSRptJIG64Fnj4yfqHb3q5Ppxrhp1ThvqcujIB4bayVS27RzbT3L3vAzYalr039+35GxNHZkM08kpKRMREWmBQBAhBQQBVQdg0mt0Z7uCFHMYks9XTAmCKwXJ5nzzuVZGoRJ8RYvukghz05mR8OpBoEh8mmz2dNTHj02QzPQrDU2NWJJA3Ve1UnGAAIbxF31enZir9+4e13imq+9NfwTs/VdHz5Q8yxqiDNDyqyGYJiYCVABeYH3qh6OJDYg5wb6SmoqXCrFVVLxxlhRQQyXJuC6iMJlxvDs4cg59fTSWAHn854AnL5BiSKy4Xefbo5PlfvIc8nvvKZ7z+MnGs0wiGMPn5NTYy1TYAMblxk2ivKm1xMjum77cJpN/sLLytd/YHuW5ma2GzUgZouQiEAiChURn0FEAWIQ266uktPYlgepHJf6Sl29A7nzjePHMD0WkagK5UKGlNov2FRa+AjPkxqrXDVxeaygaqKKKZWCrz9Z/8XfO/KZ39jQ39WQktlxbc+zD0/k44mUGNYEIVMUcVjxUbXav6m8ZkAtT44cOnpkctOmQe8ag/1MSvApVIAANgJHYAsyUEBy+Azew4sAZC3ZklDMQWVkpFnafv3ArmvFlkmzvskjI9/7lj12kL00bE42IPbEhfTHylS/lansF8oQm4/ZYXmPvKtqvvmUe+MfHf30OzdvLDda7HZfN/TEw/tmalGlKw4CMkHJhZXeHS8euu42LfcoqL85cez73zx05MDaoWra8pKmPmdRkDXWxiaueCJVsIDAcOJSCy8GDgyyzOXqyRNNVx5ct/slngeAXvKNYE1l+AY+9K2vUp4F0mQbglMiMBP5IjF3sTm07FNfEENsVTA7NYi9Nbnv7qXv7MUv/s+Rv7x7w+aBSdGpq17W/8TDdeecsQYclNduXnfdrQiG1PcpMcJww413HPzHLx1+bH9WG3eNmnfimGxUjsqOqlpZv7nc0++TVu3YwfxkTVr1LKkrZUxEtmSqrajUt+nWF3muEg1KOKymgexI0Lfe9A9iYsQoExenjomLnNIVvUvz0s4NVSirsIEYca2+Svz9I/mbfv/AX75z7XUDpOAbbqnsfaapAmVTXrsJpd6MekO7ntX4XLjse4avGDl2mE1owhBWQhNF5apUu4Zecmvfrpt8WGVxAxOHj/7gm8mRfcQkWULqQcaKMEgDq+yMuOLVjUoMgVUBZYOb18AyROKopEQrDiKsTAR1yO4oTHtWp8YZCZzzXWU8eTx4638//vCRuBpba2XnSwfK3WUnAOcqsy81IypqsKo4hQMrGVBAXAooiHu2X9139c1ihpwZVl0XrNk5fPPP2q4+GwRth2axLbukeeKwldT5GU6OSn4MXPP16Wx6fO3WwcFNfSQtpfjTfz/WSIlYZUUa0Mq8Bh2sF6QojGJhEMF57i4FB08Gb/39o48cCqNSWeE2XttTrvrkwHOU161vaTIq2QjrJJKJ+vgxhpAogyxZJsscdg1v8baLeU1k1nG0zlM1qq4Je/tYGcoiJN57l6nPpvb+eHrPP1uMEo4YPSHTh0Yf/VbfGtMzXMl9M6p0/69Pj33sS1NhGLDgp7NcDYp1MBuEItJc0rAaHm7JW99z9FP/dcON2+OWa265cu3hQ8nII98euuFn1NRICcno6KPfbR4/Innu86yoa0wK8epVhdiIUQRE5IkJUC+eCELee1UQmgoOlU489E8zI0fK/Wslbc4ceKavB5XBLqlPxKXg/Z858qdfnumqlmac5uCivnFnaNLp1MQ5QUlQA+NcEIXm+Iz/D7+372O/s/WVLw2TpL5ux5rRQ3sO33+ie2CTB2pTR9PjhzWtZ82aZClEYAyMI87qRw/0bLlaEPs8M3kWBNOuNiZTJz3UeZ/nhUnmnIN6CvKs9mSjEQSirbUbe3vXxG56NCxFH/nc4T/9/HRULk+nudOIKWHlhbWnz8BqnRG7CHVD52QltUs2+4iMqKwrz3zst6+4/aVrEydB1HPs2enpsTqbQChn59JmPUtqkudQJWPicjXs7rZR9+D1t/VeeyO4ROKy2sjxhx7ID+9t1iZbM9NZ2vLOE7GxIQchwqCMSNmvu2Z47YaurHmyFAcfuOfox/56iqLKTEvr3pMngirrGb7uU4NfXUOs0wyYFw9B23OpAmhoDQkPlWsfv2vnbTdESU1sUN6/Z2x6NLHqXJ5kWZYmLc1yAlFgo0opqnaVKv0o93StG4r7+sW5mSNH86kxyWtJfbpVayStls88EVlrjQ3IArnZdFV1w85Nkrei7tL7Pnv0o/dMcalay8XlyFRJWYtk+GVP6J3rT8sRpJMMmD/E0+eLAChbYkJP3PyTX930czdW6o3Ecpy3VJE7dXC5ZnlxuI4scxjbsGJLPRRWnKpXZbAlwLV8WlfXkKThcg/vRcFExOosE7gSsyAr9655/+frH/zc8TiszAhS3369Y9sTVChgy45/wffznuUcaXIRi3ef7s9QAJEJFFrF1Ad+dfMbXlGVtMmWIU5ESXIS3456GUYQI4hhYpgIJgAxihPIkiFPkTfVJ+q9elWAlFlUjAAV71MT87vvab33r2vdpa4GxOcMdTrnNT+Px/kJYwBOmzukECIXIPKaV2T6/f9l003Xdif1hil0eZW5aCQzIbBkDBfHzYw1RAR4iHiv3ovL4b06mYuWCcioZ7Wo0mf/Pvnfn52q9HSpQKBKKam9WCcBL375eqLilV7Fq0cyAVtlTwTNu0pOvEADgT+VV6XKxJYkMmoZgaHQgA0rSL3mXnNB4pEJqRcCFCykQorC/GWdqYc2tAbkAYNUNdS2bnwREiAv/gscZveA4lBqQOR8O/YeTTds4WdbmBc9W2fAkFhG0GYfVMkr5UpeFFo4NlHI9MK9Q2CCj+LCriYl0vbcvzjRGLoU3iUJYHbqKcjPZioI4I0txIJbWEqb59KEVDyy9gkyCBUSn0yR8sZtPQvcrlGgcABEilvM1m4hdxGzSC8RBgCLxBjmVMEzqHPqEvbFlbMCpGAB5qrizF6vs7UQF9snL2YO7/NiwAreE7CCUNqiR26Wu77ItiiO/RUFmFQXpLIvUBCff3hrGaz4vQKLDuB5pSYuYxAuNZpzTWg8V162ZRKB0D5Hf2YW9TLuyRWqjOeXJbV4tuAK2jzPX8/p+nP9acErsOe+PnXBuQdNz4oVO38WncHFHyt/f8BqeaNWA4tMzEtmbItg/kpaeTzgUn7CnyBcEi81fiHjMgMuMhinnFDnkhN8GSvHvGPVBC6VY/E6G8C+zIALjrkNWFTiKOJ1g4PO5Ss6i7hMH7R8zYJVxPJ9nc+vFxRE5F0+uKafd2zf6lxW1A07c3Aru/syNRVWHcv3dT6/nonz59ZscyJml7sd27fyS697sYpXFAkLp4bSMQqePrKLj2VGcp40aWcjqCoIRCL+pde92N72iltKpZJ4WZUN+PnkDy9jFl50nI+L4qwN55w3gIrXOIpfcdvL+YbrX7x92xVpkjLT+UeFlp8jS/3a4dW2DFbsonjeDUmViDVNk+3btt900/VcLVdfd+cv5K2aYYMlDsdexmqhmP7WmLRRv/POV3VVyqSqTz+755Zb7wCHl8l/QTFf0pLk3/3213fv3MHeud1X7XjLm98wc3La2HOuEHwZZ2LZNGm11s6crL3pja/fvXOHc46cc8y878Chm299deJyw+YSEcc/XSi2XyYiEQ2N/e63779y2xYRYTZGVLZfseVdd/9GY+qksXYZa0zptE/nca760spMrdU20GYj/gpjbW1q8u53/vqO7VtFxRhTBLwg3gvwhrf80n1f+Xrf4GCe5Yt2vrpEP6ctf4GCeOZIFr3bCvM1zyPTbQ6FICIqci9ZgTAKJ8fG7nztHV/6/GcYMNYoQCJCxb9MI6Njd7z6X+7Zd6C7py/PF+HBRWTAAjxPBlx0zL4oAsYG9ZnpK6/Y8o2vfWnd0FpVZZ7NAQaBDYvI8NDaL/7VpzauG5yZPhmEwUr609M+L3BQu9gsBWFYn5nZOLz2i3/1qeF1Q977oiYCAVykoirAxjjndu3ccf99X7xq+9apsbEgCNrZNLM3ZMH8zwJyn+vnvJ5tVe923jhtPc7bQpSIbBBMjo1fuW3zV//m87t2Xum8M2ZW22wXBZv9WGsLHvzD333pztfeMXnihKq2Ey/nbbvLbMIXfZe+GDj1wATiudfLEYy1XnTyxOidr/nZr99/765dO1zurLGntnc6IyJmjHXODa8b+vK997z7Pb9ryZwcn4aqCQ0ZESYhhl6Oo82HgBzIg0VZhZUYJrCkmBqfiqx5z7v/x5e/eM+G4XXOOWMXZkGQiMzXt4pz4uKFmIjoqR/vee8ffegLX/zSzHQ9qHRFccTMpCoqHaumcMlDASJi4raan7TSrFXr6am++U2vv+s3377rqitFFGjvugvkwkIGzIf3vpBWjz3+1Kc/9/mv3v8Pe/fubSYJM4dRbOYvpRc0SBU+z3OXifhyXNq+fdudr7njl9765muv2Y15ZFy88aIMmJvb4j1Ui4XTaDUfeujhBx548OF/fuzZ5/aPTUzleX55HYAQBHZwYM3OK6942Ute/IpX3HLzzS+rlKoAvPMgsDFYOtr+/wGA46SbQj8BXgAAAABJRU5ErkJggg==";
// oauth.js
var enc = new TextEncoder();
var dec = new TextDecoder();
function b64urlFromBytes(bytes) {
  let bin = "";
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  for (let i = 0; i < arr.length; i++) bin += String.fromCharCode(arr[i]);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function bytesFromB64url(s) {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
function b64urlJson(obj) {
  return b64urlFromBytes(enc.encode(JSON.stringify(obj)));
}
function randB64url(n = 32) {
  return b64urlFromBytes(crypto.getRandomValues(new Uint8Array(n)));
}
async function sha256b64url(input) {
  const data = typeof input === "string" ? enc.encode(input) : input;
  const hash = await crypto.subtle.digest("SHA-256", data);
  return b64urlFromBytes(new Uint8Array(hash));
}
async function importClientPrivateKey(privateJwk) {
  return crypto.subtle.importKey("jwk", privateJwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
}
function publicJwkFromPrivate(privateJwk) {
  const { d, ...pub } = privateJwk;
  return { ...pub, use: "sig", alg: "ES256", key_ops: ["verify"] };
}
async function generateDpopKeypair() {
  const kp = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
  const privateJwk = await crypto.subtle.exportKey("jwk", kp.privateKey);
  const publicJwk = await crypto.subtle.exportKey("jwk", kp.publicKey);
  return { privateJwk, publicJwk };
}
async function importDpopPrivate(jwk) {
  return crypto.subtle.importKey("jwk", jwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
}
async function signEs256(headerObj, payloadObj, cryptoKey) {
  const head = b64urlJson(headerObj);
  const body = b64urlJson(payloadObj);
  const signingInput = `${head}.${body}`;
  const sig = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, cryptoKey, enc.encode(signingInput));
  return `${signingInput}.${b64urlFromBytes(new Uint8Array(sig))}`;
}
async function makeDpopProof({ dpopPrivateJwk, dpopPublicJwk, method, url, nonce, accessToken }) {
  const key = await importDpopPrivate(dpopPrivateJwk);
  const jwk = { kty: dpopPublicJwk.kty, crv: dpopPublicJwk.crv, x: dpopPublicJwk.x, y: dpopPublicJwk.y };
  const header = { typ: "dpop+jwt", alg: "ES256", jwk };
  const payload = {
    jti: randB64url(16),
    htm: method,
    htu: url,
    iat: Math.floor(Date.now() / 1e3)
  };
  if (nonce) payload.nonce = nonce;
  if (accessToken) payload.ath = await sha256b64url(accessToken);
  return signEs256(header, payload, key);
}
async function makeClientAssertion({ clientId: clientId2, audience, privateJwk }) {
  const key = await importClientPrivateKey(privateJwk);
  const now = Math.floor(Date.now() / 1e3);
  const header = { alg: "ES256", kid: privateJwk.kid };
  const payload = {
    iss: clientId2,
    sub: clientId2,
    aud: audience,
    jti: randB64url(16),
    iat: now,
    exp: now + 300
  };
  return signEs256(header, payload, key);
}
async function makePkce() {
  const verifier = randB64url(48);
  const challenge = await sha256b64url(verifier);
  return { verifier, challenge };
}
async function resolveHandleToDid(handle) {
  handle = handle.replace(/^@/, "").trim().toLowerCase();
  try {
    const r = await fetch(`https://cloudflare-dns.com/dns-query?name=_atproto.${handle}&type=TXT`, {
      headers: { accept: "application/dns-json" }
    });
    if (r.ok) {
      const j = await r.json();
      for (const ans of j.Answer || []) {
        const m = String(ans.data || "").match(/did=(did:[a-z0-9:._-]+)/i);
        if (m) return m[1];
      }
    }
  } catch {
  }
  try {
    const r = await fetch(`https://${handle}/.well-known/atproto-did`, { redirect: "follow" });
    if (r.ok) {
      const did = (await r.text()).trim();
      if (did.startsWith("did:")) return did;
    }
  } catch {
  }
  try {
    const r = await fetch(`https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${encodeURIComponent(handle)}`);
    if (r.ok) {
      const j = await r.json();
      if (j.did) return j.did;
    }
  } catch {
  }
  return null;
}
async function resolveDidDoc(did) {
  if (did.startsWith("did:plc:")) {
    const r = await fetch(`https://plc.directory/${did}`);
    if (r.ok) return r.json();
  } else if (did.startsWith("did:web:")) {
    const host = did.slice("did:web:".length).replace(/:/g, "/");
    const r = await fetch(`https://${host}/.well-known/did.json`);
    if (r.ok) return r.json();
  }
  return null;
}
function pdsFromDidDoc(doc) {
  for (const svc of doc?.service || []) {
    if (svc.id === "#atproto_pds" || svc.type === "AtprotoPersonalDataServer") {
      return svc.serviceEndpoint;
    }
  }
  return null;
}
async function resolveAuthServer(pdsUrl) {
  let authServer = pdsUrl;
  try {
    const r = await fetch(`${pdsUrl}/.well-known/oauth-protected-resource`);
    if (r.ok) {
      const j = await r.json();
      if (Array.isArray(j.authorization_servers) && j.authorization_servers[0]) {
        authServer = j.authorization_servers[0];
      }
    }
  } catch {
  }
  const r2 = await fetch(`${authServer}/.well-known/oauth-authorization-server`);
  if (!r2.ok) throw new Error(`auth server metadata fetch failed: ${r2.status}`);
  return r2.json();
}
async function pushAuthorizationRequest({ meta, clientId: clientId2, redirectUri: redirectUri2, scope, state, pkce, loginHint, privateJwk, dpop }) {
  const parEndpoint = meta.pushed_authorization_request_endpoint;
  const clientAssertion = await makeClientAssertion({ clientId: clientId2, audience: meta.issuer, privateJwk });
  const form = new URLSearchParams({
    client_id: clientId2,
    response_type: "code",
    redirect_uri: redirectUri2,
    scope,
    state,
    code_challenge: pkce.challenge,
    code_challenge_method: "S256",
    client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    client_assertion: clientAssertion
  });
  if (loginHint) form.set("login_hint", loginHint);
  const doPar = async (nonce) => {
    const proof = await makeDpopProof({
      dpopPrivateJwk: dpop.privateJwk,
      dpopPublicJwk: dpop.publicJwk,
      method: "POST",
      url: parEndpoint,
      nonce
    });
    return fetch(parEndpoint, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded", DPoP: proof },
      body: form.toString()
    });
  };
  let resp = await doPar(void 0);
  if (resp.status === 400 || resp.status === 401) {
    const nonce = resp.headers.get("DPoP-Nonce");
    if (nonce) resp = await doPar(nonce);
  }
  if (!resp.ok) throw new Error(`PAR failed ${resp.status}: ${(await resp.text()).slice(0, 300)}`);
  const j = await resp.json();
  return { requestUri: j.request_uri, dpopNonce: resp.headers.get("DPoP-Nonce") };
}
function buildAuthorizeUrl({ meta, clientId: clientId2, requestUri }) {
  const u = new URL(meta.authorization_endpoint);
  u.searchParams.set("client_id", clientId2);
  u.searchParams.set("request_uri", requestUri);
  return u.toString();
}
async function exchangeCode({ meta, clientId: clientId2, redirectUri: redirectUri2, code, pkce, privateJwk, dpop, initialNonce }) {
  const tokenEndpoint = meta.token_endpoint;
  const clientAssertion = await makeClientAssertion({ clientId: clientId2, audience: meta.issuer, privateJwk });
  const form = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri2,
    client_id: clientId2,
    code_verifier: pkce.verifier,
    client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    client_assertion: clientAssertion
  });
  const doToken = async (nonce) => {
    const proof = await makeDpopProof({
      dpopPrivateJwk: dpop.privateJwk,
      dpopPublicJwk: dpop.publicJwk,
      method: "POST",
      url: tokenEndpoint,
      nonce
    });
    return fetch(tokenEndpoint, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded", DPoP: proof },
      body: form.toString()
    });
  };
  let resp = await doToken(initialNonce);
  if (resp.status === 400 || resp.status === 401) {
    const nonce = resp.headers.get("DPoP-Nonce");
    if (nonce) resp = await doToken(nonce);
  }
  if (!resp.ok) throw new Error(`token exchange failed ${resp.status}: ${(await resp.text()).slice(0, 300)}`);
  const tokens = await resp.json();
  const newNonce = resp.headers.get("DPoP-Nonce");
  return { tokens, dpopNonce: newNonce };
}
async function refreshTokens({ meta, clientId: clientId2, refreshToken, privateJwk, dpop, nonce }) {
  const tokenEndpoint = meta.token_endpoint;
  const clientAssertion = await makeClientAssertion({ clientId: clientId2, audience: meta.issuer, privateJwk });
  const form = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: clientId2,
    client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    client_assertion: clientAssertion
  });
  const doIt = async (n) => {
    const proof = await makeDpopProof({ dpopPrivateJwk: dpop.privateJwk, dpopPublicJwk: dpop.publicJwk, method: "POST", url: tokenEndpoint, nonce: n });
    return fetch(tokenEndpoint, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded", DPoP: proof }, body: form.toString() });
  };
  let resp = await doIt(nonce);
  if (resp.status === 400 || resp.status === 401) {
    const n = resp.headers.get("DPoP-Nonce");
    if (n && n !== nonce) resp = await doIt(n);
  }
  if (!resp.ok) {
    let bodyTxt = ""; try { bodyTxt = await resp.text(); } catch(_) {}
    let errCode = ""; try { errCode = (JSON.parse(bodyTxt)||{}).error || ""; } catch(_) {}
    slog({ev:"auth",step:"refresh_tokens",status:resp.status,err:errCode,body:bodyTxt.slice(0,160)});
    const e = new Error(`refresh failed ${resp.status}`);
    e.oauthError = errCode; e.status = resp.status;
    throw e;
  }
  return { tokens: await resp.json(), dpopNonce: resp.headers.get("DPoP-Nonce") };
}
async function pdsXrpc({ pdsUrl, nsidPath, method = "POST", body, accessToken, dpop, nonce, query }) {
  let url = `${pdsUrl}/xrpc/${nsidPath}`;
  if (query) url += "?" + new URLSearchParams(query).toString();
  const doCall = async (n) => {
    const proof = await makeDpopProof({
      dpopPrivateJwk: dpop.privateJwk,
      dpopPublicJwk: dpop.publicJwk,
      method,
      url,
      nonce: n,
      accessToken
    });
    const headers = { Authorization: `DPoP ${accessToken}`, DPoP: proof };
    const init = { method, headers };
    if (body !== void 0) {
      headers["content-type"] = "application/json";
      init.body = JSON.stringify(body);
    }
    return fetch(url, init);
  };
  let resp = await doCall(nonce);
  // atproto stale-nonce: server replies 401 OR 400 (use_dpop_nonce) with a fresh
  // DPoP-Nonce header. Retry once with that nonce. (Previously only 401 retried,
  // so 400 use_dpop_nonce slipped through and writes silently failed.)
  if (resp.status === 401 || resp.status === 400) {
    const n = resp.headers.get("DPoP-Nonce");
    if (n && n !== nonce) resp = await doCall(n);
  }
  const newNonce = resp.headers.get("DPoP-Nonce");
  let data = null;
  try {
    data = await resp.json();
  } catch {
  }
  return { ok: resp.ok, status: resp.status, data, dpopNonce: newNonce };
}
async function aesKey(secret) {
  const raw = await crypto.subtle.digest("SHA-256", enc.encode(secret));
  return crypto.subtle.importKey("raw", raw, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
}
async function encryptBlob(secret, obj) {
  const key = await aesKey(secret);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(JSON.stringify(obj)));
  return `${b64urlFromBytes(iv)}.${b64urlFromBytes(new Uint8Array(ct))}`;
}
async function decryptBlob(secret, packed) {
  const key = await aesKey(secret);
  const [ivP, ctP] = packed.split(".");
  const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: bytesFromB64url(ivP) }, key, bytesFromB64url(ctP));
  return JSON.parse(dec.decode(pt));
}
async function signSid(secret, sid) {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const mac = await crypto.subtle.sign("HMAC", key, enc.encode(sid));
  return `${sid}.${b64urlFromBytes(new Uint8Array(mac))}`;
}
async function verifySid(secret, signed) {
  if (!signed || !signed.includes(".")) return null;
  const [sid, mac] = signed.split(".");
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
  const ok = await crypto.subtle.verify("HMAC", key, bytesFromB64url(mac), enc.encode(sid));
  return ok ? sid : null;
}

// records.js
var OWNER_DID = (typeof OWNER_DID_ENV !== "undefined" && OWNER_DID_ENV) || "did:plc:YOUR_OWNER_DID"; // set OWNER_DID via env/secret
var NSID = {
  library: "uk.osintnet.cineclub.library",
  watch: "uk.osintnet.cineclub.watch",
  review: "uk.osintnet.cineclub.review",
  favorite: "uk.osintnet.cineclub.favorite"
};
function filmRkey(filmId) {
  return String(filmId).toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 60) || "film";
}
async function putRecord(sess, collection, rkey, record, env) {
  const call = () => pdsXrpc({
    pdsUrl: sess.pds,
    nsidPath: "com.atproto.repo.putRecord",
    method: "POST",
    accessToken: sess.access_token,
    dpop: sess.dpop,
    nonce: sess.dpopNonce,
    body: { repo: sess.did, collection, rkey, record }
  });
  let r = await call();
  if (r && r.dpopNonce) sess.dpopNonce = r.dpopNonce;
  // Reactive refresh: token died mid-request -> refresh silently + retry once.
  if (r && (r.status === 401 || r.status === 400) && env && sess.refresh_token) {
    const ok = await refreshSessionNow(env, sess);
    if (ok) { r = await call(); if (r && r.dpopNonce) sess.dpopNonce = r.dpopNonce; }
    else if (sess._refreshDead && r && !r.ok) { r = Object.assign({}, r, { reconnect: true }); }
  }
  slog({ev:"write",step:"put_record",coll:collection,status:r&&r.status,ok:!!(r&&r.ok),reconnect:!!(r&&r.reconnect),did:sess.did});
  return r;
}
// ── Phase 1: reactive session refresh + structured share logging ──
function shortHash(str){ let h=5381; const x=String(str==null?"":str); for(let i=0;i<x.length;i++){ h=((h<<5)+h+x.charCodeAt(i))>>>0; } return h.toString(36); }
function slog(o){ try { console.log(JSON.stringify(Object.assign({t:Date.now()}, o))); } catch(_){} }

// Reactively refresh the user's PDS session using the stored refresh_token.
// Returns true on success (sess mutated + persisted), false otherwise. Silent — no re-auth needed.
async function refreshSessionNow(env, sess) {
  if (!sess || !sess.refresh_token) return false;
  // Concurrency guard: rapid-fire clicks each tried to consume the ROTATING refresh token,
  // so the first won and the rest got 400 invalid_grant. Before refreshing, re-read the
  // session from KV — if another in-flight request already refreshed it, adopt that token
  // instead of burning our (now-stale) one.
  try {
    if (sess._sid) {
      const packed = await env.CC_KV.get(`sess:${sess._sid}`);
      if (packed) {
        const fresh = await decryptBlob(env.SESSION_SECRET, packed);
        if (fresh && fresh.refresh_token && fresh.refresh_token !== sess.refresh_token) {
          // someone else already rotated — adopt their fresh tokens, skip our refresh
          sess.access_token = fresh.access_token;
          sess.refresh_token = fresh.refresh_token;
          sess.expires_at = fresh.expires_at;
          if (fresh.dpopNonce) sess.dpopNonce = fresh.dpopNonce;
          slog({ev:"auth",step:"refresh_adopt",status:"ok",did:sess.did});
          return true;
        }
      }
    }
  } catch(_) {}
  try {
    const meta = await resolveAuthServer(sess.pds);
    const { tokens, dpopNonce } = await refreshTokens({
      meta,
      clientId: clientId(sess.origin),
      refreshToken: sess.refresh_token,
      privateJwk: loadPrivateJwk(env),
      dpop: sess.dpop,
      nonce: sess.dpopNonce
    });
    sess.access_token = tokens.access_token;
    if (tokens.refresh_token) sess.refresh_token = tokens.refresh_token;
    sess.expires_at = Date.now() + (tokens.expires_in || 3600) * 1e3;
    if (dpopNonce) sess.dpopNonce = dpopNonce;
    if (sess._sid) await saveSession(env, sess._sid, sess);
    slog({ev:"auth",step:"refresh",status:"ok",did:sess.did});
    return true;
  } catch (e) {
    sess._refreshDead = (e && (e.oauthError === "invalid_grant" || e.status === 400)) ? true : false;
    slog({ev:"auth",step:"refresh",status:"fail",err:String(e&&e.oauthError||e&&e.message||e),dead:sess._refreshDead,did:sess&&sess.did});
    return false;
  }
}

async function createRecord(sess, collection, record, env) {
  const call = () => pdsXrpc({
    pdsUrl: sess.pds,
    nsidPath: "com.atproto.repo.createRecord",
    method: "POST",
    accessToken: sess.access_token,
    dpop: sess.dpop,
    nonce: sess.dpopNonce,
    body: { repo: sess.did, collection, record }
  });
  let r = await call();
  if (r && r.dpopNonce) sess.dpopNonce = r.dpopNonce;
  // Reactive refresh: token died mid-request -> refresh silently + retry once.
  if (r && (r.status === 401 || r.status === 400) && env && sess.refresh_token) {
    const ok = await refreshSessionNow(env, sess);
    if (ok) { r = await call(); if (r && r.dpopNonce) sess.dpopNonce = r.dpopNonce; }
    else { slog({ev:"share",step:"create_record",status:"reconnect",did:sess.did}); const e = new Error("reconnect: session expired"); e.reconnect = true; throw e; }
  }
  if (r && r.status === 401) { slog({ev:"share",step:"create_record",status:"reconnect2",did:sess.did}); const e = new Error("reconnect: session expired"); e.reconnect = true; throw e; }
  slog({ev:"share",step:"create_record",status:r&&r.status,ok:!!(r&&r.ok),did:sess.did});
  return r;
}
async function deleteRecord(sess, collection, rkey) {
  return pdsXrpc({
    pdsUrl: sess.pds,
    nsidPath: "com.atproto.repo.deleteRecord",
    method: "POST",
    accessToken: sess.access_token,
    dpop: sess.dpop,
    nonce: sess.dpopNonce,
    body: { repo: sess.did, collection, rkey }
  });
}
async function listRecords({ pdsUrl, did, collection, limit = 100, accessToken, dpop, nonce }) {
  if (accessToken) {
    return pdsXrpc({
      pdsUrl,
      nsidPath: "com.atproto.repo.listRecords",
      method: "GET",
      accessToken,
      dpop,
      nonce,
      query: { repo: did, collection, limit: String(limit) }
    });
  }
  const u = `${pdsUrl}/xrpc/com.atproto.repo.listRecords?repo=${encodeURIComponent(did)}&collection=${encodeURIComponent(collection)}&limit=${limit}`;
  const r = await fetch(u);
  let data = null;
  try {
    data = await r.json();
  } catch {
  }
  return { ok: r.ok, status: r.status, data };
}
function buildFavorite({ filmId, title, year, poster, slot }) {
  return { $type: NSID.favorite, filmId: String(filmId), title: title || "", year: year ? (Number(year)||String(year)) : undefined, poster: poster || undefined, slot: Math.max(1, Math.min(4, Number(slot)||1)), addedAt: new Date().toISOString() };
}
// Auto-promote a film's library entry to "watched" (preserve title/year/poster).
// Called whenever the user logs a watch or posts a review, so a watchlisted film
// doesn't get stranded in "want" after it's actually been seen.
async function markLibraryWatched(sess, { filmId, title, year, poster, tmdbId }) {
  try {
    const rkey = filmRkey(filmId);
    await putRecord(sess, NSID.library, rkey, buildLibrary({ filmId, title, year, poster, status: "watched", tmdbId }));
  } catch (_) { /* non-fatal — never block the primary write */ }
}
function buildLibrary({ filmId, title, year: year2, poster: poster2, status, tmdbId }) {
  return {
    $type: NSID.library,
    filmId: String(filmId),
    title: title || "",
    year: year2 ? Number(year2) || String(year2) : void 0,
    poster: poster2 || void 0,
    tmdbId: tmdbId != null ? String(tmdbId) : void 0,
    status: status || "want",
    // want | watching | watched | owned
    addedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function buildWatch({ filmId, title, progressPct, partyId }) {
  return {
    $type: NSID.watch,
    filmId: String(filmId),
    title: title || "",
    watchedAt: (/* @__PURE__ */ new Date()).toISOString(),
    progressPct: typeof progressPct === "number" ? progressPct : void 0,
    partyId: partyId || void 0
  };
}
function buildReview({ filmId, title, stars, text, spoiler }) {
  return {
    $type: NSID.review,
    filmId: String(filmId),
    title: title || "",
    stars: Math.max(1, Math.min(5, Number(stars) || 0)),
    text: (text || "").slice(0, 2e3),
    spoiler: !!spoiler,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
async function postToTimeline(sess, text, extraFacets) {
  const record = {
    $type: "app.bsky.feed.post",
    text,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    langs: ["en"]
  };
  if (extraFacets) record.facets = extraFacets;
  return createRecord(sess, "app.bsky.feed.post", record, env);
}
// Post to the USER's own timeline WITH a rich external poster card.
// Uploads the poster as a blob to the user's PDS (DPoP-auth) and attaches
// app.bsky.embed.external so a user's review/share renders a pro movie card.
// P4a: ONE path for every user-initiated Bluesky share. Consistent text + poster card + facets + spacing.
async function buildOgPng(env, type, id, searchParams) {
  const url = { searchParams };
  const q = searchParams;
  let png;
          if (type === "leaderboard") {
            const lim = Math.min(8, parseInt((q.get("limit")||"8"),10) || 8);
            let rows = [];
            try { const lb = await clubLeaderboard(env, { limit: lim }); rows = lb.rows || []; } catch (_e) {}
            png = await renderLeaderboardCard({ rows, weekLabel: q.get("wk") || "" });
          } else if (type === "stats") {
            // stats card — values passed as query params from the client (which already computed them)
            const q = url.searchParams;
            const num = (k) => { const v = parseInt(q.get(k)||"0",10); return isNaN(v)?0:v; };
            let handle = q.get("h") || id;
            // decades: "1940:2,1950:1" ; ratings: "1,0,0,0,0" (st1..st5)
            const decades = (q.get("dec")||"").split(",").filter(Boolean).map(s=>{const[k,n]=s.split(":");return{k:parseInt(k,10),n:parseInt(n,10)||0};}).filter(d=>d.k);
            const ratings = (q.get("rat")||"0,0,0,0,0").split(",").map(x=>parseInt(x,10)||0);
            const avgRaw = parseFloat(q.get("avg")||"0")||0;
            png = await renderStatsCard({ handle, watched: num("w"), reviews: num("r"), avg: avgRaw, decades, ratings });
          } else if (type === "diaryrow") {
            // Letterboxd-beating last-four card: posters + stars + handle
            let films = [], handle = id;
            try {
              const rs = await env.CC_SOCIAL.prepare(
                "SELECT title, year, poster, handle, stars FROM watch_index WHERE did=? AND kind!=? ORDER BY at DESC LIMIT 12"
              ).bind(id, "want").all();
              const rows = (rs.results || []);
              if (rows[0] && rows[0].handle) handle = rows[0].handle;
              for (const r of rows) {
                if (films.length >= 4) break;
                let pp = (r.poster && r.poster.trim()) ? r.poster : await posterByTitle(env, r.title, r.year);
                films.push({ poster: pp, title: r.title, year: r.year, stars: (r.stars==null?null:r.stars) });
              }
            } catch (_) {}
            png = await renderDiaryCard({ handle, films });
          } else if (type === "grid") {
            const gq = url.searchParams;
            // Explicit mode: a genre/list share passes title + posters directly.
            if (gq.get("t") || gq.get("p0")) {
              const eposters = [];
              for (let i = 0; i < 4; i++) { const v = gq.get("p" + i); if (v) eposters.push(v); }
              png = await renderGridCard({ title: gq.get("t") || "Blueboxd", sub: gq.get("s") || "", posters: eposters });
            } else {
            let posters = [], handle = id;
            try {
              const rs = await env.CC_SOCIAL.prepare(
                "SELECT title, year, poster, handle FROM watch_index WHERE did=? AND kind!=? ORDER BY at DESC LIMIT 12"
              ).bind(id, "want").all();
              const rows = (rs.results || []);
              if (rows[0] && rows[0].handle) handle = rows[0].handle;
              for (const r of rows) {
                if (posters.length >= 4) break;
                let pp = (r.poster && r.poster.trim()) ? r.poster : await posterByTitle(env, r.title, r.year);
                if (pp) posters.push(pp);
              }
            } catch (_) {}
            const sub = "Recently watched" + (handle && handle.indexOf(":") < 0 ? " by @" + handle.replace(/\.bsky\.social$/, "") : "") + " on Blueboxd";
            png = await renderGridCard({ title: "Film Diary", sub, posters });
            }
          } else if (type === "movie") {
            const q = url.searchParams;
            let title = q.get("t") || "", year = q.get("y") || "", handle = q.get("h") || "";
            let poster = q.get("p") || "";
            const reviewed = q.get("rv") === "1";
            const stars10 = q.get("s") != null && q.get("s") !== "" ? parseInt(q.get("s"),10) : null;
            const snippet = q.get("sn") || "";
            // resolve poster + meta from catalog if not provided
            if ((!poster || !title) && id && id !== "_") {
              try { const d = await catalog("detail", { id }); if (d) { title = title || d.title || d.name || ""; year = year || (d.year||""); if (!poster) poster = d.poster || ""; if (!snippet && !reviewed && d.overview) { /* tagline fallback */ } } } catch (_) {}
            }
            if (!poster && title) { try { poster = await posterByTitle(env, title, year) || ""; } catch (_) {} }
            let snip = snippet;
            if (!reviewed && !snip && id && id !== "_") { try { const d = await catalog("detail", { id }); if (d && d.overview) snip = String(d.overview); } catch (_) {} }
            png = await renderMovieCard({ handle, title, year, poster, reviewed, stars10, snippet: snip });
          } else if (type === "watching") {
            const q = url.searchParams;
            let title = q.get("t")||"", year=q.get("y")||"", handle=q.get("h")||"", poster=q.get("p")||"", note=q.get("n")||"";
            const progress = q.get("pr")!=null && q.get("pr")!=="" ? (parseFloat(q.get("pr"))||0) : null;
            if ((!poster || !title) && id && id !== "_") { try { const d=await catalog("detail",{id}); if(d){ title=title||d.title||d.name||""; year=year||(d.year||""); if(!poster) poster=d.poster||""; } } catch(_){} }
            if (!poster && title) { try { poster = await posterByTitle(env, title, year) || ""; } catch(_){} }
            png = await renderWatchingCard({ handle, title, year, poster, note, progress });
          } else if (type === "party") {
            // id = partyId ; pull live party data
            let p = null; try { p = await getParty(env, id); } catch (_) {}
            if (p) {
              const now = Date.now();
              const startMs = p.startsAt ? Date.parse(p.startsAt) : 0;
              const endMs = startMs && p.runtimeSec ? startMs + p.runtimeSec*1000 : (startMs ? startMs + 3*3600*1000 : 0);
              const live = startMs && now >= startMs - 5*60*1000 && (!endMs || now <= endMs);
              let reactions = 0; try { const rc = await env.CC_SOCIAL.prepare("SELECT COUNT(*) n FROM reactions WHERE party_id=?").bind(id).first(); reactions = (rc&&rc.n)||0; } catch (_) {}
              let whenStr = "";
              if (startMs) { try { whenStr = new Date(startMs).toUTCString().replace(/:00 GMT/, " GMT"); } catch(_){} }
              let poster = p.poster || ""; if (!poster && p.title) { try { poster = await posterByTitle(env, p.title, p.year) || ""; } catch(_){} }
              png = await renderPartyCard({ handle: p.hostHandle||"", title: p.title||"Watch Party", year: p.year||"", poster, whenStr, live, going: p.rsvpCount||0, reactions, host: p.hostHandle||"", theme: p.theme||"" });
            } else {
              png = await renderPartyCard({ title: "Watch Party", going:0, reactions:0 });
            }
          } else if (type === "partystats") {
            const st = await userPartyStats(env, id);
            let handle = url.searchParams.get("h") || st.handle || "";
            const labels = st.isOwner
              ? { a:"parties hosted", b:"film-lovers joined", c:"live reactions" }
              : { a:"parties joined", b:"watched alongside", c:"reactions posted" };
            png = await renderPartyStatsCard({ handle, hosted: st.hosted, attendees: st.attendees, reactions: st.reactions, biggest: st.biggest, labels });
          } else {
            let emoji = "\u{1F3AC}", title = "Blueboxd", desc = "Free + legal public-domain cinema on Bluesky.", poster = null;
            if (type === "genre") {
              const m = await buildRailMaster(env, id);
              const docs = (m && Array.isArray(m.docs)) ? m.docs : [];
              poster = (docs.find(d => d && d.poster) || {}).poster || null;
              let lbl = (m && m.label && !/^[a-z-]+$/.test(String(m.label))) ? m.label : prettySlug(id);
              lbl = String(lbl).replace(/^[^\p{L}\p{N}]+/u, "").trim() || prettySlug(id) || "Cinema";
              title = lbl; desc = (m && m.total ? m.total + "+ " : "") + "free " + lbl.toLowerCase() + " films you can watch right now.";
            } else if (type === "person") {
              const pd = await catalog("person", { id });
              const docs = (pd && (pd.docs || pd.results)) || [];
              poster = (docs.find(d => d && d.poster) || {}).poster || null;
              let nm = (pd && (pd.name || pd.person) && !/^[a-z-]+$/.test(String(pd.name||pd.person))) ? (pd.name||pd.person) : prettySlug(id);
              title = nm; desc = "Free public-domain films featuring " + nm + " \u2014 watch now on Bluesky.";
            } else if (type === "diary") {
              emoji = "\u{1F4D3}"; title = "Film Diary"; desc = "Ratings, reviews & a running log of classic public-domain cinema on Bluesky.";
            } else if (type === "club") {
              emoji = "\u{1F37F}"; title = "The Club"; desc = "Watch classic public-domain films together \u2014 live parties, react in real time, all free.";
            } else if (type === "parties") {
              emoji = "\u{1F4FA}"; title = "Watch Parties"; desc = "Free + legal public-domain watch parties \u2014 RSVP, watch together, react live on Bluesky.";
              try { const ps = await listParties(env); const up = (ps || []).find(p => p.phase !== "ended" && p.poster); if (up) poster = up.poster; } catch (_) {}
            }
            if (!poster) {
              try { const nm = await buildNoirMaster(env); const d = (nm && nm.docs || []).find(x => x && x.poster); if (d) poster = d.poster; } catch (_) {}
            }
            png = await renderRouteCard({ emoji, title, desc, poster });
          }
  return png;
}

// diaryBlurb — free edge AI (Cloudflare Workers AI, llama-3.1-8b) writes a unique
// share blurb: ONE mood emoji per film (4 total) + a short snappy line capturing the
// vibe of the four. Returns "" on any failure so the caller falls back gracefully.
async function diaryBlurb(env, films) {
  if (!env || !env.AI || !films || !films.length) return "";
  const list = films.slice(0, 4).map((f, i) =>
    (i + 1) + ". " + f.title + (f.year ? " (" + f.year + ")" : "")
  ).join("\n");
  const sys = "You write punchy, witty one-line blurbs for a public-domain film diary on Bluesky. " +
    "Voice: a clever film buff, dry and warm, never corporate. No hashtags, no links, no quotation marks, no emoji except the four you are told to place.";
  const usr = "These are the last FOUR films someone watched:\n" + list + "\n\n" +
    "Write a Bluesky post body that:\n" +
    "1) Starts with exactly FOUR emojis in a row \u2014 ONE emoji that captures the mood/genre of each film, in the SAME order as listed.\n" +
    "2) Then a single short snappy sentence (max ~22 words) capturing the overall vibe of watching these four together.\n" +
    "Output ONLY the post body text. No labels, no hashtags, no quotes.";
  let out = "";
  try {
    const r = await env.AI.run("@cf/meta/llama-4-scout-17b-16e-instruct", {
      messages: [{ role: "system", content: sys }, { role: "user", content: usr }],
      max_tokens: 160, temperature: 0.9
    });
    out = (r && (r.response || r.result || "")) || "";
  } catch (_) { return ""; }
  out = String(out).trim().replace(/^["'\u201c\u201d]+|["'\u201c\u201d]+$/g, "").trim();
  // strip any stray hashtags/links the model might add (we add our own tags)
  out = out.replace(/https?:\/\/\S+/g, "").replace(/#[\w]+/g, "").replace(/\s{2,}/g, " ").trim();
  // grapheme safety: keep blurb well under limit so blurb + tags + nothing-else fits 300
  if (out.length > 200) out = out.slice(0, 200).trim();
  return out;
}

// statsBlurb — free edge AI writes a fun one-liner about a user's film-diary stats,
// led by 1-2 mood emojis. Returns "" on failure (caller falls back to the plain line).
async function statsBlurb(env, st) {
  if (!env || !env.AI) return "";
  const bits = [];
  bits.push((st.watched || 0) + " films watched");
  if (st.reviews) bits.push(st.reviews + " reviews");
  if (st.avg > 0) bits.push(Number(st.avg).toFixed(1) + " avg stars");
  if (st.topDecade) bits.push("favors the " + st.topDecade + "s");
  const facts = bits.join(", ");
  const sys = "You write punchy, witty one-liners for a public-domain film diary on Bluesky. " +
    "Voice: a clever film buff, dry and warm, never corporate. No hashtags, no links, no quotes.";
  const usr = "Someone's Blueboxd film-diary stats: " + facts + ".\n\n" +
    "Write a Bluesky post body that starts with 1-2 fitting emojis, then ONE short snappy sentence " +
    "(max ~22 words) about their classic-cinema habit. Output ONLY the body. No hashtags, no quotes.";
  let out = "";
  try {
    const r = await env.AI.run("@cf/meta/llama-4-scout-17b-16e-instruct", {
      messages: [{ role: "system", content: sys }, { role: "user", content: usr }],
      max_tokens: 130, temperature: 0.9
    });
    out = (r && (r.response || r.result || "")) || "";
  } catch (_) { return ""; }
  out = String(out).trim().replace(/^["'\u201c\u201d]+|["'\u201c\u201d]+$/g, "").trim();
  out = out.replace(/https?:\/\/\S+/g, "").replace(/#[\w]+/g, "").replace(/\s{2,}/g, " ").trim();
  if (out.length > 180) out = out.slice(0, 180).trim();
  return out;
}

async function shareToBluesky(sess, env, kind, p) {
  const origin = sess.origin || (env && env.PUBLIC_ORIGIN) || "https://blueboxd.com";
  const trim = (s, n) => { s = String(s || "").replace(/\s+/g, " ").trim(); return [...s].length > n ? [...s].slice(0, n - 1).join("") + "\u2026" : s; };
  let text = "", card = null;
  if (kind === "review") {
    const stars5 = Math.max(1, Math.min(5, Number(p.stars) || 0));
    const stars = "\u2605".repeat(stars5);
    const yr = p.year ? " (" + p.year + ")" : "";
    const url = origin + "/film/" + encodeURIComponent(p.filmId);
    const head = stars + " " + p.title + yr + "\n";
    const tail = "\n\nWatched free on Blueboxd \u{1F3AC}\n" + url + "\n\n#Blueboxd #filmsky";
    const blurb = trim(p.text, Math.max(0, 290 - [...head].length - [...tail].length));
    text = head + blurb + tail;
    const v = shortHash([p.title, p.year, p.poster, stars5, (p.text||"").slice(0,60)].join("|"));
    const q = "rv=1&s=" + (stars5*2) + "&t=" + encodeURIComponent(p.title||"") + "&y=" + encodeURIComponent(p.year||"") + "&h=" + encodeURIComponent(sess.handle||"") + (p.poster?("&p=" + encodeURIComponent(p.poster)):"") + (p.text?("&sn=" + encodeURIComponent(trim(p.text,140))):"") + "&v=" + v;
    const imgUrl = origin + "/og/movie/" + encodeURIComponent(p.filmId||"_") + ".png?" + q;
    card = { uri: url, image: imgUrl, nativeImage: true, imageAlt: stars + " " + p.title + yr + " \u2014 reviewed on Blueboxd.", aspectRatio: { width: 1200, height: 630 } };
  } else if (kind === "watching") {
    const yr = p.year ? " (" + p.year + ")" : "";
    const url = origin + "/film/" + encodeURIComponent(p.filmId);
    const note = p.note ? trim(p.note, 180) + "\n\n" : "";
    text = note + "Watching " + p.title + yr + " free on Blueboxd \u{1F3AC}\n" + url + "\n\n#Blueboxd #filmsky";
    const v = shortHash([p.title, p.year, p.poster, p.note, p.progress].join("|"));
    const q = "t=" + encodeURIComponent(p.title||"") + "&y=" + encodeURIComponent(p.year||"") + "&h=" + encodeURIComponent(sess.handle||"") + (p.poster?("&p=" + encodeURIComponent(p.poster)):"") + (p.note?("&n=" + encodeURIComponent(trim(p.note,140))):"") + (p.progress?("&pr=" + encodeURIComponent(p.progress)):"") + "&v=" + v;
    const imgUrl = origin + "/og/watching/" + encodeURIComponent(p.filmId||"_") + ".png?" + q;
    card = { uri: url, image: imgUrl, nativeImage: true, imageAlt: "Now watching " + p.title + yr + " free on Blueboxd.", aspectRatio: { width: 1200, height: 630 } };
  } else if (kind === "party") {
    const url = origin + "/party/" + encodeURIComponent(p.partyId);
    const yr = p.year ? " (" + p.year + ")" : "";
    const joinLine = p.joined ? "I just joined the Blueboxd watch party for " : "Watch party: ";
    text = "\u{1F4FA} " + joinLine + p.title + yr + " \u2014 free + legal public-domain cinema, watched together on Bluesky. Come react live \u{1F37F}\n\n" + url + "\n\n#Blueboxd #WatchParty #filmsky";
    const v = shortHash([p.partyId, p.going, p.reactions, p.live].join("|"));
    const imgUrl = origin + "/og/party/" + encodeURIComponent(p.partyId) + ".png?v=" + v;
    card = { uri: url, image: imgUrl, nativeImage: true, imageAlt: "Blueboxd watch party for " + p.title + yr + " \u2014 " + (p.going||0) + " going.", aspectRatio: { width: 1200, height: 630 } };
  } else if (kind === "partystats") {
    const url = origin + "/parties";
    const isOwner = p.isOwner;
    const line = isOwner
      ? ("I've hosted " + (p.hosted||0) + " Blueboxd watch " + ((p.hosted||0)===1?"party":"parties") + " \u2014 " + (p.attendees||0) + " film-lovers joined and dropped " + (p.reactions||0) + " live reactions, all on Bluesky.")
      : ("I've joined " + (p.hosted||0) + " Blueboxd watch " + ((p.hosted||0)===1?"party":"parties") + " \u2014 watched alongside " + (p.attendees||0) + " people, " + (p.reactions||0) + " reactions, all on Bluesky.");
    text = "\u{1F3AC} My Blueboxd watch-party stats\n\n" + line + "\n\nJoin a room \u2192 " + url + "\n\n#Blueboxd #WatchParty #filmsky";
    const v = shortHash([p.did, p.hosted, p.attendees, p.reactions].join("|"));
    const imgUrl = origin + "/og/partystats/" + encodeURIComponent(p.did||"") + ".png?h=" + encodeURIComponent(p.handle||"") + "&v=" + v;
    card = { uri: url, image: imgUrl, nativeImage: true, imageAlt: "My Blueboxd watch-party stats card.", aspectRatio: { width: 1200, height: 630 } };
  } else if (kind === "stats") {
    // Click-back target: the sharer's own Bluesky profile (Pete's request, Jun 19 2026).
    const url = (sess.did ? ("https://bsky.app/profile/" + encodeURIComponent(sess.did))
                          : (sess.handle ? ("https://bsky.app/profile/" + encodeURIComponent(sess.handle)) : (origin + "/stats")));
    const qp = [];
    qp.push("w=" + encodeURIComponent(p.watched||0));
    qp.push("r=" + encodeURIComponent(p.reviews||0));
    qp.push("avg=" + encodeURIComponent(p.avg||0));
    if (p.did) qp.push("h=" + encodeURIComponent(p.handle||""));
    if (p.dec) qp.push("dec=" + encodeURIComponent(p.dec));
    if (p.rat) qp.push("rat=" + encodeURIComponent(p.rat));
    const imgUrl = origin + "/og/stats/" + encodeURIComponent(p.did || "") + ".png?" + qp.join("&");
    const wlabel = (p.watched||0) + " film" + ((p.watched||0)===1?"":"s");
    let sblurb = "";
    try { sblurb = await statsBlurb(env, { watched: p.watched||0, reviews: p.reviews||0, avg: p.avg||0, topDecade: p.topDecade||"" }); } catch (_) {}
    const sFallback = "\u{1F4CA} My Blueboxd film stats\n\n" + wlabel + " watched, " + (p.reviews||0) + " reviews" + (p.avg>0?(" \u2014 " + Number(p.avg).toFixed(1) + " avg \u2605"):"") + ", all public-domain on Bluesky.";
    text = (sblurb ? sblurb : sFallback) + "\n\n#Blueboxd #filmstats #filmsky";
    card = { uri: url, title: "\u{1F4CA} My Film Stats \u00B7 Blueboxd", description: "Public-domain film stats on Bluesky. See yours.", image: imgUrl, nativeImage: true, imageAlt: "My Blueboxd film stats card \u2014 films watched, reviews, average rating, by decade and ratings breakdown.", aspectRatio: { width: 1200, height: 630 } };
  } else if (kind === "diary") {
    // Click-back target: the sharer's own Bluesky profile (Pete's request, Jun 19 2026).
    const url = (sess.did ? ("https://bsky.app/profile/" + encodeURIComponent(sess.did))
                          : (sess.handle ? ("https://bsky.app/profile/" + encodeURIComponent(sess.handle)) : (origin + "/diary")));
    const imgUrl = origin + "/og/diaryrow/" + encodeURIComponent(p.did || "") + ".png";
    // Pull the same last-four films the card shows, then let a free edge AI model
    // write a unique snappy blurb + one mood emoji per film (4 total). Card-only, no boilerplate.
    const films = (p.films && p.films.length) ? p.films : [];
    let blurb = "";
    try { blurb = await diaryBlurb(env, films); } catch (_) { blurb = ""; }
    const titlesAlt = films.map(f => f.title + (f.year?(" ("+f.year+")"):"")).join(", ");
    text = (blurb ? blurb + "\n\n" : "\u{1F4D3} My last four watched on Blueboxd\n\n") + "#lastfourwatched #Blueboxd #filmsky";
    // native image embed — the card carries everything; text is just the AI blurb + tags.
    card = { uri: url, title: "\u{1F4D3} My Film Diary \u00B7 Blueboxd", description: "Free public-domain cinema diary on Bluesky. Start your own.", image: imgUrl, nativeImage: true, imageAlt: (titlesAlt ? ("My last four watched on Blueboxd: " + titlesAlt + ".") : "My last four watched on Blueboxd \u2014 a film diary card."), aspectRatio: { width: 1200, height: 630 } };
  } else if (kind === "genre" || kind === "grid") {
    // Genre / curated-list share — 4-poster grid card instead of a flat text list.
    const slug = p.slug || p.id || "drama";
    const label = p.label || (slug.charAt(0).toUpperCase() + slug.slice(1));
    const url = p.url || (origin + "/genre/" + encodeURIComponent(slug));
    const posters = (p.posters || []).filter(Boolean).slice(0, 4);
    const sub = p.sub || (label + " on Blueboxd");
    const emoji = p.emoji || "\u{1F3AC}";
    text = emoji + " " + label + " \u2014 free, ad-free public-domain classics, watched together on Bluesky.\n\nBrowse \u2192 " + url + "\n\n#Blueboxd #filmsky";
    const qp = "t=" + encodeURIComponent(label) + "&s=" + encodeURIComponent(sub) + posters.map((x,i)=>"&p"+i+"="+encodeURIComponent(x)).join("") + "&v=" + shortHash(posters.join("|"));
    const imgUrl = origin + "/og/grid/" + encodeURIComponent(slug) + ".png?" + qp;
    card = { uri: url, title: emoji + " " + label + " \u00B7 Blueboxd", description: sub, image: imgUrl, nativeImage: true, imageAlt: label + " on Blueboxd \u2014 a four-poster grid card.", aspectRatio: { width: 1200, height: 630 } };
  } else if (kind === "movie") {
    // Single-film share (not a review) — poster card via /og/movie.
    const yr = p.year ? " (" + p.year + ")" : "";
    const url = p.url || (origin + "/film/" + encodeURIComponent(p.filmId));
    text = "\u{1F3AC} " + p.title + yr + " \u2014 free + legal on Blueboxd. Public-domain cinema, watched together on Bluesky.\n\n" + url + "\n\n#Blueboxd #filmsky";
    const v = shortHash([p.title,p.year,p.poster,p.stars10].join("|"));
    const q = "t=" + encodeURIComponent(p.title||"") + "&y=" + encodeURIComponent(p.year||"") + "&h=" + encodeURIComponent(sess.handle||"") + (p.poster?("&p="+encodeURIComponent(p.poster)):"") + (p.stars10!=null?("&s="+encodeURIComponent(p.stars10)):"") + (p.snippet?("&sn="+encodeURIComponent(trim(p.snippet,140))):"") + "&v=" + v;
    const imgUrl = origin + "/og/movie/" + encodeURIComponent(p.filmId||"_") + ".png?" + q;
    card = { uri: url, image: imgUrl, nativeImage: true, imageAlt: "Watch " + p.title + yr + " free on Blueboxd.", aspectRatio: { width: 1200, height: 630 } };
  } else if (kind === "leaderboard") {
    const url = origin + "/leaderboard";
    const myRank = p.myRank ? (" \u2014 I'm #" + p.myRank + (p.myScore != null ? (" with " + p.myScore + " pts") : "")) : "";
    text = p.invite
      ? "\u{1F37F} Come climb the Blueboxd leaderboard with me \u2014 free public-domain cinema, watched together on Bluesky. Log a film and you\u2019re on the board.\n\n" + url + "\n\n#Blueboxd #filmsky"
      : "\u{1F3C6} The Blueboxd Leaderboard" + myRank + ".\n\nTop cinephiles ranked by films watched, reviews & decades explored \u2014 all free public-domain cinema on Bluesky \u{1F37F}\n\n" + url + "\n\n#Blueboxd #filmsky";
    const imgUrl = origin + "/og/leaderboard.png?v=" + shortHash([p.myRank, p.myScore, Date.now()].join("|"));
    card = { uri: url, image: imgUrl, nativeImage: true, imageAlt: "The Blueboxd leaderboard \u2014 top cinephiles on Bluesky.", aspectRatio: { width: 1200, height: 630 } };
  } else { throw new Error("unknown share kind: " + kind); }
  return postCardToTimeline(sess, env, text, card);
}

// cardForLink — given ANY blueboxd.com URL, return the share {kind, p} so callers never
// post a naked link. Centralizes the "every link is a slick card" rule. Returns null if the
// URL isn't a recognized blueboxd surface (caller may fall back to a plain post).
function cardForLink(rawUrl) {
  let u;
  try { u = new URL(rawUrl); } catch (_) { return null; }
  if (!/(^|\.)blueboxd\.com$/i.test(u.hostname)) return null;
  const seg = u.pathname.replace(/\/+$/,"").split("/").filter(Boolean); // e.g. ["film","boys_beware"]
  const a = seg[0] || "", b = seg[1] || "";
  if (a === "film" && b)    return { kind: "movie",  p: { filmId: decodeURIComponent(b), url: rawUrl } };
  if (a === "party" && b)   return { kind: "party",  p: { partyId: decodeURIComponent(b), url: rawUrl } };
  if (a === "genre" && b)   return { kind: "genre",  p: { slug: decodeURIComponent(b), url: rawUrl } };
  if (a === "person" && b)  return { kind: "genre",  p: { slug: decodeURIComponent(b), label: decodeURIComponent(b), url: rawUrl } };
  if (a === "diary")        return { kind: "diary",  p: { url: rawUrl } };
  if (a === "stats")        return { kind: "stats",  p: { url: rawUrl } };
  if (a === "parties")      return { kind: "partystats", p: { url: rawUrl } };
  return null; // unknown surface
}
// Robust blob upload: retries on stale DPoP nonce + transient 5xx. Returns blob or null.
async function uploadBlobRetry(sess, ct, buf, env) {
  const url = `${sess.pds}/xrpc/com.atproto.repo.uploadBlob`;
  const doUp = async (n) => {
    const proof = await makeDpopProof({ dpopPrivateJwk: sess.dpop.privateJwk, dpopPublicJwk: sess.dpop.publicJwk, method: "POST", url, nonce: n, accessToken: sess.access_token });
    return fetch(url, { method: "POST", headers: { Authorization: `DPoP ${sess.access_token}`, DPoP: proof, "content-type": ct }, body: buf });
  };
  let nonce = sess.dpopNonce;
  let refreshed = false;
  for (let attempt = 0; attempt < 3; attempt++) {
    let up;
    try { up = await doUp(nonce); } catch (_) { up = null; }
    if (up) {
      const nn = up.headers.get("DPoP-Nonce"); if (nn) { sess.dpopNonce = nn; nonce = nn; }
      if (up.ok) { try { const ud = await up.json(); if (ud && ud.blob) { slog({ev:"share",step:"upload_blob",status:up.status,ok:true,did:sess.did}); return ud.blob; } } catch (_) {} slog({ev:"share",step:"upload_blob",status:up.status,ok:false,did:sess.did}); return null; }
      // 401: retry with fresh nonce; if it persists, reactively refresh the session token ONCE then retry.
      if (up.status === 401) {
        if (!refreshed && env && sess.refresh_token) { refreshed = await refreshSessionNow(env, sess); if (refreshed) { nonce = sess.dpopNonce; continue; } }
        if (nonce) continue;
      }
      if (up.status >= 500) { await new Promise(r => setTimeout(r, 300 * (attempt + 1))); continue; }
      slog({ev:"share",step:"upload_blob",status:up.status,ok:false,did:sess.did});
      return null;
    }
    await new Promise(r => setTimeout(r, 300 * (attempt + 1)));
  }
  slog({ev:"share",step:"upload_blob",status:"exhausted",ok:false,did:sess.did});
  return null;
}

async function postCardToTimeline(sess, env, text, card) {
  let facets = buildFacets(text);
  let embed = null;
  let imageUploadFailed = false;
  try {
    if (card && card.image) {
      let buf = null, ct = "image/png";
      // Render the card PNG IN-PROCESS (never self-fetch our own origin -> avoids edge 522 loopback).
      try {
        const u = new URL(card.image);
        if (u.pathname.startsWith("/og/") && u.pathname.endsWith(".png")) {
          const seg = u.pathname.slice(4, -4).split("/");
          const ogType = seg[0] || "";
          const ogId = decodeURIComponent(seg.slice(1).join("/") || "_");
          const png = await buildOgPng(env, ogType, ogId, u.searchParams);
          if (png && png.byteLength > 0 && png.byteLength < 976560) { buf = png; ct = "image/png"; }
          slog({ev:"share",step:"render_inproc",type:ogType,ok:!!buf,bytes:buf?buf.byteLength:0,did:sess.did});
        }
      } catch (e) { slog({ev:"share",step:"render_inproc_err",err:String(e&&e.message||e),did:sess.did}); }
      // Fallback: external image URL (non-/og/ cards) — fetch over network.
      for (let f = 0; f < 2 && !buf; f++) {
        try {
          const ir = await fetch(card.image, { headers: { "user-agent": "Blueboxd/1.0" }, cf: { cacheTtl: 0 } });
          if (ir.ok) { ct = ir.headers.get("content-type") || "image/jpeg"; const b = await ir.arrayBuffer(); if (b && b.byteLength > 0 && b.byteLength < 976560) buf = b; }
        } catch (_) {}
        if (!buf) await new Promise(r => setTimeout(r, 250));
      }
      if (buf) {
        const blob = await uploadBlobRetry(sess, ct, buf, env);
        if (blob) {
          // CLICKABLE-CARD FIX (Jun 19 2026): Bluesky native image embeds (app.bsky.embed.images)
          // are NOT clickable. To make the rendered card image link back to its page
          // (film / profile / leaderboard / etc.), we use an EXTERNAL embed with the PNG as thumb
          // whenever the card carries a uri. Falls back to a pure image embed only if no uri exists.
          if (card.uri) {
            embed = { $type: "app.bsky.embed.external", external: {
              uri: card.uri,
              title: (card.title || card.imageAlt || "Blueboxd").slice(0,300),
              description: (card.description || "Free public-domain cinema on Bluesky.").slice(0,1000),
              thumb: blob
            } };
          } else {
            const img = { alt: (card.imageAlt||"").slice(0,1000), image: blob };
            if (card.aspectRatio) img.aspectRatio = card.aspectRatio;
            embed = { $type: "app.bsky.embed.images", images: [ img ] };
          }
        } else if (card.nativeImage) {
          // The poster card IS the point of this share — do not silently downgrade to a bare link card.
          imageUploadFailed = true;
        }
      } else if (card.nativeImage) {
        imageUploadFailed = true;
      }
    }
    // Only fall back to an external link card for NON-nativeImage shares (e.g. review/movie cards).
    if (!embed && !imageUploadFailed && card && card.uri && !card.nativeImage) {
      embed = { $type: "app.bsky.embed.external", external: { uri: card.uri, title: (card.title||"").slice(0,300), description: (card.description||"").slice(0,1000) } };
    }
  } catch (_) {}
  if (imageUploadFailed) {
    // Surface a retryable error to the caller instead of posting a degraded card.
    const e = new Error("image_upload_failed"); e.retryable = true; throw e;
  }
  const record = { $type: "app.bsky.feed.post", text, createdAt: (new Date()).toISOString(), langs: ["en"] };
  if (facets && facets.length) record.facets = facets;
  if (embed) record.embed = embed;
  return createRecord(sess, "app.bsky.feed.post", record);
}

// social.js
async function upsertMember(env, did, handle) {
  if (!env.CC_SOCIAL || !did) return;
  const now = new Date().toISOString();
  try {
    await env.CC_SOCIAL.prepare(
      `INSERT INTO members (did, handle, first_seen, last_seen) VALUES (?,?,?,?)
       ON CONFLICT(did) DO UPDATE SET handle=excluded.handle, last_seen=excluded.last_seen`
    ).bind(did, handle || null, now, now).run();
  } catch (_) { /* never block login on index write */ }
}

// ---- resolve a poster by title (reuses tmdb-verify cache) -------------------
// Public-domain cap: Blueboxd only hosts pre-1978 films. The TMDb "right version"
// validator below NEVER selects a remake/reissue released after this year, so
// "The Day the Earth Stood Still" resolves to 1951, not the 2008 remake.
var PD_YEAR_CAP = 1978;
function relYear(m){ const d=(m&&m.release_date)||""; const y=parseInt(String(d).slice(0,4),10); return Number.isFinite(y)?y:null; }
// Pick the correct version from TMDb results, honoring the PD year cap.
// Returns the chosen result object (with poster_path/overview) or null.
function pickPdVersion(results, wantYear){
  const cands = (results||[]).filter(m => m && m.poster_path && !m.adult);
  if (!cands.length) return null;
  const want = wantYear ? parseInt(String(wantYear),10) : null;
  // Reject anything strictly after the cap — no post-1978 posters, ever.
  const capped = cands.filter(m => { const y=relYear(m); return y===null ? true : y <= PD_YEAR_CAP; });
  const pool = capped.length ? capped : cands.filter(m => relYear(m)===null); // if all are post-cap, only allow undated
  if (!pool.length) return null;
  if (want){
    // exact-year match first, then closest year <= cap
    const exact = pool.find(m => relYear(m)===want);
    if (exact) return exact;
    const dated = pool.filter(m => relYear(m)!==null).sort((a,b)=>Math.abs(relYear(a)-want)-Math.abs(relYear(b)-want));
    if (dated.length) return dated[0];
  }
  // no year hint: prefer the OLDEST dated release (original over reissue), else first
  const dated = pool.filter(m => relYear(m)!==null).sort((a,b)=>relYear(a)-relYear(b));
  return dated[0] || pool[0];
}
async function posterByTitle(env, title, year) {
  if (!env.TMDB_API_KEY || !title) return null;
  const q = String(title).trim(); const yr = year ? String(year) : "";
  const ck = "tv2:" + q.toLowerCase() + ":" + yr;
  try {
    const cached = await env.CC_KV.get(ck, "json");
    if (cached) return cached.ok ? cached.poster : null;
    const tu = new URL("https://api.themoviedb.org/3/search/movie");
    tu.searchParams.set("query", q); if (yr) tu.searchParams.set("year", yr);
    tu.searchParams.set("include_adult", "false");
    const tr = await fetch(tu.toString(), { headers: { Authorization: "Bearer " + env.TMDB_API_KEY } });
    if (!tr.ok) return null;
    const tj = await tr.json();
    const hit = pickPdVersion(tj.results, yr);
    const poster = hit ? ("https://image.tmdb.org/t/p/w500" + hit.poster_path) : null;
    // cache result (incl. negative) for 30d so we don't re-hit TMDb
    try { await env.CC_KV.put(ck, JSON.stringify({ ok: !!poster, poster, overview: (hit&&hit.overview)||"", chosenYear: hit?relYear(hit):null }), { expirationTtl: 2592000 }); } catch(_){}
    return poster;
  } catch (_) { return null; }
}

// ---- index a watch or review row -------------------------------------------
// kind: 'watch' | 'review'.  Dedupe on (did, film_id, kind, at).
async function indexWatch(env, { did, handle, filmId, title, year, poster, kind, stars, at }) {
  if (!env.CC_SOCIAL || !did || !filmId) return;
  try {
    await env.CC_SOCIAL.prepare(
      `INSERT OR IGNORE INTO watch_index (did, handle, film_id, title, year, poster, kind, stars, at)
       VALUES (?,?,?,?,?,?,?,?,?)`
    ).bind(
      did, handle || null, String(filmId), title || null,
      year != null ? String(year) : null, poster || null,
      kind || 'watch', stars != null ? Number(stars) : null,
      at || new Date().toISOString()
    ).run();
  } catch (_) {}
}

// ---- "what the club is watching" -------------------------------------------
// Trending films across all members in the last N days, ranked by distinct watchers.
async function clubWatching(env, { days = 30, limit = 24 } = {}) {
  if (!env.CC_SOCIAL) return { films: [] };
  const since = new Date(Date.now() - days * 86400000).toISOString();
  const rs = await env.CC_SOCIAL.prepare(
    `SELECT film_id,
            MAX(title)  AS title,
            MAX(year)   AS year,
            MAX(poster) AS poster,
            COUNT(DISTINCT did) AS watchers,
            SUM(CASE WHEN kind='review' THEN 1 ELSE 0 END) AS reviews,
            AVG(CASE WHEN stars>0 THEN stars END) AS avg_stars,
            MAX(at) AS last_at
       FROM watch_index
      WHERE at >= ?
      GROUP BY film_id
      ORDER BY watchers DESC, last_at DESC
      LIMIT ?`
  ).bind(since, limit).all();
  const films = (rs.results || []).map(r => ({
    filmId: r.film_id, title: r.title, year: r.year, poster: r.poster,
    watchers: r.watchers, reviews: r.reviews,
    avgStars: r.avg_stars != null ? Math.round(r.avg_stars * 10) / 10 : null,
    lastAt: r.last_at,
  }));
  // Backfill missing posters on the fly (watch records logged before enrichment had none).
  const APP_ID = '69a76ce1b110c1c0c8c86855';
  const CATALOG = `https://base44.app/api/apps/${APP_ID}/functions/cinevault`;
  const needs = films.filter(f => !f.poster && f.filmId).slice(0, 12);
  await Promise.all(needs.map(async f => {
    try {
      const r = await fetch(CATALOG, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ action: 'detail', id: f.filmId }) });
      const d = await r.json();
      if (d && d.poster) f.poster = d.poster;
    } catch (_e) {}
    // Fallback: title-based PD-capped resolver (same one the diary card uses).
    if (!f.poster && f.title) { try { const p = await posterByTitle(env, f.title, f.year); if (p) f.poster = p; } catch (_e) {} }
  }));
  return { films };
}

// ── Leaderboard: rank authenticated members by a transparent "Cinephile Score". ──
// score = watched*1 + reviews*2 + decades*5 + party_joins*2 + streak_weeks*4
// (genres omitted in v1 — not stored on watch_index; can enrich later via catalog.)
async function clubLeaderboard(env, { limit = 50, since = null } = {}) {
  if (!env.CC_SOCIAL) return { rows: [] };
  // Per-member watch/review aggregates from watch_index. Optional time window via `since` (ISO).
  const where = since ? "WHERE kind != 'want' AND at >= ?" : "WHERE kind != 'want'";
  const stmt = env.CC_SOCIAL.prepare(
    `SELECT did,
            MAX(handle) AS handle,
            SUM(CASE WHEN kind='want' THEN 0 ELSE 1 END)            AS watched,
            SUM(CASE WHEN kind='review' THEN 1 ELSE 0 END)          AS reviews,
            COUNT(DISTINCT CASE WHEN year IS NOT NULL AND year!=''
                  THEN CAST((CAST(year AS INTEGER)/10) AS INTEGER) END) AS decades,
            COUNT(DISTINCT substr(at,1,10)) AS active_days,
            MAX(at) AS last_at
       FROM watch_index
      ${where}
      GROUP BY did`
  );
  const wi = await (since ? stmt.bind(since).all() : stmt.all());
  // Party joins per member.
  const pj = await env.CC_SOCIAL.prepare(
    `SELECT did, COUNT(*) AS joins FROM rsvps GROUP BY did`
  ).all();
  const joinMap = {};
  for (const r of (pj.results || [])) joinMap[r.did] = r.joins || 0;
  // Opt-out set (members.lb_optout = 1).
  let optout = {};
  try {
    const oo = await env.CC_SOCIAL.prepare(`SELECT did FROM members WHERE lb_optout=1`).all();
    for (const r of (oo.results || [])) optout[r.did] = true;
  } catch (_e) { /* column may not exist yet */ }

  const rows = (wi.results || [])
    .filter(r => r.did && !optout[r.did] && (r.watched || 0) > 0)
    .map(r => {
      const watched = r.watched || 0, reviews = r.reviews || 0, decades = r.decades || 0;
      const joins = joinMap[r.did] || 0;
      // streak_weeks: approx via distinct active weeks (active_days as proxy floor).
      const streakWeeks = Math.min(Math.ceil((r.active_days || 0) / 7), 52);
      const score = watched * 1 + reviews * 2 + decades * 5 + joins * 2 + streakWeeks * 4;
      return {
        did: r.did,
        handle: r.handle || '',                                    // FULL handle (for accurate linking/fallback)
        display: (r.handle || '').replace(/\.bsky\.social$/, ''), // pretty label only
        watched, reviews, decades, joins, streakWeeks,
        score, lastAt: r.last_at,
      };
    })
    .sort((a, b) => b.score - a.score || b.watched - a.watched)
    .slice(0, limit)
    .map((r, i) => ({ rank: i + 1, ...r }));

  // Rank movement: compare to the most recent prior daily snapshot (all-time board only).
  if (!since) {
    try {
      const todayUTC = new Date().toISOString().slice(0,10);
      const prev = await env.CC_SOCIAL.prepare(
        `SELECT did, rank FROM lb_snapshots
          WHERE day = (SELECT MAX(day) FROM lb_snapshots WHERE day < ?)`
      ).bind(todayUTC).all();
      const prevRank = {};
      for (const r of (prev.results || [])) prevRank[r.did] = r.rank;
      for (const r of rows) {
        const pr = prevRank[r.did];
        if (pr == null) r.delta = null;        // new to the board (or first snapshot)
        else r.delta = pr - r.rank;             // +ve = moved up
      }
    } catch (_) {}
  }
  // Enrich with avatars (batched getProfiles, KV-cached by DID, 7-day TTL).
  try { await enrichAvatars(env, rows); } catch (_) {}
  return { rows };
}

// Write today's full ranking to lb_snapshots (idempotent per day). Called by a daily automation.
async function snapshotLeaderboard(env) {
  if (!env.CC_SOCIAL) return { ok: false, n: 0 };
  await ensureSchema(env);
  const lb = await clubLeaderboard(env, { limit: 500 });
  const rows = lb.rows || [];
  if (!rows.length) return { ok: true, n: 0 };
  const day = new Date().toISOString().slice(0,10);
  const stmts = rows.map(r =>
    env.CC_SOCIAL.prepare(`INSERT OR REPLACE INTO lb_snapshots (day, did, rank, score) VALUES (?,?,?,?)`)
      .bind(day, r.did, r.rank, r.score)
  );
  for (let i = 0; i < stmts.length; i += 50) { try { await env.CC_SOCIAL.batch(stmts.slice(i, i+50)); } catch (_) {} }
  return { ok: true, n: rows.length, day };
}

// Batch-fetch Bluesky avatars for leaderboard rows. Cache per-DID in CC_KV (7d).
// getProfiles accepts up to 25 actors per call.
async function enrichAvatars(env, rows) {
  if (!rows || !rows.length) return;
  const need = [];
  for (const r of rows) {
    if (!r.did) continue;
    let cached = null;
    try { cached = await env.CC_KV.get("av:" + r.did, "json"); } catch (_) {}
    if (cached && typeof cached.a === "string") { r.avatar = cached.a || ""; }
    else need.push(r);
  }
  // batch the misses
  for (let i = 0; i < need.length; i += 25) {
    const batch = need.slice(i, i + 25);
    const qs = batch.map(r => "actors=" + encodeURIComponent(r.did)).join("&");
    try {
      const pr = await fetch(APPVIEW + "/xrpc/app.bsky.actor.getProfiles?" + qs);
      if (!pr.ok) continue;
      const pj = await pr.json();
      const byDid = {};
      for (const p of (pj.profiles || [])) { if (p && p.did) byDid[p.did] = p.avatar || ""; }
      for (const r of batch) {
        const av = byDid[r.did] || "";
        r.avatar = av;
        try { await env.CC_KV.put("av:" + r.did, JSON.stringify({ a: av }), { expirationTtl: 60*60*24*7 }); } catch (_) {}
      }
    } catch (_) {}
  }
}


// ---- "people you follow are watching X" ------------------------------------
// followDids: array of DIDs the logged-in user follows. We intersect with the index.
async function friendsWatching(env, followDids, { days = 60, limit = 30 } = {}) {
  if (!env.CC_SOCIAL || !followDids || !followDids.length) return { items: [] };
  const since = new Date(Date.now() - days * 86400000).toISOString();
  // D1 supports up to 100 bound params comfortably; cap the follow set we query.
  const dids = followDids.slice(0, 90);
  const placeholders = dids.map(() => '?').join(',');
  const rs = await env.CC_SOCIAL.prepare(
    `SELECT did, handle, film_id, title, year, poster, kind, stars, at
       FROM watch_index
      WHERE did IN (${placeholders}) AND at >= ?
      ORDER BY at DESC
      LIMIT ?`
  ).bind(...dids, since, limit).all();
  const items = (rs.results || []).map(r => ({
    did: r.did, handle: r.handle, filmId: r.film_id, title: r.title,
    year: r.year, poster: r.poster, kind: r.kind,
    stars: r.stars || null, at: r.at,
  }));
  // Backfill missing posters server-side (PD-capped, KV-cached) so the "people you follow" rail shows real covers.
  const need = items.filter(it => !it.poster && it.title).slice(0, 16);
  await Promise.all(need.map(async it => {
    try { const p = await posterByTitle(env, it.title, it.year); if (p) it.poster = p; } catch (_e) {}
  }));
  return { items };
}

// party.js
var HOST_HANDLE = "did:plc:YOUR_OWNER_DID";  // DID, handle-change-proof (was blueboxd.bsky.social -> now blueboxd.com)
var HOST_PDS = "https://bsky.social"; // your account's PDS host
var APPVIEW = "https://public.api.bsky.app";
async function hostSession(env) {
  const cached = await env.CC_KV.get("host:sess", "json");
  if (cached && cached.exp > Date.now()) return cached;
  const r = await fetch(`${HOST_PDS}/xrpc/com.atproto.server.createSession`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ identifier: HOST_HANDLE, password: env.BLUEBOXD_APP_PASSWORD })
  });
  const d = await r.json();
  if (!d.accessJwt) throw new Error("host auth failed: " + (d.error || r.status));
  const sess = { jwt: d.accessJwt, did: d.did, handle: d.handle, exp: Date.now() + 100 * 60 * 1e3 };
  await env.CC_KV.put("host:sess", JSON.stringify(sess), { expirationTtl: 6e3 });
  return sess;
}
function buildFacets(text) {
  const enc = new TextEncoder();
  const blen = (str) => enc.encode(str).length;
  const facets = [];
  const linkRe = /https?:\/\/[^\s\]\)]+/g;
  let m;
  while ((m = linkRe.exec(text))) {
    let url = m[0].replace(/[.,;!?)]+$/, "");
    const start = blen(text.slice(0, m.index));
    facets.push({ index: { byteStart: start, byteEnd: start + blen(url) },
      features: [{ $type: "app.bsky.richtext.facet#link", uri: url }] });
  }
  const tagRe = /(^|\s)(#[A-Za-z][A-Za-z0-9_]*)/g;
  while ((m = tagRe.exec(text))) {
    const tag = m[2]; const at = m.index + m[1].length;
    const start = blen(text.slice(0, at));
    facets.push({ index: { byteStart: start, byteEnd: start + blen(tag) },
      features: [{ $type: "app.bsky.richtext.facet#tag", tag: tag.slice(1) }] });
  }
  facets.sort((a, b) => a.index.byteStart - b.index.byteStart);
  return facets;
}
async function hostPost(env, text) {
  const s = await hostSession(env);
  const r = await fetch(`${HOST_PDS}/xrpc/com.atproto.repo.createRecord`, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${s.jwt}` },
    body: JSON.stringify({
      repo: s.did,
      collection: "app.bsky.feed.post",
      record: { $type: "app.bsky.feed.post", text, facets: buildFacets(text), createdAt: (/* @__PURE__ */ new Date()).toISOString(), langs: ["en"] }
    })
  });
  return r.json();
}

// Post to the host feed WITH a rich external link card (poster thumbnail).
// Uploads the poster as a blob and attaches app.bsky.embed.external so the
// post renders a Letterboxd-grade movie card that clicks through to the URL.
async function hostPostCard(env, text, card) {
  const s = await hostSession(env);
  let embed = null;
  try {
    let thumb = null;
    if (card && card.image) {
      let ct = "image/png", buf = null;
      // NEVER self-fetch our own worker origin (edge loopback -> 522). Render /og/* in-process.
      try {
        const iu = new URL(card.image);
        const og = iu.pathname.match(/^\/og\/([a-z]+)\/([^.\/]+)/i) || iu.pathname.match(/^\/og\/([a-z]+)/i);
        const isSelf = /(^|\.)blueboxd\.com$/i.test(iu.hostname) || /(^|\.)cineclub\./i.test(iu.hostname) || iu.hostname.endsWith(".workers.dev");
        if (isSelf && og) {
          buf = await buildOgPng(env, og[1], (og[2] ? decodeURIComponent(og[2]) : ""), iu.searchParams);
          ct = "image/png";
        }
      } catch(_) {}
      if (!buf) {
        const ir = await fetch(card.image, { headers: { "user-agent": "Blueboxd/1.0" } });
        if (ir.ok) { ct = ir.headers.get("content-type") || "image/jpeg"; buf = await ir.arrayBuffer(); }
      }
      if (buf && buf.byteLength > 0 && buf.byteLength < 976560) {
        const up = await fetch(`${HOST_PDS}/xrpc/com.atproto.repo.uploadBlob`, {
          method: "POST",
          headers: { "content-type": ct, authorization: `Bearer ${s.jwt}` },
          body: buf
        });
        if (up.ok) { const ud = await up.json(); thumb = ud.blob || null; }
      }
    }
    if (card && card.uri) {
      embed = { $type: "app.bsky.embed.external",
        external: { uri: card.uri, title: (card.title||"").slice(0,300), description: (card.description||"").slice(0,1000) } };
      if (thumb) embed.external.thumb = thumb;
    }
  } catch (_) {}
  const record = { $type: "app.bsky.feed.post", text, facets: buildFacets(text), createdAt: (new Date()).toISOString(), langs: ["en"] };
  if (embed) record.embed = embed;
  const r = await fetch(`${HOST_PDS}/xrpc/com.atproto.repo.createRecord`, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${s.jwt}` },
    body: JSON.stringify({ repo: s.did, collection: "app.bsky.feed.post", record })
  });
  return r.json();
}
var pid = () => "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

// ── Phase 8: Watch-party discovery + opt-in invite bot ──
// Bluesky policy: we may ONLY auto-reply to users who @-mention us (opt-in).
// For everyone else we do passive discovery (read-only) + post on our OWN feed.
var WATCH_TAGS = ["BlueboxdParty", "TCMParty", "NoirAlley", "filmsky", "SilentSunday", "ClassicFilm", "FilmTwitter", "SundayCinema", "BMovieParty", "HorrorParty", "MovieNight", "WatchParty"];
// Opt-in anchor tag: anyone posting this gets featured in the Blueboxd parties rail.
var BLUEBOXD_PARTY_TAG = "BlueboxdParty";
// ── Film-relevance gate: keep TRUE film watch parties, reject sports-bar/promo/MLM spam ──
var FILM_POSITIVE = /\b(film|movie|cinema|screening|watch[- ]?(party|along)|double[- ]?feature|noir|silent film|b[- ]?movie|horror|sci[- ]?fi|classic|tcm|criterion|kaiju|matinee|feature presentation|now showing|tonight'?s? (film|movie|feature)|the film|the movie)\b/i;
var SPAM_NEGATIVE = /\b(world cup|soccer|f[uú]tbol|⚽|football|nfl|nba|mlb|ufc|boxing match|kickoff|cocktails?|hookah|lounge|bar|grill|drinks?|happy hour|reserve (now|your)|make money|passive income|tiktok money|crypto|forex|onlyfans|adult|18\+|escort|casino|betting|odds|sportsbook|rsvp link|📍|🍻|🎟️)\b/i;
function isFilmWatchParty(text, tag){
  const t = String(text||"");
  if (tag === BLUEBOXD_PARTY_TAG) {
    // Opt-in tag is trusted, but still reject obvious commercial spam
    return !SPAM_NEGATIVE.test(t);
  }
  if (SPAM_NEGATIVE.test(t)) return false;
  // dedicated film tags imply film context; generic tags must prove it
  if (["TCMParty","NoirAlley","SilentSunday","ClassicFilm","BMovieParty","HorrorParty","filmsky"].indexOf(tag) >= 0) return true;
  return FILM_POSITIVE.test(t);
}
var SEARCH_APPVIEW = "https://api.bsky.app";
async function bskySearch(env, q, limit) {
  // appview search requires auth — use the host session bearer
  let sess; try { sess = await hostSession(env); } catch(e){ return []; }
  const u = SEARCH_APPVIEW + "/xrpc/app.bsky.feed.searchPosts?q=" + encodeURIComponent(q) + "&limit=" + (limit||25) + "&sort=latest";
  const r = await fetch(u, { headers: { "accept": "application/json", authorization: "Bearer " + sess.jwt } });
  if (!r.ok) return [];
  const d = await r.json().catch(()=>({}));
  return d.posts || [];
}
async function scanWatchParties(env) {
  // Throttle: at most once / 7 min (cron fires every minute)
  const last = Number(await env.CC_KV.get("bot:scan:ts")) || 0;
  if (Date.now() - last < 7*60*1000) return;
  await env.CC_KV.put("bot:scan:ts", String(Date.now()));
  const seen = {}; const out = [];
  for (const tag of WATCH_TAGS) {
    const posts = await bskySearch(env, "#" + tag, 20).catch(()=>[]);
    for (const p of posts) {
      try {
        const a = p.author || {}; if (!a.handle) continue;
        if (a.handle === HOST_HANDLE) continue;
        const created = Date.parse(p.record && p.record.createdAt || p.indexedAt || 0);
        if (!created || Date.now() - created > 6*60*60*1000) continue; // last 6h only
        if (seen[p.uri]) continue; seen[p.uri] = 1;
        const _txt = (p.record && p.record.text || "");
        // Film-relevance gate — only TRUE film watch parties survive
        if (!isFilmWatchParty(_txt, tag)) continue;
        out.push({
          uri: p.uri, cid: p.cid, tag,
          handle: a.handle, displayName: a.displayName || a.handle, avatar: a.avatar || null,
          text: _txt.slice(0, 240),
          createdAt: created,
          blueboxdTag: tag === BLUEBOXD_PARTY_TAG,
          link: "https://bsky.app/profile/" + a.handle + "/post/" + p.uri.split("/").pop()
        });
      } catch(e){}
    }
  }
  out.sort((x,y)=> y.createdAt - x.createdAt);
  const top = out.slice(0, 24);
  await env.CC_KV.put("bot:discovery", JSON.stringify({ at: Date.now(), posts: top }), { expirationTtl: 60*60*8 });
  return top;
}
async function getDiscovery(env) {
  const d = await env.CC_KV.get("bot:discovery", "json");
  if (!d || !d.posts) return { at: 0, posts: [] };
  // only surface posts from the last 6h
  const fresh = d.posts.filter(p => Date.now() - p.createdAt < 6*60*60*1000);
  return { at: d.at, posts: fresh };
}
async function hostReply(env, parentUri, parentCid, text) {
  const sess = await hostSession(env);
  // root == parent for a top-level reply to their post
  const r = await fetch(HOST_PDS + "/xrpc/com.atproto.repo.createRecord", {
    method: "POST",
    headers: { "content-type": "application/json", authorization: "Bearer " + sess.jwt },
    body: JSON.stringify({
      repo: sess.did, collection: "app.bsky.feed.post",
      record: { $type: "app.bsky.feed.post", text,
        reply: { root: { uri: parentUri, cid: parentCid }, parent: { uri: parentUri, cid: parentCid } },
        createdAt: new Date().toISOString(), langs: ["en"] }
    })
  });
  return r.json();
}
async function pollMentions(env) {
  // Throttle: once / 3 min
  const last = Number(await env.CC_KV.get("bot:ment:ts")) || 0;
  if (Date.now() - last < 3*60*1000) return;
  await env.CC_KV.put("bot:ment:ts", String(Date.now()));
  let sess; try { sess = await hostSession(env); } catch(e){ return; }
  const r = await fetch(HOST_PDS + "/xrpc/app.bsky.notification.listNotifications?limit=30", {
    headers: { authorization: "Bearer " + sess.jwt }
  });
  if (!r.ok) return;
  const d = await r.json().catch(()=>({}));
  const notifs = d.notifications || [];
  const INVITE = "Hey! \u{1F44B} You don\u2019t need an account anywhere to join us \u2014 Blueboxd is free, ad-free public-domain cinema with a film diary + live watch parties, all on Bluesky. Come watch something great with us \u2192 https://blueboxd.com";
  for (const n of notifs) {
    try {
      if (n.reason !== "mention" && n.reason !== "reply") continue;
      if (!n.isRead === false) {} // proceed regardless of read
      const uri = n.uri, cid = n.cid;
      if (!uri || !cid) continue;
      // de-dupe: never reply to the same post twice
      const key = "bot:replied:" + uri;
      if (await env.CC_KV.get(key)) continue;
      const author = (n.author && n.author.handle) || "";
      if (author === HOST_HANDLE) continue;
      // mark FIRST (avoid double-fire) then reply
      await env.CC_KV.put(key, "1", { expirationTtl: 60*60*24*30 });
      await hostReply(env, uri, cid, INVITE).catch(()=>{});
    } catch(e){}
  }
  // mark notifications seen so the list stays small
  try {
    await fetch(HOST_PDS + "/xrpc/app.bsky.notification.updateSeen", {
      method: "POST", headers: { "content-type":"application/json", authorization: "Bearer " + sess.jwt },
      body: JSON.stringify({ seenAt: new Date().toISOString() })
    });
  } catch(e){}
}
async function dailyRoundup(env) {
  // Once per calendar day (ET-ish), post a roundup to OUR OWN feed if there's a real crowd.
  const today = new Date().toISOString().slice(0,10);
  const done = await env.CC_KV.get("bot:roundup:day");
  if (done === today) return;
  // only run in a sensible evening window (22:00-23:59 UTC \u2248 6-8pm ET) to catch Sat Noir Alley etc.
  const h = new Date().getUTCHours();
  if (h < 22) return;
  const disc = await getDiscovery(env);
  const n = (disc.posts||[]).length;
  if (n < 5) { return; } // not enough buzz to bother
  await env.CC_KV.put("bot:roundup:day", today);
  // PHASE 4: feature a REAL film as a rich poster card (deep-links to /film/<id>),
  // so the roundup always renders as a tappable card \u2014 never a bare homepage link.
  let featured = null;
  try {
    const nm = await buildNoirMaster(env);
    const docs = (nm && Array.isArray(nm.docs)) ? nm.docs.filter(d => d && d.id && d.poster) : [];
    if (docs.length) {
      // rotate by day-of-year so we don\u2019t feature the same title twice in a row
      const doy = Math.floor((Date.now()) / 864e5);
      featured = docs[doy % docs.length];
    }
  } catch (_) {}
  if (featured) {
    const fTitle = featured.title || "Tonight\u2019s pick";
    const fYear = featured.year ? " (" + featured.year + ")" : "";
    const url = "https://blueboxd.com/film/" + encodeURIComponent(featured.id);
    const txt = "\u{1F37F} " + n + "+ live movie threads buzzing tonight (#NoirAlley #TCMParty #filmsky) \u2014 here\u2019s a free one to match the mood:\n\n\u25B6 " + fTitle + fYear + ", streaming free, no account.\n\n" + url + "\n\n#Blueboxd";
    await hostPostCard(env, txt, {
      uri: url,
      title: "\u{1F3AC} " + fTitle + fYear + " \u00B7 Blueboxd",
      description: "Free + legal public-domain cinema. Watch it now, log a rating, all on Bluesky.",
      image: featured.poster
    }).catch(()=>{});
  } else {
    // fallback: no curated film available \u2014 plain homepage nudge
    const txt = "\u{1F37F} The film world is watching tonight \u2014 " + n + "+ live movie threads buzzing right now (#NoirAlley #TCMParty #filmsky).\n\nNo account? No problem. Blueboxd is free, ad-free public-domain cinema + a film diary, all on Bluesky.\n\nJoin the show \u2192 https://blueboxd.com\n\n#Blueboxd";
    await hostPost(env, txt).catch(()=>{});
  }
}

async function createParty(env, { filmId, title, year: year2, poster: poster2, theme, startsAt, runtimeSec, origin, hostSess }) {
  const id = pid();
  // Always resolve a real poster (so the Bluesky card never shows a default image).
  if (!poster2 && filmId) {
    try {
      const _det = await catalog("detail", { id: String(filmId), source: "archive" });
      if (_det && !_det.error) {
        poster2 = _det.poster || poster2;
        try { const _ov = await env.CC_KV.get("art:" + filmId, "json"); if (_ov && _ov.poster) poster2 = _ov.poster; } catch (_) {}
      }
    } catch (_) {}
  }
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const _hostDid = (hostSess && hostSess.did) || OWNER_DID;
  const _hostHandle = (hostSess && (hostSess.handle || hostSess.did)) || HOST_HANDLE;
  await env.CC_SOCIAL.prepare(
    `INSERT INTO parties (id,film_id,title,year,poster,theme,starts_at,runtime_sec,status,created_at,host_did,host_handle)
     VALUES (?,?,?,?,?,?,?,?,'scheduled',?,?,?)`
  ).bind(
    id,
    String(filmId),
    title || "",
    year2 ? String(year2) : null,
    poster2 || null,
    theme || null,
    startsAt,
    runtimeSec || null,
    now,
    _hostDid,
    _hostHandle
  ).run();
  let uri = null, cid = null;
  const _isUser = !!(hostSess && hostSess.access_token && hostSess.did && hostSess.did !== OWNER_DID);
  try {
    const when = new Date(startsAt);
    const whenStr = when.toUTCString().replace(/:00 GMT/, " GMT");
    // #BlueboxdParty anchor tag = the opt-in signal that re-surfaces this post in the parties rail.
    const txt = `\u{1F4FA} BLUEBOXD WATCH PARTY${theme ? " \u2014 " + theme : ""}

\u25B6 ${title}${year2 ? " (" + year2 + ")" : ""}
\u{1F557} ${whenStr}

Free + legal, public-domain. Reply here to react during the show.
Join the room \u2192 ${origin}/party/${id}

#Blueboxd #BlueboxdParty`;
    const cardImg = poster2 || null;
    const cardDesc = "Free + legal public-domain watch party \u00B7 " + whenStr + " \u00B7 Watch together on Blueboxd, react live, all on Bluesky.";
    const cardTitle = "\u{1F4FA} " + (title || "Watch Party") + (year2 ? " (" + year2 + ")" : "") + " \u2014 Blueboxd Watch Party";
    const card = { uri: origin + "/party/" + id, title: cardTitle, description: cardDesc, image: cardImg };
    if (_isUser) {
      // Post the announcement from the USER's own Bluesky account (with link-card embed).
      try {
        const rec = { $type: "app.bsky.feed.post", text: txt, facets: buildFacets(txt), createdAt: new Date().toISOString(), langs: ["en"] };
        // build external embed (upload poster as thumb under the user's repo)
        let thumb = null;
        if (cardImg) {
          try {
            const ir = await fetch(cardImg, { headers: { "user-agent": "Blueboxd/1.0" } });
            if (ir.ok) { const ct = ir.headers.get("content-type")||"image/jpeg"; const buf = await ir.arrayBuffer();
              if (buf && buf.byteLength>0 && buf.byteLength<976560) {
                const ub = await uploadBlobRetry(hostSess, ct, buf, env);
                if (ub) thumb = ub;
              }
            }
          } catch(_){}
        }
        rec.embed = { $type: "app.bsky.embed.external", external: { uri: card.uri, title: cardTitle.slice(0,300), description: cardDesc.slice(0,1000) } };
        if (thumb) rec.embed.external.thumb = thumb;
        const rr = await createRecord(hostSess, "app.bsky.feed.post", rec, env);
        const rj = (rr && rr.data) || {};
        uri = rj.uri || null; cid = rj.cid || null;
      } catch(e){ /* fall back to bot post below if user post fails */ }
    }
    if (!uri) {
      const p = await hostPostCard(env, txt, card);
      uri = p.uri || null; cid = p.cid || null;
    }
    if (uri) await env.CC_SOCIAL.prepare(`UPDATE parties SET bsky_uri=?, bsky_cid=? WHERE id=?`).bind(uri, cid, id).run();
  } catch (_) {
  }
  return { id, bskyUri: uri };
}

function escAttr(x){return String(x==null?"":x).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function partyOgHtml(origin, p) {
  const url = origin + "/party/" + p.id;
  const titleLine = (p.title || "Watch Party") + (p.year ? " (" + p.year + ")" : "");
  const when = p.startsAt ? new Date(p.startsAt) : null;
  const whenStr = when ? when.toUTCString().replace(/:00 GMT/, " GMT") : "";
  const live = p.phase === "live" ? "\u{1F534} LIVE NOW \u2014 " : "";
  const desc = live + "Free + legal public-domain watch party" + (whenStr ? " \u00B7 " + whenStr : "") +
    " \u00B7 " + (p.rsvpCount || 0) + " going. Watch together on Blueboxd, react live, all on Bluesky.";
  const img = p.poster || (origin + "/og-default.png");
  const ogTitle = "\u{1F4FA} " + titleLine + " \u2014 Blueboxd Watch Party";
  return [
    '<meta property="og:site_name" content="Blueboxd">',
    '<meta property="og:title" content="' + escAttr(ogTitle) + '">',
    '<meta property="og:description" content="' + escAttr(desc) + '">',
    '<meta property="og:image" content="' + escAttr(img) + '">',
    '<meta property="og:image:width" content="500">',
    '<meta property="og:image:height" content="750">',
    '<meta property="og:url" content="' + escAttr(url) + '">',
    '<meta property="og:image:alt" content="' + escAttr(titleLine + " poster") + '">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + escAttr(ogTitle) + '">',
    '<meta name="twitter:description" content="' + escAttr(desc) + '">',
    '<meta name="twitter:image" content="' + escAttr(img) + '">'
  ].join("\n");
}

function prettySlug(x) {
  if (!x) return "";
  let t = decodeURIComponent(String(x)).replace(/[_+\-]+/g, " ").replace(/\s+/g, " ").trim();
  // title-case, but keep short connector words lowercase (unless first)
  const small = new Set(["a","an","and","the","of","for","to","in","on","or","with","at","by","vs"]);
  return t.split(" ").map((w,i)=>{
    const lw = w.toLowerCase();
    if (i>0 && small.has(lw)) return lw;
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  }).join(" ");
}
function ogBlock({title, desc, img, url, alt}) {
  return [
    '<meta property="og:site_name" content="Blueboxd">',
    '<meta property="og:title" content="' + escAttr(title) + '">',
    '<meta property="og:description" content="' + escAttr(desc) + '">',
    '<meta property="og:image" content="' + escAttr(img) + '">',
    '<meta property="og:image:width" content="500">',
    '<meta property="og:image:height" content="750">',
    '<meta property="og:url" content="' + escAttr(url) + '">',
    '<meta property="og:image:alt" content="' + escAttr(alt || title) + '">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + escAttr(title) + '">',
    '<meta name="twitter:description" content="' + escAttr(desc) + '">',
    '<meta name="twitter:image" content="' + escAttr(img) + '">'
  ].join("\n");
}
function genreOgHtml(origin, id, label, poster, total) {
  let lbl = label && /[a-z].*[A-Z ]|[A-Z]/.test(String(label)) && !/^[a-z-]+$/.test(String(label)) ? label : prettySlug(id);
  lbl = String(lbl).replace(/^[^\p{L}\p{N}]+/u, "").trim() || prettySlug(id) || "Cinema";
  return ogBlock({
    title: "\uD83C\uDFAC " + lbl + " \u00B7 Blueboxd",
    desc: (total ? total + "+ " : "") + "free + legal " + lbl.toLowerCase() + " films you can watch right now \u2014 no account, build a film diary, all on Bluesky.",
    img: origin + "/og/genre/" + encodeURIComponent(id || "") + ".png",
    url: origin + "/genre/" + encodeURIComponent(id || ""),
    alt: lbl + " on Blueboxd"
  });
}
function personOgHtml(origin, id, name, poster, count) {
  const nm = (name && !/^[a-z-]+$/.test(String(name))) ? name : (prettySlug(id) || "This filmmaker");
  return ogBlock({
    title: "\uD83C\uDFAC " + nm + " \u00B7 Blueboxd",
    desc: (count ? count + " free " : "Free ") + "public-domain films" + (name ? " featuring " + nm : "") + " \u2014 watch now, log a rating, all on Bluesky.",
    img: origin + "/og/person/" + encodeURIComponent(id || "") + ".png",
    url: origin + "/person/" + encodeURIComponent(id || ""),
    alt: nm + " on Blueboxd"
  });
}
function diaryOgHtml(origin, poster) {
  return ogBlock({
    title: "\uD83D\uDCD3 My Film Diary \u00B7 Blueboxd",
    desc: "A public-domain film diary on Bluesky \u2014 ratings, reviews & a running log of classic cinema. Free to start your own.",
    img: origin + "/og/diary/_.png",
    url: origin + "/diary",
    alt: "Blueboxd film diary"
  });
}
function profileOgHtml(origin, handle, did, displayName, stats) {
  let nm = displayName || ("@" + String(handle||"").replace(/\.bsky\.social$/, ""));
  const films = stats && stats.films != null ? stats.films : null;
  const revs = stats && stats.reviews != null ? stats.reviews : null;
  let bits = [];
  if (films != null) bits.push(films + " film" + (films===1?"":"s") + " logged");
  if (revs) bits.push(revs + " review" + (revs===1?"":"s"));
  const desc = (bits.length ? bits.join(" \u00b7 ") + " \u2014 " : "") + "a public-domain film diary on Bluesky. See what " + nm + " is watching.";
  return ogBlock({
    title: "\uD83C\uDFAC " + nm + (/blueboxd/i.test(nm) ? "" : " \u00b7 Blueboxd"),
    desc: desc,
    img: origin + "/og/diaryrow/" + encodeURIComponent(did||"") + ".png",
    url: origin + "/u/" + encodeURIComponent(handle||""),
    alt: nm + "'s film diary on Blueboxd"
  });
}
function clubOgHtml(origin, poster) {
  return ogBlock({
    title: "\uD83C\uDFAC The Club \u00B7 Blueboxd",
    desc: "Watch classic public-domain films together \u2014 live watch parties, react in real time, all free on Bluesky. Pull up a seat.",
    img: origin + "/og/club/_.png",
    url: origin + "/club",
    alt: "Blueboxd \u2014 The Club"
  });
}
function partiesOgHtml(origin, poster, nextTitle) {
  return ogBlock({
    title: "\uD83D\uDCFA Watch Parties \u00B7 Blueboxd",
    desc: (nextTitle ? "Next up: " + nextTitle + ". " : "") + "Free + legal public-domain watch parties \u2014 RSVP, watch together, react live on Bluesky.",
    img: origin + "/og/parties/_.png",
    url: origin + "/parties",
    alt: "Blueboxd watch parties"
  });
}
function filmOgHtml(origin, id, f) {
  const url = origin + "/film/" + id;
  const titleLine = (f.title || "Classic Film") + (f.year ? " (" + f.year + ")" : "");
  const bits = [];
  if (f.director) bits.push("Dir. " + f.director);
  // runtime may already include the word "min"; normalize to avoid "67 min min"
  if (f.runtime) { const rt = String(f.runtime).trim(); bits.push(/min/i.test(rt) ? rt : rt + " min"); }
  const lead = bits.length ? bits.join(" \u00B7 ") + " \u2014 " : "";
  const synop = (f.description || "").trim();
  const desc = (lead + (synop || "Free + legal public-domain cinema. Log a rating, build your film diary, watch it free on Blueboxd \u2014 all on Bluesky.")).slice(0, 280);
  const img = f.poster || (origin + "/og-default.png");
  const ogTitle = "\u{1F3AC} " + titleLine + " \u00B7 Blueboxd";
  return [
    '<meta property="og:site_name" content="Blueboxd">',
    '<meta property="og:title" content="' + escAttr(ogTitle) + '">',
    '<meta property="og:description" content="' + escAttr(desc) + '">',
    '<meta property="og:image" content="' + escAttr(img) + '">',
    '<meta property="og:image:width" content="500">',
    '<meta property="og:image:height" content="750">',
    '<meta property="og:url" content="' + escAttr(url) + '">',
    '<meta property="og:image:alt" content="' + escAttr(titleLine + " poster") + '">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + escAttr(ogTitle) + '">',
    '<meta name="twitter:description" content="' + escAttr(desc) + '">',
    '<meta name="twitter:image" content="' + escAttr(img) + '">'
  ].join("\n");
}

// ── Aggregate watch-party stats for a user (works for owner-host AND regular joiners) ──
async function userPartyStats(env, did) {
  const isOwner = did === OWNER_DID;
  let hosted = 0, attendees = 0, reactions = 0, joined = 0, biggest = null, handle = "";
  try {
    if (isOwner) {
      // Owner hosts all parties. Hosted = all non-cancelled parties.
      const h = await env.CC_SOCIAL.prepare("SELECT COUNT(*) n FROM parties WHERE status!='cancelled'").first();
      hosted = (h && h.n) || 0;
      // Unique attendees across ALL parties (distinct DIDs in rsvps).
      const a = await env.CC_SOCIAL.prepare("SELECT COUNT(DISTINCT did) n FROM rsvps").first();
      attendees = (a && a.n) || 0;
      // Total reactions across all parties.
      const r = await env.CC_SOCIAL.prepare("SELECT COUNT(*) n FROM reactions").first();
      reactions = (r && r.n) || 0;
      // Biggest party by rsvp count.
      const b = await env.CC_SOCIAL.prepare(
        "SELECT p.title title, p.year year, COUNT(rs.did) c FROM parties p LEFT JOIN rsvps rs ON rs.party_id=p.id WHERE p.status!='cancelled' GROUP BY p.id ORDER BY c DESC LIMIT 1"
      ).first();
      if (b && b.title) biggest = { title: b.title + (b.year?` (${b.year})`:""), going: b.c||0 };
    } else {
      // Regular user: parties they joined + reactions they posted.
      const j = await env.CC_SOCIAL.prepare("SELECT COUNT(DISTINCT party_id) n FROM rsvps WHERE did=?").bind(did).first();
      joined = (j && j.n) || 0; hosted = joined; // reuse "hosted" tile slot label via card
      const r = await env.CC_SOCIAL.prepare("SELECT COUNT(*) n FROM reactions WHERE did=?").bind(did).first();
      reactions = (r && r.n) || 0;
      // "attendees" tile -> for joiners show total reactions room-mates; simpler: people they've watched alongside (distinct co-attendees)
      const c = await env.CC_SOCIAL.prepare(
        "SELECT COUNT(DISTINCT r2.did) n FROM rsvps r1 JOIN rsvps r2 ON r1.party_id=r2.party_id WHERE r1.did=? AND r2.did!=?"
      ).bind(did, did).first();
      attendees = (c && c.n) || 0;
      const hh = await env.CC_SOCIAL.prepare("SELECT handle FROM rsvps WHERE did=? AND handle IS NOT NULL LIMIT 1").bind(did).first();
      if (hh && hh.handle) handle = hh.handle;
    }
  } catch (_) {}
  return { isOwner, hosted, attendees, reactions, joined, biggest, handle };
}

async function getParty(env, id) {
  const r = await env.CC_SOCIAL.prepare(`SELECT * FROM parties WHERE id=?`).bind(id).first();
  if (!r) return null;
  const now = Date.now();
  const start = Date.parse(r.starts_at);
  const elapsed = Math.floor((now - start) / 1e3);
  let phase = "scheduled";
  if (now >= start) phase = r.runtime_sec && elapsed > r.runtime_sec + 1800 ? "ended" : "live";
  const rsvp2 = await env.CC_SOCIAL.prepare(`SELECT COUNT(*) n FROM rsvps WHERE party_id=?`).bind(id).first();
  // Resolve a poster if the party row doesn't carry one — pull from the film
  // catalog detail (+ art override) so every party renders a real card image.
  let _poster = r.poster;
  if (!_poster && r.film_id) {
    try {
      const det = await catalog("detail", { id: r.film_id, source: "archive" });
      if (det && !det.error) {
        let pos = det.poster;
        try { const ov = await env.CC_KV.get("art:" + r.film_id, "json"); if (ov && ov.poster) pos = ov.poster; } catch (_) {}
        if (pos) {
          _poster = pos;
          // backfill the row so we only resolve once
          try { await env.CC_SOCIAL.prepare(`UPDATE parties SET poster=? WHERE id=?`).bind(pos, id).run(); } catch (_) {}
        }
      }
    } catch (_) {}
  }
  let _rsvpAvatars = [];
  try {
    const av = await env.CC_SOCIAL.prepare(
      `SELECT did, handle FROM rsvps WHERE party_id=? AND did IS NOT NULL ORDER BY at DESC LIMIT 5`
    ).bind(id).all();
    const rows = (av && av.results) ? av.results.map(x => ({ did: x.did, handle: x.handle })) : [];
    try { await enrichAvatars(env, rows); } catch (_) {}
    _rsvpAvatars = rows.map(x => ({ handle: x.handle || "", avatar: x.avatar || "" }));
  } catch (_) {}
  let _hostAvatar = "";
  try {
    if (r.host_did && r.host_did.indexOf("did:") === 0) {
      const hr = [{ did: r.host_did, handle: r.host_handle || "" }];
      await enrichAvatars(env, hr);
      _hostAvatar = hr[0].avatar || "";
    }
  } catch (_) {}
  return {
    id: r.id,
    filmId: r.film_id,
    title: r.title,
    year: r.year,
    poster: _poster,
    rsvpAvatars: _rsvpAvatars,
    theme: r.theme,
    startsAt: r.starts_at,
    runtimeSec: r.runtime_sec,
    bskyUri: r.bsky_uri,
    status: r.status,
    hostDid: r.host_did || null,
    hostHandle: r.host_handle || null,
    hostAvatar: _hostAvatar,
    phase,
    elapsedSec: phase === "live" ? Math.max(0, elapsed) : 0,
    rsvpCount: rsvp2 ? rsvp2.n : 0,
    hostPos: (r.host_pos != null && r.host_pos_at && (Date.now() - r.host_pos_at) < 15000) ? r.host_pos : null,
    hostPaused: r.host_paused ? true : false,
    hostFresh: !!(r.host_pos_at && (Date.now() - r.host_pos_at) < 15000)
  };
}
async function listParties(env) {
  const rs = await env.CC_SOCIAL.prepare(
    `SELECT id,film_id,title,year,poster,theme,starts_at,runtime_sec,status,host_handle,host_did
       FROM parties WHERE status != 'cancelled'
       ORDER BY starts_at DESC LIMIT 30`
  ).all();
  const now = Date.now();
  const rows = (rs.results || []).map((r) => {
    const start = Date.parse(r.starts_at);
    const elapsed = Math.floor((now - start) / 1e3);
    let phase = "scheduled";
    if (now >= start) phase = r.runtime_sec && elapsed > r.runtime_sec + 1800 ? "ended" : "live";
    return {
      id: r.id,
      filmId: r.film_id,
      title: r.title,
      year: r.year,
      poster: r.poster,
      theme: r.theme,
      startsAt: r.starts_at,
      hostHandle: r.host_handle || null,
      hostDid: r.host_did || null,
      phase,
      rsvpCount: 0
    };
  });
  try {
    const cr = await env.CC_SOCIAL.prepare(
      `SELECT party_id, COUNT(*) n FROM rsvps GROUP BY party_id`
    ).all();
    const cmap = {};
    for (const x of (cr.results || [])) cmap[x.party_id] = x.n;
    for (const r of rows) r.rsvpCount = cmap[r.id] || 0;
  } catch (_) {}
  return rows;
}
async function rsvp(env, partyId, did, handle) {
  await env.CC_SOCIAL.prepare(
    `INSERT OR IGNORE INTO rsvps (party_id,did,handle,at) VALUES (?,?,?,?)`
  ).bind(partyId, did, handle || null, (/* @__PURE__ */ new Date()).toISOString()).run();
  const r = await env.CC_SOCIAL.prepare(`SELECT COUNT(*) n FROM rsvps WHERE party_id=?`).bind(partyId).first();
  return r ? r.n : 0;
}
async function isRsvpedOrHost(env, partyId, did) {
  if (!did) return false;
  if (did === OWNER_DID) return true;
  try {
    const r = await env.CC_SOCIAL.prepare(
      `SELECT 1 FROM rsvps WHERE party_id=? AND did=? LIMIT 1`
    ).bind(partyId, did).first();
    return !!r;
  } catch (_) { return false; }
}
async function addReaction(env, partyId, { did, handle, text, emoji }) {
  const at = (/* @__PURE__ */ new Date()).toISOString();
  const key = `room:${partyId}:${did}:${Date.now()}`;
  await env.CC_SOCIAL.prepare(
    `INSERT OR IGNORE INTO reactions (party_id,did,handle,text,emoji,source,src_uri,at)
     VALUES (?,?,?,?,?,'room',?,?)`
  ).bind(partyId, did, handle || null, (text || "").slice(0, 300), emoji || null, key, at).run();
}
async function getWall(env, partyId, sinceId = 0) {
  const rs = await env.CC_SOCIAL.prepare(
    `SELECT id,handle,text,emoji,source,at FROM reactions
      WHERE party_id=? AND id>? ORDER BY id DESC LIMIT 80`
  ).bind(partyId, Number(sinceId) || 0).all();
  return (rs.results || []).map((r) => ({
    id: r.id,
    handle: r.handle,
    text: r.text,
    emoji: r.emoji,
    source: r.source,
    at: r.at
  }));
}
async function pollLiveParties(env) {
  const now = Date.now();
  const rs = await env.CC_SOCIAL.prepare(
    `SELECT id,bsky_uri,starts_at,runtime_sec FROM parties
      WHERE status!='cancelled' AND bsky_uri IS NOT NULL`
  ).all();
  const live = (rs.results || []).filter((r) => {
    const start = Date.parse(r.starts_at);
    if (now < start - 36e5) return false;
    const elapsed = (now - start) / 1e3;
    return !(r.runtime_sec && elapsed > r.runtime_sec + 1800);
  });
  if (!live.length) return { polled: 0, added: 0 };
  let added = 0;
  for (const party of live) {
    try {
      added += await pollPartyReplies(env, party);
    } catch (_) {
    }
  }
  return { polled: live.length, added };
}
async function partyLifecycle(env) {
  // Showtime reminders (~15m before) + LIVE auto-announce. Each fires once.
  const now = Date.now();
  let rs;
  try {
    rs = await env.CC_SOCIAL.prepare(
      `SELECT id,title,year,poster,theme,bsky_uri,starts_at,runtime_sec,host_handle,reminder_sent,live_sent
         FROM parties WHERE status!='cancelled' AND bsky_uri IS NOT NULL`
    ).all();
  } catch(_) { return { reminders:0, lives:0 }; }
  let reminders = 0, lives = 0;
  for (const p of (rs.results || [])) {
    const start = Date.parse(p.starts_at);
    if (isNaN(start)) continue;
    const minsToStart = (start - now) / 60000;
    const elapsed = (now - start) / 1000;
    const ended = p.runtime_sec && elapsed > p.runtime_sec + 1800;
    if (ended) continue;
    // parse uri -> cid via getPostThread (need cid for reply/quote)
    const tagLine = "#Blueboxd #BlueboxdParty";
    // ---- REMINDER: 0..18 min before start, once ----
    if (!p.reminder_sent && minsToStart <= 18 && minsToStart > 0) {
      try {
        const tr = await fetch(`${APPVIEW}/xrpc/app.bsky.feed.getPostThread?uri=${encodeURIComponent(p.bsky_uri)}&depth=0`);
        const td = tr.ok ? await tr.json() : null;
        const cid = td && td.thread && td.thread.post && td.thread.post.cid;
        if (cid) {
          const rcount = await env.CC_SOCIAL.prepare(`SELECT COUNT(*) n FROM rsvps WHERE party_id=?`).bind(p.id).first().catch(()=>null);
          const going = rcount ? rcount.n : 0;
          const mins = Math.max(1, Math.round(minsToStart));
          const txt = `\u{1F514} Doors opening \u2014 ${p.title}${p.year?` (${p.year})`:""} starts in ~${mins} min.\n${going>0?`\u{1F465} ${going} going. `:""}Free + legal public-domain cinema, watched together.\nJoin \u2192 https://blueboxd.com/party/${p.id}\n\n${tagLine}`;
          await hostReply(env, p.bsky_uri, cid, txt);
          await env.CC_SOCIAL.prepare(`UPDATE parties SET reminder_sent=? WHERE id=?`).bind(now, p.id).run();
          reminders++;
        }
      } catch(_) {}
    }
    // ---- LIVE: 0..10 min after start, once ----
    if (!p.live_sent && minsToStart <= 0 && elapsed < 600) {
      try {
        const origin = "https://blueboxd.com";
        const rcount = await env.CC_SOCIAL.prepare(`SELECT COUNT(*) n FROM rsvps WHERE party_id=?`).bind(p.id).first().catch(()=>null);
        const going = rcount ? rcount.n : 0;
        const cardImg = origin + "/og/party/" + encodeURIComponent(p.id) + ".png?v=" + Date.now().toString(36);
        const txt = `\u{1F534} LIVE NOW \u2014 ${p.title}${p.year?` (${p.year})`:""}${p.theme?` \u00B7 ${p.theme}`:""}.\n${going>0?`\u{1F465} ${going} in the room. `:""}Press play with us and react live \u{1F37F}\n${origin}/party/${p.id}\n\n${tagLine}`;
        const card = { uri: origin + "/party/" + p.id, title: (p.title||"Watch Party") + (p.year?` (${p.year})`:""), description: "\u{1F534} LIVE now on Blueboxd \u2014 watch together, react live.", image: cardImg };
        await hostPostCard(env, txt, card);
        await env.CC_SOCIAL.prepare(`UPDATE parties SET live_sent=? WHERE id=?`).bind(now, p.id).run();
        lives++;
      } catch(_) {}
    }
  }
  return { reminders, lives };
}
async function pollPartyReplies(env, party) {
  const u = `${APPVIEW}/xrpc/app.bsky.feed.getPostThread?uri=${encodeURIComponent(party.bsky_uri)}&depth=1`;
  const r = await fetch(u);
  if (!r.ok) return 0;
  const d = await r.json();
  const replies = d.thread && d.thread.replies || [];
  let added = 0;
  for (const rep of replies) {
    const p = rep.post;
    if (!p || !p.uri) continue;
    const text = p.record && p.record.text || "";
    const handle = p.author && p.author.handle;
    const at = p.record && p.record.createdAt || (/* @__PURE__ */ new Date()).toISOString();
    const res = await env.CC_SOCIAL.prepare(
      `INSERT OR IGNORE INTO reactions (party_id,did,handle,text,emoji,source,src_uri,at)
       VALUES (?,?,?,?,?,'bsky',?,?)`
    ).bind(party.id, p.author && p.author.did, handle, text.slice(0, 300), null, p.uri, at).run();
    if (res.meta && res.meta.changes) added++;
  }
  return added;
}

// shell.js
var SHELL_HTML = (origin) => `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Blueboxd — free public-domain cinema, on Bluesky</title>
<meta name="description" content="Letterboxd for public-domain film — log in with Bluesky, build a film diary, watch classics free & legal.">
<!--OGSTART--><meta property="og:title" content="Blueboxd">
<meta property="og:description" content="Free public-domain cinema. Log in with Bluesky, keep a film diary, share what you watch.">
<meta property="og:image" content="${origin}/og-default.png"><!--OGEND-->
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#f5f7fb">
<style>
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
/* LIGHT (default) */
:root{--bg:#f5f7fb;--panel:#ffffff;--panel2:#eaf0f9;--line:#d6dfec;--txt:#16203a;--mut:#5c6a85;--acc:#1f4fd6;--acc2:#e08a1e;--good:#1a7f4b;--well:#e7eefa;--heroA:#e9f0ff;--heroB:#f3f6fc;--shadow:0 2px 14px rgba(20,40,90,.08)}
/* DARK (toggle) */
:root[data-theme="dark"]{--bg:#080b14;--panel:#111726;--panel2:#182032;--line:#243049;--txt:#e8edf6;--mut:#94a0b8;--acc:#5b8cff;--acc2:#ffb454;--good:#7ee787;--well:#141c2e;--heroA:#16203a;--heroB:#0c1120;--shadow:0 8px 30px rgba(0,0,0,.5)}
html,body{margin:0;background:var(--bg);color:var(--txt);font:16px/1.45 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,system-ui,sans-serif}
body{padding-bottom:env(safe-area-inset-bottom)}
a{color:var(--acc2);text-decoration:none}
img{display:block}
.wrap{max-width:1100px;margin:0 auto;padding:0 14px}
header{position:sticky;top:0;z-index:30;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.hd{display:flex;align-items:center;gap:10px;height:56px}
.logo{font-weight:800;font-size:19px;letter-spacing:.3px;display:flex;align-items:center;gap:7px}
.logo span{color:var(--acc)}
.grow{flex:1}
.search{flex:1;max-width:340px;display:flex;align-items:center;gap:8px;background:var(--panel);border:1px solid var(--line);border-radius:11px;padding:7px 11px}
.search input{flex:1;background:none;border:0;color:var(--txt);font-size:15px;outline:none}
.btn{background:var(--panel2);border:1px solid var(--line);color:var(--txt);border-radius:10px;padding:8px 13px;font-size:14px;font-weight:600;cursor:pointer}
.btn.acc{background:linear-gradient(135deg,#ffb454,#ff8a4b);border:0;color:#1a1208}
.btn:active{transform:scale(.97)}
.av{width:30px;height:30px;border-radius:50%;background:var(--panel2);border:1px solid var(--line);display:grid;place-items:center;font-size:13px;font-weight:700;color:var(--acc)}
.hero{margin:16px 0 6px;padding:20px;border-radius:18px;background:radial-gradient(120% 140% at 0% 0%,var(--heroA),var(--heroB));border:1px solid var(--line);position:relative;overflow:hidden}
.hero h1{margin:0 0 6px;font-size:23px;line-height:1.2}
.hero p{margin:0;color:var(--mut);font-size:14px;max-width:560px}
.trustnote{font-size:12.5px;line-height:1.5;color:#9fd3ff;background:rgba(64,150,255,.08);border:1px solid rgba(64,150,255,.22);border-radius:10px;padding:9px 11px;margin:10px 0 12px}
.trustnote b{color:#cfe6ff}
.rail{margin:22px 0}
/* ===== REDESIGNED HOME ===== */
.homewrap{max-width:1080px;margin:0 auto;text-align:center}.homewrap .hero{text-align:center}.homewrap .hero h1{text-align:center}.homewrap .hero p{margin-left:auto;margin-right:auto;text-align:center;max-width:620px}.homewrap .hero{display:flex;flex-direction:column;align-items:center}.homewrap .hero .btn{margin-left:auto;margin-right:auto}.homewrap .rail>h2{justify-content:center;text-align:center}.homewrap .people{justify-content:center;flex-wrap:wrap}.homewrap .row,.homewrap .cardrow{justify-content:center}.homewrap .rail>.scroller{justify-content:center}
.homewrap .secttl{text-align:center;margin:30px 0 4px;font-size:20px}
.homewrap .secsub{text-align:center;color:var(--mut);font-size:13.5px;margin:0 auto 14px;max-width:620px}
/* 3 horizontal rows */
.homerow{margin:24px 0;text-align:left}
.rowhd{display:flex;align-items:center;justify-content:space-between;margin:0 2px 12px}
.rowttl{font-weight:800;font-size:17px}
.minilink{color:var(--acc);font-size:12.5px;font-weight:700;cursor:pointer;white-space:nowrap}
.minilink:hover{text-decoration:underline}
.rowscroller{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px;-webkit-overflow-scrolling:touch}
.rowscroller.centered{justify-content:safe center}
.rowscroller>.card{flex:0 0 150px;width:150px;scroll-snap-align:start;cursor:pointer}
.rowscroller>.card .pw{width:100%;aspect-ratio:2/3;border-radius:12px;overflow:hidden}
.rowscroller>.card .t{font-size:13px;font-weight:600;margin-top:6px;text-align:center}
.rowscroller>.card .y{font-size:11.5px;color:var(--mut);text-align:center}
/* vertical poster-shaped FACE card (round portrait on a card) */
.facecard .faceframe{display:grid;place-items:center;
  background:radial-gradient(120% 120% at 50% 18%,#1b2330,#0d1117);
  border:1px solid var(--line)}
.facering{width:78%;aspect-ratio:1/1;border-radius:50%;overflow:hidden;position:relative;
  background:#fff;box-shadow:0 6px 18px rgba(0,0,0,.45),0 0 0 4px rgba(255,255,255,.06);
  display:grid;place-items:center}
.facering img{width:100%;height:100%;object-fit:cover;object-position:center 22%;transform:scale(1.08);transform-origin:center 22%;opacity:0;transition:opacity .25s}
.facering img.on{opacity:1}
.facering.mono{background:linear-gradient(160deg,#dfe7f5,#b9c6e6);color:#1c3a73;font-weight:800;font-size:30px}
/* genre grid */
.gridsec{margin:8px 0 4px}
.genregrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:6px auto 0;max-width:760px}
.genrebtn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;
  background:linear-gradient(160deg,var(--panel),var(--panel2));border:1px solid var(--line);
  border-radius:14px;padding:18px 10px;cursor:pointer;transition:transform .12s,border-color .12s,box-shadow .12s;color:var(--fg)}
.genrebtn:hover{transform:translateY(-2px);border-color:var(--acc);box-shadow:0 6px 18px rgba(28,100,242,.18)}
.genrebtn .gicon{font-size:26px;line-height:1;color:var(--acc)}.genrebtn .gicon svg{width:30px;height:30px;display:block;margin:0 auto}
.genrebtn .glabel{font-weight:800;font-size:14px}
.genrebtn .gcount{font-size:11px;color:var(--mut);font-weight:700}
/* parties + picks centered grids */
.partysec,.picksec{margin:30px 0 6px}
.partygrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:4px 0}
.pickgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin:4px 0}
.partygrid .card,.pickgrid .card{width:100%;cursor:pointer}
.partygrid .card .pw,.pickgrid .card .pw{width:100%;aspect-ratio:2/3;border-radius:10px;overflow:hidden}
.partygrid .discard{height:100%}
/* genre page header band */
.genrehd{display:flex;align-items:center;gap:16px;background:radial-gradient(120% 160% at 0% 0%,var(--heroA),var(--heroB));
  border:1px solid var(--line);border-radius:18px;padding:22px 24px;margin:16px 0 18px}
.genrehd .ghdicon{font-size:46px;line-height:1;color:var(--acc)}.genrehd .ghdicon svg{width:46px;height:46px;display:block}
.genrehd h1{margin:0;font-size:28px}
.genrehd .ghdsub{margin:4px 0 0;color:var(--mut);font-size:14px}
.genrehd .ghdcount{margin-left:auto;font-size:13px;color:var(--acc);font-weight:800;white-space:nowrap}
@media(max-width:860px){
  .genregrid{max-width:520px}
  .partygrid{grid-template-columns:repeat(2,1fr)}
  .pickgrid{grid-template-columns:repeat(3,1fr)}
}
@media(max-width:520px){
  .rowscroller>.card{flex:0 0 120px;width:120px}
  .pickgrid{grid-template-columns:repeat(2,1fr)}
  .genregrid{grid-template-columns:repeat(3,1fr);gap:8px}
  .genrebtn{padding:13px 5px}
  .genrebtn .gicon{font-size:21px}
  .genrebtn .gicon svg{width:25px;height:25px}
  .genrebtn .glabel{font-size:12px}
}
.rail.collapsible>.scroller{display:none}
.rail.collapsible.open>.scroller{display:flex}
.railtoggle{cursor:pointer;user-select:none}
.railtoggle .chev{display:inline-block;transition:transform .15s ease;color:var(--mut);font-size:12px}
.rail.collapsible.open .railtoggle .chev{transform:rotate(90deg)}
.rail h2{font-size:15px;margin:0 0 10px;display:flex;align-items:center;gap:8px;color:#dfe3e8}
.rail .count{color:var(--mut);font-weight:500;font-size:12px}
.scroller{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px;-webkit-overflow-scrolling:touch}
.scroller::-webkit-scrollbar{height:0}
.card{flex:0 0 auto;width:124px;scroll-snap-align:start;cursor:pointer}
.card .pw{width:124px;height:182px;border-radius:12px;overflow:hidden;background:var(--well);border:1px solid var(--line);position:relative;box-shadow:var(--shadow)}
.card img{width:100%;height:100%;object-fit:cover}
.pw img{opacity:0;transition:opacity .35s ease}
.pw img.on{opacity:1}
.pc img{opacity:0;transition:opacity .35s ease}
.pc img.on{opacity:1}
.card .ph{width:100%;height:100%;display:grid;place-items:center;color:var(--mut);font-size:28px}
.card .t{font-size:12.5px;margin-top:6px;line-height:1.25;height:32px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#d6dade}.morecard{opacity:.92}.morecard:active{transform:scale(.97)}.morecard .pw{transition:border-color .2s}.morecard:hover .pw{border-color:var(--acc)}
.card .y{font-size:11px;color:var(--mut)}
.people{display:flex;gap:14px;overflow-x:auto;padding-bottom:6px}
.person{flex:0 0 auto;width:78px;text-align:center;cursor:pointer}
.person .pc{width:72px;height:72px;border-radius:50%;background:var(--well);border:1px solid var(--line);display:grid;place-items:center;font-size:22px;font-weight:800;color:var(--acc);margin:0 auto 6px;overflow:hidden;box-shadow:var(--shadow)}
.person .pc img{width:100%;height:100%;object-fit:cover}
.person .pn{font-size:11.5px;color:var(--mut);line-height:1.2}
/* film page */
.film{padding:18px 0 60px}
.film .top{display:flex;gap:16px;flex-wrap:wrap}
.film .poster{flex:0 0 auto;width:150px;height:222px;border-radius:14px;overflow:hidden;border:1px solid var(--line);background:var(--panel2)}
.film .poster img{width:100%;height:100%;object-fit:cover}
.film .meta{flex:1;min-width:220px}
.film h1{margin:0 0 4px;font-size:24px;line-height:1.15}
.film .sub{color:var(--mut);font-size:13px;margin-bottom:12px}
.film .desc{color:#c6cbd1;font-size:14px;margin:12px 0}
.actions{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0}
.player{margin:18px 0;border-radius:14px;overflow:hidden;border:1px solid var(--line);background:#000}
.player video{width:100%;display:block;max-height:70vh;background:#000}
.stars{display:flex;gap:4px;font-size:26px;cursor:pointer}
.star{color:#3a424c}.star.on{color:var(--acc)}
textarea{width:100%;background:var(--panel);border:1px solid var(--line);border-radius:10px;color:var(--txt);padding:10px;font:14px system-ui;resize:vertical;min-height:70px}
.chip{display:inline-flex;align-items:center;gap:6px;background:var(--panel2);border:1px solid var(--line);border-radius:999px;padding:6px 12px;font-size:13px;cursor:pointer}
.chip.on{background:var(--acc);color:#1a1208;border-color:transparent;font-weight:700}
.addallrow{margin:0 0 14px}
.artmodal{position:fixed;inset:0;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;z-index:9999;padding:14px}
.artbox{background:var(--bg,#0d1117);border:1px solid rgba(127,127,127,.3);border-radius:16px;max-width:760px;width:100%;max-height:88vh;display:flex;flex-direction:column;overflow:hidden}
.arthd{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(127,127,127,.2);font-size:16px}
.artx{cursor:pointer;font-size:20px;opacity:.7;padding:0 4px}.artx:hover{opacity:1}
.arttabs{display:flex;gap:8px;padding:10px 16px 0}
.arttab{background:rgba(127,127,127,.12);border:0;color:inherit;padding:7px 16px;border-radius:999px;cursor:pointer;font-size:13px}
.arttab.on{background:#2f81f7;color:#fff;font-weight:700}
.artbody{overflow-y:auto;padding:14px 16px;flex:1}
.artgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:10px}
.artgrid.wide{grid-template-columns:repeat(auto-fill,minmax(180px,1fr))}
.artcell{cursor:pointer;border-radius:8px;overflow:hidden;border:2px solid transparent;transition:border-color .12s,transform .12s}
.artcell:hover{border-color:#2f81f7;transform:scale(1.03)}
.artcell.sel{border-color:#3fb950}
.artcell img{width:100%;display:block;aspect-ratio:2/3;object-fit:cover}
.artgrid.wide .artcell img{aspect-ratio:16/9}
.artfoot{padding:10px 16px;border-top:1px solid rgba(127,127,127,.2);text-align:right}
.diaryfilters{display:flex;gap:8px;flex-wrap:wrap;margin:4px 0 18px}
.dfilter{background:rgba(127,127,127,.12);border:0;color:inherit;padding:7px 14px;border-radius:999px;cursor:pointer;font-size:13px}
.dfilter.on{background:#2f81f7;color:#fff;font-weight:700}
.dstars{color:#f5c518;font-size:12px;margin-top:3px;text-align:center}
.dcard-rm{position:absolute;top:5px;right:5px;width:24px;height:24px;border-radius:50%;border:0;background:rgba(20,20,24,.82);color:#fff;font-size:13px;line-height:24px;text-align:center;cursor:pointer;opacity:0;transition:opacity .15s,background .15s;z-index:3;padding:0}
.card:hover .dcard-rm,.grid>div:hover .dcard-rm{opacity:1}
.dcard-rm:hover{background:#e53935}
@media (hover:none){.dcard-rm{opacity:.9}}
.diary-empty{text-align:center;padding:38px 16px 30px;max-width:440px;margin:6px auto}
.diary-empty .de-emoji{font-size:40px;margin-bottom:8px}
.diary-empty h3{margin:0 0 6px;font-size:18px}
.diary-empty p{margin:0 auto;font-size:14px;line-height:1.5}
.dcard-badge{position:absolute;top:5px;left:5px;min-width:22px;height:22px;padding:0 6px;border-radius:999px;font-size:12px;line-height:22px;text-align:center;z-index:2;background:rgba(20,20,24,.82);color:#fff;font-weight:600}
.dcard-badge.badge-watched{background:rgba(34,160,90,.92)}
.dcard-badge.badge-lib{background:rgba(60,110,220,.92)}
.dcard-badge.badge-want{background:rgba(150,120,30,.92)}
.diarysort{display:flex;align-items:center;gap:6px;margin:0 0 16px}
.dsort{background:rgba(127,127,127,.12);border:1px solid rgba(127,127,127,.2);color:inherit;padding:6px 10px;border-radius:8px;font-size:13px;cursor:pointer}
.dsort:focus{outline:2px solid rgba(80,130,240,.5)}
.dsearch{background:rgba(127,127,127,.12);border:1px solid rgba(127,127,127,.2);color:inherit;padding:6px 12px;border-radius:8px;font-size:13px;min-width:170px;flex:1 1 170px;max-width:260px}
.dsearch:focus{outline:2px solid rgba(80,130,240,.5)}
.diarysort{flex-wrap:wrap;gap:8px}
.dstars-rate{cursor:pointer;display:flex;justify-content:center;gap:1px;line-height:1}
.dstars-rate .rstar{color:rgba(127,127,127,.32);font-size:13px;transition:color .08s}
.dstars-rate .rstar.on{color:#f5c518}
.dstars-rate.unrated .rstar{color:rgba(127,127,127,.28)}
.dstars-rate:hover .rstar{filter:brightness(1.05)}


.statcards{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:6px 0 8px}
@media(min-width:560px){.statcards{grid-template-columns:repeat(4,1fr)}}@media(max-width:640px){.wrap{padding:0 11px}header .hd{height:auto;min-height:52px;flex-wrap:wrap;gap:8px;padding-top:8px;padding-bottom:8px}.logo{font-size:17px;order:1}.grow{order:2}#authslot{order:3;display:flex;align-items:center;gap:6px;flex-wrap:nowrap}.search{order:4;flex:1 0 100%;max-width:none;margin-top:2px}#authslot .tab{padding:7px 9px;font-size:12px;margin-right:0!important}.themetog{height:32px;padding:0 9px;font-size:12px;margin-right:0!important}.btn{padding:7px 11px;font-size:13px}.profbtn{padding:3px 4px;font-size:12px}.profbtn span:not(.ini){display:none}.menu{top:42px}.hero{margin:12px 0 4px;padding:16px;border-radius:15px}.hero h1{font-size:20px}.hero p{font-size:13.5px}.card,.card .pw{width:112px}.card .pw{height:166px}.card .t{height:30px;font-size:12px}.person,.person .pc{width:64px}.person .pc{height:64px}.featured{padding:14px!important}}
.statcard{background:rgba(127,127,127,.08);border:1px solid rgba(127,127,127,.18);border-radius:14px;padding:14px 10px;text-align:center}
.sc-ic{font-size:20px}.sc-n{font-size:26px;font-weight:800;line-height:1.1;margin-top:2px}.sc-l{font-size:12px;opacity:.7}
.bars{display:flex;flex-direction:column;gap:8px;margin:4px 0 10px}
.barrow{display:flex;align-items:center;gap:10px}
.barlbl{flex:0 0 56px;font-size:13px;opacity:.85;text-align:right}
.bartrack{flex:1;height:14px;background:rgba(127,127,127,.15);border-radius:8px;overflow:hidden}
.barfill{height:100%;background:linear-gradient(90deg,#2f81f7,#79c0ff);border-radius:8px;min-width:3px}
.barn{flex:0 0 28px;font-size:13px;font-weight:700}
.barn{flex:0 0 auto;min-width:34px}
.barpct{font-weight:500;opacity:.6;font-size:11px}
.barfill{transition:width .8s cubic-bezier(.22,.61,.36,1)}
.barrow-peak .barfill{background:linear-gradient(90deg,#e0a92e,#f5c518)}
.barrow-peak .barlbl{font-weight:800}
/* hero band */
.stats-hero{display:flex;align-items:center;justify-content:space-between;gap:6px;background:linear-gradient(135deg,rgba(47,129,247,.10),rgba(245,197,24,.08));border:1px solid rgba(127,127,127,.16);border-radius:16px;padding:16px 14px;margin:6px 0 14px;flex-wrap:wrap}
.sh-item{flex:1 1 0;min-width:62px;text-align:center}
.sh-num{font-size:24px;font-weight:800;line-height:1.1}
.sh-star{color:#f5c518;font-size:18px}
.sh-lbl{font-size:11px;opacity:.7;margin-top:2px}
.sh-sep{width:1px;align-self:stretch;background:rgba(127,127,127,.2);margin:2px 0}
@media(max-width:520px){.sh-sep{display:none}.sh-item{flex:1 1 44%}.stats-hero{gap:10px}}
/* stat tiles */
.statcard.tappable{cursor:pointer;transition:transform .12s,border-color .12s,background .12s}
.statcard.tappable:hover{transform:translateY(-2px);border-color:rgba(47,129,247,.45);background:rgba(47,129,247,.07)}
.tile-watched .sc-n{color:#22a05a}.tile-want .sc-n{color:#c79b1e}.tile-lib .sc-n{color:#3c6edc}.tile-rev .sc-n{color:#a06bd8}.tile-avg .sc-n{color:#f5c518}
/* taste profile */
.taste{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin:4px 0 10px}
.taste-card{background:rgba(127,127,127,.07);border:1px solid rgba(127,127,127,.16);border-radius:14px;padding:13px 14px}
.tc-k{font-size:11px;text-transform:uppercase;letter-spacing:.04em;opacity:.6;margin-bottom:4px}
.tc-v{font-size:22px;font-weight:800;line-height:1.15}
.tc-vsm{font-size:15px}
.tc-s{font-size:12px;opacity:.7;margin-top:3px}
.tc-toprow{display:flex;gap:10px;align-items:center}
.tc-poster{width:46px;height:68px;object-fit:cover;border-radius:7px;flex:0 0 auto;background:rgba(127,127,127,.15)}
.tc-poster.ph{display:flex;align-items:center;justify-content:center;font-size:20px}
.tc-stars{color:#f5c518;font-size:13px;margin-top:3px}
.tc-bar{height:7px;border-radius:6px;background:rgba(127,127,127,.18);overflow:hidden;margin:7px 0 2px}
.tc-barfill{height:100%;background:linear-gradient(90deg,#22a05a,#5ed98c);border-radius:6px;transition:width .8s cubic-bezier(.22,.61,.36,1)}
.addallrow .btn{font-size:14px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:14px}
.modal{position:fixed;inset:0;z-index:50;background:rgba(0,0,0,.6);display:grid;place-items:center;padding:18px}
.sheet{background:var(--panel);border:1px solid var(--line);border-radius:18px;max-width:420px;width:100%;padding:22px}
.sheet h3{margin:0 0 6px}
.sheet p{color:var(--mut);font-size:14px;margin:0 0 14px}
.inp{width:100%;background:var(--panel2);border:1px solid var(--line);border-radius:11px;color:var(--txt);padding:12px;font-size:15px;outline:none;margin-bottom:12px}
.muted{color:var(--mut)}
.lb-list{display:flex;flex-direction:column;gap:8px;margin-top:12px}
.lb-row{display:flex;align-items:center;gap:12px;background:var(--panel2);border:1px solid var(--line);border-radius:12px;padding:10px 14px}
.lb-row.lb-top{border-color:#f5c518;box-shadow:0 0 0 1px rgba(245,197,24,.25)}
.lb-rank{flex:0 0 auto;width:44px;text-align:center;font-weight:800;font-size:20px;color:var(--mut)}
.lb-row.lb-top .lb-rank{color:#f5c518}
.lb-mid{flex:1 1 auto;min-width:0}
.lb-handle{display:block;font-weight:700;color:var(--txt);text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lb-handle:hover{text-decoration:underline}
.lb-sub{font-size:12.5px;color:var(--mut);margin-top:2px}
.lb-score{flex:0 0 auto;font-weight:800;font-size:20px;color:var(--acc)}
.lb-row{text-decoration:none;color:inherit;transition:transform .08s ease,box-shadow .12s ease}
.lb-row:hover{transform:translateY(-1px);box-shadow:0 4px 14px rgba(0,0,0,.12)}
.lb-av{flex:0 0 auto;width:40px;height:40px;border-radius:50%;overflow:hidden;background:var(--panel2);border:1px solid var(--line);display:flex;align-items:center;justify-content:center}
.lb-av img{width:100%;height:100%;object-fit:cover;display:block}
.lb-av-mono{font-weight:800;font-size:17px;color:#fff;background:linear-gradient(135deg,#5a8dff,#9b6bff)}
.lb-hwrap{display:flex;align-items:center;gap:7px;min-width:0}
.lb-hwrap .lb-handle{display:inline-block}
.lb-you{flex:0 0 auto;font-size:10.5px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:#fff;background:var(--acc);border-radius:999px;padding:1px 7px}
.lb-row.lb-me{border-color:var(--acc);box-shadow:0 0 0 1px var(--acc) inset}
.lb-row.lb-me.lb-top{box-shadow:0 0 0 1px var(--acc) inset,0 0 0 1px rgba(245,197,24,.25)}
.lb-selfsep{text-align:center;font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--mut);margin:14px 0 8px}
.lb-row.lb-self{background:var(--panel)}
.lb-score-btn{cursor:pointer}
.lb-score-btn:hover{text-decoration:underline}
.lb-modal-back{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px}
.lb-modal{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:20px;max-width:380px;width:100%;box-shadow:0 12px 40px rgba(0,0,0,.35)}
.lb-modal-h{font-weight:800;font-size:16px;margin-bottom:14px;color:var(--txt)}
.lb-modal-row{display:flex;justify-content:space-between;gap:12px;font-size:13.5px;padding:7px 0;border-bottom:1px solid var(--line);color:var(--txt)}
.lb-modal-calc{color:var(--mut);font-variant-numeric:tabular-nums}
.lb-modal-tot{border-bottom:none;font-weight:800;font-size:15px;padding-top:11px;color:var(--acc)}
.lb-tfs{display:flex;gap:6px;margin:10px 0 14px}
.lb-tf{font-size:13px;font-weight:600;padding:6px 13px;border-radius:999px;border:1px solid var(--line);background:var(--panel2);color:var(--mut);cursor:pointer;transition:all .1s ease}
.lb-tf:hover{color:var(--txt);border-color:var(--mut)}
.lb-tf-on{background:var(--acc);color:#fff;border-color:var(--acc)}
.lb-rank{display:flex;flex-direction:column;align-items:center;gap:1px}
.lb-rank-n{font-weight:800;font-size:20px;color:var(--mut);line-height:1}
.lb-row.lb-top .lb-rank-n{color:#f5c518}
.lb-delta{font-size:10.5px;font-weight:800;line-height:1}
.lb-up{color:#22c55e}
.lb-down{color:#ef4444}
.lb-flat{color:var(--mut);opacity:.6}
.lb-cats{display:flex;gap:6px;margin:2px 0 14px;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:2px}
.lb-cat{flex:0 0 auto;font-size:12.5px;font-weight:600;padding:6px 12px;border-radius:999px;border:1px solid var(--line);background:var(--panel2);color:var(--mut);cursor:pointer;white-space:nowrap;transition:all .1s ease}
.lb-cat:hover{color:var(--txt);border-color:var(--mut)}
.lb-cat-on{background:var(--txt);color:var(--bg);border-color:var(--txt)}
.lb-invite{margin-top:16px;padding:14px 16px;border:1px dashed var(--line);border-radius:14px;background:var(--panel2);text-align:center}
.lb-invite p{margin:0 0 10px;color:var(--mut);font-size:13.5px}
.toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#12331f;border:1px solid #1f5c34;color:var(--good);padding:11px 18px;border-radius:12px;font-size:14px;z-index:60;box-shadow:0 8px 30px rgba(0,0,0,.5)}
.tabbar{display:flex;gap:6px;margin:6px 0 0}
.tab{padding:8px 12px;border-radius:10px;font-size:13px;font-weight:600;background:var(--panel2);border:1px solid var(--line);color:var(--txt);cursor:pointer;display:inline-flex;align-items:center;gap:5px;transition:background .12s,border-color .12s}.tab:hover{border-color:var(--acc)}.tab:active{transform:scale(.95)}
.tab.on{background:var(--panel2);color:var(--txt)}
.tab.feat{background:linear-gradient(135deg,var(--acc),var(--acc2));border-color:transparent;color:#fff;box-shadow:0 2px 10px rgba(91,140,255,.28)}.tab.feat:hover{filter:brightness(1.06);border-color:transparent}.phero{position:relative;border-radius:18px;overflow:hidden;margin:6px 0 18px;min-height:200px;border:1px solid var(--line);box-shadow:var(--shadow)}.phero .bg{position:absolute;inset:0;background-size:cover;background-position:center;filter:blur(18px) saturate(1.15) brightness(.62);transform:scale(1.15)}.phero .scrim{position:absolute;inset:0;background:linear-gradient(105deg,rgba(8,11,20,.86) 0%,rgba(8,11,20,.62) 48%,rgba(8,11,20,.30) 100%)}.phero .in{position:relative;display:flex;gap:16px;padding:18px;align-items:center}.phero .pp{flex:0 0 96px;width:96px;height:142px;border-radius:11px;object-fit:cover;box-shadow:0 6px 22px rgba(0,0,0,.45)}.phero .ppph{flex:0 0 96px;width:96px;height:142px;border-radius:11px;display:grid;place-items:center;background:rgba(255,255,255,.08);font-size:34px}.phero .meta{flex:1;color:#fff;min-width:0}.phero .live-pill,.phero .soon-pill,.phero .when-pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:800;letter-spacing:.3px;padding:4px 10px;border-radius:999px;text-transform:uppercase}.phero .live-pill{background:#ff3b3b;color:#fff;animation:ppulse 1.6s ease-in-out infinite}.phero .soon-pill{background:linear-gradient(135deg,var(--acc),var(--acc2));color:#fff}.phero .when-pill{background:rgba(255,255,255,.16);color:#fff}@keyframes ppulse{0%,100%{box-shadow:0 0 0 0 rgba(255,59,59,.55)}50%{box-shadow:0 0 0 9px rgba(255,59,59,0)}}.phero h1{color:#fff;font-size:22px;margin:8px 0 2px;line-height:1.15}.phero .theme{color:rgba(255,255,255,.78);font-size:13px;margin:0 0 6px}.phero .cd{font-variant-numeric:tabular-nums;font-weight:800;font-size:15px;color:#fff;margin:2px 0 8px}.phero .cd b{color:var(--acc2)}.phero .going{display:flex;align-items:center;gap:8px;margin:8px 0 12px}.phero .avs{display:flex}.phero .avs .av{width:28px;height:28px;border-radius:50%;border:2px solid rgba(8,11,20,.9);margin-left:-9px;background:#2a3550 center/cover no-repeat;display:grid;place-items:center;font-size:11px;font-weight:700;color:#dfe7f5}.phero .avs .av:first-child{margin-left:0}.phero .going .lbl{color:rgba(255,255,255,.85);font-size:13px;font-weight:600}.phero .cta{display:flex;flex-wrap:wrap;gap:9px}.phero .host{color:rgba(255,255,255,.72);font-size:12px;margin-top:9px;display:flex;align-items:center;gap:6px}.phero .host img{width:18px;height:18px;border-radius:50%;object-fit:cover}.pcard{display:flex;gap:12px;align-items:center;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:11px;width:100%;max-width:440px;cursor:pointer;transition:transform .12s,border-color .12s,box-shadow .12s}.pcard:hover{transform:translateY(-2px);border-color:var(--acc);box-shadow:var(--shadow)}.pcard .pp{flex:0 0 58px;width:58px;height:86px;border-radius:9px;object-fit:cover}.pcard .pph{flex:0 0 58px;width:58px;height:86px;border-radius:9px;display:grid;place-items:center;background:var(--panel2);font-size:24px}.pcard .b{min-width:0}.pcard .ti{font-weight:700;font-size:14px;color:var(--txt);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pcard .th{color:var(--mut);font-size:12px;margin:1px 0}.pcard .st{font-size:12.5px;margin-top:3px;font-weight:600}.pcard .st .live{color:#ff5b5b}.pcard .gng{color:var(--mut);font-size:12px;margin-top:2px}.fixture{display:flex;gap:13px;align-items:center;background:linear-gradient(135deg,var(--heroA),var(--heroB));border:1px dashed var(--line);border-radius:14px;padding:14px;margin:4px 0 14px}.fixture .ico{font-size:30px}.fixture .ti{font-weight:800;font-size:15px;color:var(--txt)}.fixture .su{color:var(--mut);font-size:13px;margin-top:2px}.recaps summary{cursor:pointer;list-style:none;font-weight:800;font-size:16px;margin:14px 0 8px;color:var(--txt);display:flex;align-items:center;gap:7px}.recaps summary::-webkit-details-marker{display:none}.recaps summary .chev{transition:transform .15s;color:var(--mut);font-size:13px}.recaps[open] summary .chev{transform:rotate(90deg)}.rhost{display:flex;align-items:center;gap:8px;margin:2px 0 8px;font-size:13px;color:var(--mut)}.rhost .av{width:26px;height:26px;border-radius:50%;object-fit:cover;background:#2a3550 center/cover no-repeat;flex:0 0 26px}.rhost .avph{width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:var(--panel2);font-size:12px;font-weight:700;color:var(--txt);flex:0 0 26px}.rhost b{color:var(--txt)}#pstatus.soon{color:var(--txt);font-weight:600}#pstatus .urgent{display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,var(--acc),var(--acc2));color:#fff;font-weight:800;padding:3px 10px;border-radius:999px;animation:ppulse 1.5s ease-in-out infinite}#pstatus .golive{display:inline-flex;align-items:center;gap:6px;background:#ff3b3b;color:#fff;font-weight:800;padding:3px 10px;border-radius:999px;animation:ppulse 1.4s ease-in-out infinite}@media(max-width:560px){.phero .in{flex-direction:column;align-items:flex-start}.phero .pp,.phero .ppph{width:84px;height:124px;flex-basis:84px}.phero h1{font-size:19px}}
.themetog{background:var(--panel2);border:1px solid var(--line);color:var(--txt);border-radius:10px;height:38px;padding:0 12px;font-size:13px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:6px;margin-right:8px;transition:background .12s,border-color .12s}.themetog:hover{border-color:var(--acc)}
.profwrap{position:relative;display:inline-block}
.profbtn{display:inline-flex;align-items:center;gap:8px;background:var(--panel2);border:1px solid var(--line);border-radius:999px;padding:4px 12px 4px 4px;cursor:pointer;font-weight:600;font-size:13px;color:var(--txt)}
.profbtn img,.profbtn .ini{width:30px;height:30px;border-radius:50%;object-fit:cover;background:var(--acc);color:#fff;display:grid;place-items:center;font-weight:700;font-size:13px}
.menu{position:absolute;right:0;top:46px;background:var(--panel);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow);min-width:190px;padding:6px;z-index:50}
.menu a,.menu button{display:flex;align-items:center;gap:9px;width:100%;text-align:left;background:none;border:none;color:var(--txt);font-size:14px;font-weight:600;padding:10px 12px;border-radius:9px;cursor:pointer;text-decoration:none}
.menu a:hover,.menu button:hover{background:var(--panel2)}
.menu .sep{height:1px;background:var(--line);margin:5px 4px}
.pbanner{height:130px;border-radius:18px 18px 0 0;background:linear-gradient(120deg,var(--heroA),var(--heroB));background-size:cover;background-position:center;margin:14px 0 0}
.phead{display:flex;gap:16px;align-items:flex-end;padding:0 18px;margin-top:-40px;position:relative}
.phead .pav{width:88px;height:88px;border-radius:18px;border:3px solid var(--panel);object-fit:cover;background:var(--panel2);display:grid;place-items:center;font-size:34px;color:var(--acc);font-weight:800;box-shadow:var(--shadow)}
.phead .pinfo{padding-bottom:6px}
.phead .pinfo h1{margin:0;font-size:21px}
.phead .pinfo .ph-handle{color:var(--mut);font-size:13px}
.pbio{padding:12px 18px 0;color:var(--txt);font-size:14px;line-height:1.5}
.pmeta{display:flex;gap:18px;flex-wrap:wrap;padding:10px 18px 0;color:var(--mut);font-size:13px}
.pmeta b{color:var(--txt)}
.pstats{display:flex;gap:10px;flex-wrap:wrap;padding:14px 18px 0}
.pstat{flex:1;min-width:74px;background:var(--panel2);border:1px solid var(--line);border-radius:13px;padding:11px;text-align:center}
.pstat .n{font-size:19px;font-weight:800;color:var(--acc)}
.pstat .l{font-size:11px;color:var(--mut);text-transform:uppercase;letter-spacing:.04em;margin-top:2px}
.legal{max-width:680px;line-height:1.6}
.legal h3{margin:18px 0 4px;font-size:15px}
.legal ul{margin:6px 0;padding-left:20px}
.legal .ok{color:#1a9e57;font-weight:600}
.cw{position:fixed;inset:0;z-index:90;background:rgba(0,0,0,.72);display:grid;place-items:end center;padding:0}
.cwbar{background:var(--panel);border-top:1px solid var(--line);width:100%;max-width:720px;border-radius:16px 16px 0 0;padding:18px 20px;box-shadow:var(--shadow)}
.cwbar p{margin:0 0 12px;font-size:13.5px;line-height:1.5;color:var(--txt)}
.cwbar .row{display:flex;gap:10px;flex-wrap:wrap}
.discard{flex:0 0 230px;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:12px;text-decoration:none;color:var(--txt);display:flex;flex-direction:column;gap:8px;transition:transform .12s,border-color .12s}
.discard:hover{transform:translateY(-2px);border-color:var(--acc)}
.discrow{display:flex;align-items:center;gap:8px}
.discav{width:34px;height:34px;border-radius:50%;object-fit:cover;flex:0 0 auto}
.disctxt{font-size:12.5px;line-height:1.4;color:var(--txt);display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}
.disctag{font-size:11px;color:var(--acc);font-weight:600;margin-top:auto}
.picknote{font-size:11px;color:var(--mut);font-style:italic;margin-top:4px;line-height:1.35}
.favrow{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;padding:8px 4px}
.favslot{aspect-ratio:2/3;border-radius:12px;border:1.5px dashed var(--line);background:var(--panel2);display:grid;place-items:center;overflow:hidden;cursor:pointer;position:relative}
.favslot img{width:100%;height:100%;object-fit:cover}
.favslot .plus{font-size:24px;color:var(--mut)}
.favslot .rm{position:absolute;top:4px;right:4px;background:rgba(0,0,0,.6);color:#fff;border:none;border-radius:50%;width:22px;height:22px;cursor:pointer;font-size:13px;line-height:1}
background:var(--panel2);border:1px solid var(--line);color:var(--txt);border-radius:10px;width:38px;height:38px;font-size:16px;cursor:pointer;display:grid;place-items:center;margin-right:8px}
.themetog:active{transform:scale(.94)}
.center{display:grid;place-items:center;min-height:40vh;color:var(--mut)}
.spin{width:30px;height:30px;border:3px solid var(--line);border-top-color:var(--acc);border-radius:50%;animation:s 1s linear infinite}
@keyframes s{to{transform:rotate(360deg)}}
footer{border-top:1px solid var(--line);padding:24px 0 40px;color:var(--mut);font-size:12.5px;text-align:center;margin-top:30px}

.seeall{color:var(--acc);font-weight:600;font-size:12px;margin-left:6px}
.seeall-inline{flex:0 0 auto;align-self:stretch;display:flex;align-items:center;justify-content:center;width:auto;min-width:54px;padding:0 12px;color:var(--acc);font-weight:700;font-size:12px;white-space:nowrap;cursor:pointer;border-left:1px dashed var(--line);margin-left:2px}
.seeall-inline:hover{text-decoration:underline}
.pgi{display:flex;align-items:center;gap:14px;margin:18px 0 14px}
.pgi-av{width:64px;height:64px;border-radius:50%;background:var(--well);border:1px solid var(--line);display:grid;place-items:center;font-size:20px;font-weight:800;color:var(--acc);overflow:hidden;flex:0 0 auto;box-shadow:var(--shadow)}
.pgi-av img{width:100%;height:100%;object-fit:cover}
.pgi h1{margin:0;font-size:22px}
.fallback{background:var(--well);border:1px dashed var(--line);border-radius:14px;padding:22px;text-align:center;color:var(--mut);font-size:14px;margin:18px 0}
.fallback a{font-weight:600}
.about .hero h1{font-size:24px}
.abouthero{margin:16px 0 14px;padding:26px 22px;border-radius:18px;background:radial-gradient(120% 140% at 0% 0%,var(--heroA),var(--heroB));border:1px solid var(--line);text-align:center}
.abouthero h1{font-size:27px;line-height:1.18;margin:0 0 10px;font-weight:800;letter-spacing:-.4px}
.abouttag{max-width:600px;margin:0 auto;color:var(--fg);opacity:.82;font-size:15px;line-height:1.5}
.aboutcta{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:18px}
.aboutcta .btn{font-size:14.5px;padding:10px 16px}
.aboutstats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:0 0 22px}
.astat{background:var(--panel,rgba(127,127,127,.07));border:1px solid var(--line);border-radius:14px;padding:14px 8px;text-align:center}
.anum{font-size:24px;font-weight:800;letter-spacing:-.5px;line-height:1}
.albl{font-size:12px;opacity:.7;margin-top:5px;white-space:nowrap}
.howgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:6px}
.howcard{background:var(--panel,rgba(127,127,127,.07));border:1px solid var(--line);border-radius:14px;padding:16px}
.howcard h3{margin:8px 0 6px;font-size:16px;font-weight:700}
.howcard p{font-size:13.5px;line-height:1.5;margin:0}
.howemoji{font-size:26px;line-height:1}
.featgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:6px}
.featcard{display:block;background:var(--panel,rgba(127,127,127,.07));border:1px solid var(--line);border-radius:14px;padding:15px;text-decoration:none;color:inherit;transition:transform .12s ease,border-color .12s ease,box-shadow .12s ease}
.featcard:hover{transform:translateY(-2px);border-color:var(--acc,#e8943a);box-shadow:0 6px 20px rgba(0,0,0,.18)}
.featcard .fi{font-size:24px;line-height:1}
.featcard .ft{font-weight:700;font-size:15px;margin:8px 0 4px}
.featcard .fd{font-size:13px;line-height:1.45;opacity:.72}
.faq{display:flex;flex-direction:column;gap:8px;margin-top:6px}
.faq details{background:var(--panel,rgba(127,127,127,.07));border:1px solid var(--line);border-radius:12px;overflow:hidden}
.faq summary{cursor:pointer;padding:13px 15px;font-weight:650;font-size:14.5px;list-style:none;position:relative;user-select:none}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";position:absolute;right:15px;top:12px;font-size:18px;opacity:.6;transition:transform .15s ease}
.faq details[open] summary::after{transform:rotate(45deg)}
.faq details[open] summary{border-bottom:1px solid var(--line)}
.faq details p{margin:0;padding:12px 15px 14px;font-size:13.5px;line-height:1.55;opacity:.82}
.faq details p a{color:var(--acc,#e8943a)}
@media(max-width:640px){.featgrid{grid-template-columns:1fr}}
.about .rail{margin:30px 0}
.about .rail>h2{font-size:18px;font-weight:750;letter-spacing:-.2px;margin:0 0 14px;display:flex;align-items:center;gap:8px}
.about .rail+.rail{padding-top:26px;border-top:1px solid var(--line)}
.valuesrail{border-left:3px solid var(--acc,#e8943a);padding-left:16px;border-radius:0 14px 14px 0}
.valuesrail.rail+.rail,.about .rail+.valuesrail{border-top:1px solid var(--line)}
.chiprow{display:flex;flex-wrap:wrap;gap:9px;margin-top:4px}
.chip{display:inline-flex;align-items:center;gap:6px;padding:8px 13px;border-radius:999px;background:var(--panel,rgba(127,127,127,.07));border:1px solid var(--line);text-decoration:none;color:inherit;font-size:13.5px;font-weight:600;transition:transform .12s ease,border-color .12s ease}
.chip:hover{transform:translateY(-1px);border-color:var(--acc,#e8943a)}
.finalcta{margin-top:18px}
.finalcta .btn{font-size:15px;padding:11px 20px}
@media(max-width:640px){.about .rail{margin:24px 0}.about .rail+.rail{padding-top:20px}.chip{font-size:13px;padding:7px 11px}}
@media(max-width:640px){.abouthero h1{font-size:22px}.aboutstats{grid-template-columns:repeat(2,1fr)}.howgrid{grid-template-columns:1fr}.anum{font-size:22px}}
.iim{margin-top:10px;overflow-x:auto}.iimbadge{display:block;margin-top:12px;max-width:420px}.iimbadge img{width:100%;height:auto;border-radius:12px;display:block;box-shadow:0 4px 18px rgba(0,0,0,.25)}
.iim img{max-width:100%;height:auto;border-radius:10px}
.tipwrap{display:flex;gap:18px;align-items:center;flex-wrap:wrap;margin-top:8px}
.qr{background:#fff;padding:10px;border-radius:14px;border:1px solid var(--line);box-shadow:var(--shadow);flex:0 0 auto}
.qr img{width:180px;height:180px;display:block}

/* ===== Noir City featured marquee ===== */
.featured.noircity{margin:18px 0 10px;padding:18px 16px 14px;border-radius:18px;position:relative;overflow:hidden;
  background:linear-gradient(135deg,#0a0c14 0%,#141a2c 55%,#1a1020 100%);border:1px solid #2a3450;
  box-shadow:0 10px 34px rgba(0,0,0,.45)}
.featured.noircity::before{content:"";position:absolute;inset:0;background:
  repeating-linear-gradient(90deg,transparent 0 38px,rgba(255,255,255,.025) 38px 40px);pointer-events:none}
.featured.noircity .feathd{position:relative;z-index:1;cursor:pointer;margin-bottom:10px}
.featured.noircity h2{margin:0;font-size:21px;letter-spacing:.5px;color:#f4d9a8;
  text-shadow:0 0 14px rgba(255,180,84,.45),0 0 2px rgba(255,180,84,.8)}
.featured.noircity .featcount{font-size:12px;color:#8fa0c0;font-weight:600;margin-left:6px;text-shadow:none}
.featured.noircity .feattag{margin:4px 0 0;font-size:13px;color:#aeb8d0;font-style:italic;max-width:620px}
.featured.noircity .seeall{color:#ffb454;margin-left:6px}
.featured.noircity .scroller{position:relative;z-index:1}
/* ===== Walled-garden play gate ===== */
.playgate{background:var(--well);border:1px dashed var(--line);border-radius:16px;padding:26px 20px;text-align:center;margin:18px 0}
.playgate-inner{max-width:420px;margin:0 auto}
.playgate .pglock{font-size:38px;margin-bottom:6px}
.playgate h3{margin:4px 0 8px;font-size:18px}
.playgate p{margin:0 0 14px;color:var(--mut);font-size:14px;line-height:1.5}
.playgate .pgsub{margin-top:12px;font-size:12px;color:var(--mut)}
/* ===== Liability gate v2 (blocking modal) ===== */
.gate{position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.82);display:grid;place-items:center;padding:16px;overflow-y:auto}
.gatebox{background:var(--panel);border:1px solid var(--line);border-radius:18px;width:100%;max-width:560px;padding:22px 22px 18px;box-shadow:0 20px 60px rgba(0,0,0,.6);margin:auto}
.gatehd{text-align:center;margin-bottom:14px}
.gatehd .gatelogo{font-size:34px}
.gatehd h2{margin:6px 0 4px;font-size:21px}
.gatehd .gatesub{margin:0;color:var(--mut);font-size:13.5px}
.gatebody{font-size:13px;line-height:1.5}
.gatelist{margin:0 0 14px;padding-left:18px;color:var(--txt)}
.gatelist li{margin:0 0 9px}
.gatelist b{color:var(--txt)}
.gatecheck{display:flex;gap:9px;align-items:flex-start;background:var(--well);border:1px solid var(--line);border-radius:12px;padding:12px;cursor:pointer;font-size:13px;line-height:1.45}
.gatecheck input{margin-top:2px;width:18px;height:18px;flex-shrink:0;accent-color:var(--acc)}
.gatebtns{display:flex;gap:10px;margin-top:16px}
.gatebtns .btn{flex:1;justify-content:center;text-align:center}
.gatebtns .btn.acc[disabled]{opacity:.45;cursor:not-allowed;filter:grayscale(.3)}
</style></head>
<body>
<header><div class="wrap hd">
  <div class="logo" onclick="go('/')">📺 <span>blueboxd</span></div>
  <div class="grow"></div>
  <div class="search" id="searchbox"><span>🔎</span><input id="q" placeholder="Search films…" autocomplete="off"></div>
  <div id="authslot"></div>
</div></header>
<main class="wrap" id="app"><div class="center"><div class="spin"></div></div></main>
<footer>
  Public-domain cinema, streamed free &amp; legal from the Internet Archive. Your diary lives in your own Bluesky repo.<br>
  <a href="/about">About</a> · <a href="/tos">Terms</a> · <a href="/privacy">Privacy</a> · <a href="/dmca">Takedown</a> · #Blueboxd
</footer>

<script>
const ORIGIN=${JSON.stringify(origin)};
let ME={loggedIn:false};
// THEME: light default, persisted; dark on toggle
function applyTheme(t){if(t==='dark')document.documentElement.setAttribute('data-theme','dark');else document.documentElement.removeAttribute('data-theme');try{localStorage.setItem('bb_theme',t);}catch(e){}const m=document.querySelector('meta[name=theme-color]');if(m)m.content=(t==='dark'?'#080b14':'#f5f7fb');}
function curTheme(){try{var v=localStorage.getItem('bb_theme');if(!v){var legacy=localStorage.getItem('cc_theme');if(legacy){v=legacy;localStorage.setItem('bb_theme',legacy);}}return v||'light';}catch(e){return 'light';}}
function toggleTheme(){const n=curTheme()==='dark'?'light':'dark';applyTheme(n);const b=document.getElementById('themebtn');if(b)b.textContent=n==='dark'?'☀':'☾';}
applyTheme(curTheme());
const $=s=>document.querySelector(s);
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;};
function go(p){history.pushState({},'',p);route();}
function showScoreBreakdown(r){
  // mirror backend: watched*1 + reviews*2 + decades*5 + joins*2 + streakWeeks*4
  const parts=[
    {k:'Films watched',n:r.watched||0,m:1},
    {k:'Reviews written',n:r.reviews||0,m:2},
    {k:'Decades explored',n:r.decades||0,m:5},
    {k:'Watch-party joins',n:r.joins||0,m:2},
    {k:'Weekly streak',n:r.streakWeeks||0,m:4}
  ];
  const back=el('div','lb-modal-back');
  const box=el('div','lb-modal');
  const title=el('div','lb-modal-h','\u{1F3C6} @'+esc(r.display||r.handle||'')+' \u2014 '+(r.score||0)+' pts');
  box.appendChild(title);
  parts.forEach(function(p){
    if(!p.n)return;
    const line=el('div','lb-modal-row');
    line.innerHTML='<span>'+esc(p.k)+'</span><span class="lb-modal-calc">'+p.n+' \u00D7 '+p.m+' = <b>'+(p.n*p.m)+'</b></span>';
    box.appendChild(line);
  });
  const tot=el('div','lb-modal-row lb-modal-tot');
  tot.innerHTML='<span>Cinephile Score</span><span><b>'+(r.score||0)+'</b></span>';
  box.appendChild(tot);
  const close=el('button','btn','Close');close.style.marginTop='12px';close.onclick=function(){back.remove();};
  box.appendChild(close);
  back.appendChild(box);
  back.onclick=function(e){ if(e.target===back) back.remove(); };
  document.body.appendChild(back);
}
async function leaderboardPage(tf){
  tf=tf||'all';
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  let d={rows:[]};
  try{ d=await jget('/api/leaderboard?limit=50&tf='+encodeURIComponent(tf)); }catch(e){}
  app.innerHTML='';
  app.appendChild(el('h2',null,'\u{1F3C6} Leaderboard'));
  app.appendChild(el('p','muted','Top cinephiles \u2014 ranked by films watched, reviews, decades explored & watch-party activity. All on Bluesky.'));
  // timeframe toggle
  const tfWrap=el('div','lb-tfs');
  [['all','All-time'],['month','This month'],['week','This week']].forEach(function(t){
    const b=el('button','lb-tf'+(tf===t[0]?' lb-tf-on':''),t[1]);
    b.onclick=function(){ if(tf!==t[0]) leaderboardPage(t[0]); };
    tfWrap.appendChild(b);
  });
  app.appendChild(tfWrap);
  const rows=d.rows||[];
  const meDid=d.meDid||(ME&&ME.did)||null;
  // Share-the-board button (logged-in only) — posts the OG leaderboard card to Bluesky.
  if(ME&&ME.loggedIn){
    const mineRow=rows.find(function(x){return x.did===meDid;});
    const shareWrap=el('div');shareWrap.style.margin='4px 0 14px';
    const shB=el('button','btn','\u{1F4E4} Share the board');shB.title='Post the Blueboxd leaderboard to Bluesky';
    shB.onclick=async function(){
      shB.disabled=true;const _o=shB.textContent;shB.textContent='Posting\u2026';
      let r;try{r=await jpost('/api/share-leaderboard',{myRank:mineRow?mineRow.rank:null,myScore:mineRow?mineRow.score:null});}catch(e){r={ok:false};}
      shB.disabled=false;shB.textContent=_o;
      toast(r&&r.ok?'Leaderboard shared to Bluesky \u2713':'Couldn\u2019t post right now \u2014 try again');
    };
    shareWrap.appendChild(shB);app.appendChild(shareWrap);
  }
  if(!rows.length){ app.appendChild(el('p','muted','No ranked members yet \u2014 log a film to get on the board. \u{1F37F}')); const b=el('button','btn acc','Browse films');b.onclick=function(){go('/');};app.appendChild(b); return; }
  // ── CATEGORY MINI-BOARDS — same members, different sort ──
  const CATS=[
    ['overall','\u{1F3C6} Overall', function(r){return r.score;},        function(r){return r.score+' pts';}],
    ['watched','\u{1F3AC} Most watched', function(r){return r.watched||0;},  function(r){return (r.watched||0)+' watched';}],
    ['reviews','\u270D\uFE0F Top reviewers', function(r){return r.reviews||0;},  function(r){return (r.reviews||0)+' reviews';}],
    ['parties','\u{1F389} Party animals', function(r){return r.joins||0;},    function(r){return (r.joins||0)+' parties';}],
    ['streak','\u{1F525} Longest streak', function(r){return r.streakWeeks||0;}, function(r){return (r.streakWeeks||0)+'-wk streak';}]
  ];
  let curCat='overall';
  const catWrap=el('div','lb-cats');
  CATS.forEach(function(c){
    const b=el('button','lb-cat'+(c[0]==='overall'?' lb-cat-on':''),c[1]);b.dataset.cat=c[0];
    b.onclick=function(){ curCat=c[0]; catWrap.querySelectorAll('.lb-cat').forEach(function(x){x.classList.toggle('lb-cat-on',x.dataset.cat===curCat);}); drawBoard(); };
    catWrap.appendChild(b);
  });
  app.appendChild(catWrap);
  const boardHost=el('div');app.appendChild(boardHost);
  // bulletproof profile link: always link by DID (resolves for premium domains AND .bsky.social).
  function profUrl(r){ return r.did ? ('https://bsky.app/profile/'+esc(r.did)) : ('https://bsky.app/profile/'+esc(r.handle||r.display||'')); }
  function avatarEl(r){
    const av=el('div','lb-av');
    const lbl=esc(r.display||r.handle||'?');
    if(r.avatar){ av.innerHTML='<img src="'+esc(r.avatar)+'" alt="" loading="lazy">'; }
    else{ av.classList.add('lb-av-mono'); av.textContent=(lbl[0]||'?').toUpperCase(); }
    return av;
  }
  function buildRow(r,isMe,catVal){
    const row=el('a','lb-row');row.href=profUrl(r);row.target='_blank';row.rel='noopener';
    if(r.rank<=3) row.classList.add('lb-top');
    if(isMe) row.classList.add('lb-me');
    const medal=r.rank===1?'\u{1F947}':r.rank===2?'\u{1F948}':r.rank===3?'\u{1F949}':('#'+r.rank);
    const rk=el('div','lb-rank');
    rk.appendChild(el('span','lb-rank-n',medal));
    if(r.delta!=null){
      let dtxt,dcls;
      if(r.delta>0){dtxt='\u25B2'+r.delta;dcls='lb-up';}
      else if(r.delta<0){dtxt='\u25BC'+Math.abs(r.delta);dcls='lb-down';}
      else{dtxt='\u2013';dcls='lb-flat';}
      rk.appendChild(el('span','lb-delta '+dcls,dtxt));
    }
    const av=avatarEl(r);
    const mid=el('div','lb-mid');
    const hwrap=el('div','lb-hwrap');
    const hd=el('span','lb-handle','@'+esc(r.display||r.handle||''));
    hwrap.appendChild(hd);
    if(isMe){ const pill=el('span','lb-you','you'); hwrap.appendChild(pill); }
    const sub=el('div','lb-sub', catVal ? esc(catVal) : ((r.watched||0)+' watched \u00B7 '+(r.reviews||0)+' reviews \u00B7 '+(r.decades||0)+' decades'));
    mid.appendChild(hwrap);mid.appendChild(sub);
    const sc=el('div','lb-score lb-score-btn',String(r.score));
    sc.title='Tap for score breakdown';
    sc.onclick=function(ev){ ev.preventDefault();ev.stopPropagation();showScoreBreakdown(r); };
    row.appendChild(rk);row.appendChild(av);row.appendChild(mid);row.appendChild(sc);
    return row;
  }
  function drawBoard(){
    boardHost.innerHTML='';
    const cat=CATS.find(function(c){return c[0]===curCat;});
    const valFn=cat[2], lblFn=cat[3];
    const ranked=rows.slice().sort(function(a,b){ return valFn(b)-valFn(a) || (b.score-a.score); })
      .map(function(r,i){ return Object.assign({},r,{ rank:i+1, _catval:lblFn(r), delta: curCat==='overall'?r.delta:null }); });
    const list=el('div','lb-list');
    let meInList=false;
    ranked.forEach(function(r){ const isMe=!!(meDid&&r.did===meDid); if(isMe)meInList=true; list.appendChild(buildRow(r,isMe,curCat!=='overall'?r._catval:null)); });
    boardHost.appendChild(list);
    if(meDid && !meInList){
      const mine=ranked.find(function(x){return x.did===meDid;});
      if(mine){
        const sep=el('div','lb-selfsep','\u2014 your standing \u2014');
        const selfRow=buildRow(mine,true,curCat!=='overall'?mine._catval:null);selfRow.classList.add('lb-self');
        boardHost.appendChild(sep);boardHost.appendChild(selfRow);
      }
    }
    if(rows.length<5 && ME&&ME.loggedIn){
      const inv=el('div','lb-invite');
      inv.appendChild(el('p',null,'\u{1F37F} The board\u2019s just getting started \u2014 invite your film friends to climb it with you.'));
      const ib=el('button','btn','\u{1F4E4} Invite friends');
      ib.onclick=async function(){ ib.disabled=true;const _o=ib.textContent;ib.textContent='Posting\u2026';
        let r;try{r=await jpost('/api/share-leaderboard',{invite:true});}catch(e){r={ok:false};}
        ib.disabled=false;ib.textContent=_o;
        toast(r&&r.ok?'Invite posted to Bluesky \u2713':'Couldn\u2019t post right now \u2014 try again');
      };
      inv.appendChild(ib);boardHost.appendChild(inv);
    }
  }
  drawBoard();
}
window.addEventListener('popstate',route);
function toast(m){const t=el('div','toast',m);document.body.appendChild(t);setTimeout(()=>t.remove(),2200);}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
async function jget(u){const r=await fetch(u,{credentials:'include'});const t=await r.text();try{return JSON.parse(t);}catch(e){return {error:'bad_response',status:r.status};}}
async function jpost(u,b){const r=await fetch(u,{method:'POST',credentials:'include',headers:{'content-type':'application/json'},body:JSON.stringify(b)});const t=await r.text();try{return JSON.parse(t);}catch(e){return {error:'bad_response',status:r.status,ok:false};}}
async function shareViaApi(endpoint, body, btn){
  if(!ME.loggedIn)return needLogin();
  const old=btn?btn.textContent:''; if(btn){btn.disabled=true;btn.textContent='… posting';}
  try{
    const r=await jpost(endpoint, body||{});
    if(r&&r.ok){ toast('Shared to Bluesky 🦋'); if(btn){btn.textContent='✓ Shared';} }
    else if(r&&r.reconnect){ toast('Session expired — reconnect Bluesky to share'); if(btn){btn.textContent='Reconnect Bluesky';btn.disabled=false;} }
    else { toast('Couldn’t post right now — try again'); if(btn){btn.textContent=old;btn.disabled=false;} }
  }catch(e){ toast('Couldn’t post right now — try again'); if(btn){btn.textContent=old;btn.disabled=false;} }
}

function themeLabel(){return curTheme()==='dark'?'☀ Light':'☾ Dark';}
function authSlot(){
  const s=$('#authslot');s.innerHTML='';
  const tg=el('button','themetog',themeLabel());tg.id='themebtn';tg.title='Switch light / dark';tg.onclick=()=>{toggleTheme();tg.textContent=themeLabel();};s.appendChild(tg);
  const lb=el('button','tab feat','🏆 Leaderboard');lb.style.marginRight='6px';lb.onclick=()=>go('/leaderboard');s.appendChild(lb);
  const party=el('button','tab feat','🎉 Parties');party.style.marginRight='8px';party.onclick=()=>go('/parties');s.appendChild(party);
  if(ME.loggedIn){
    const wrap=el('div','profwrap');
    const btn=el('button','profbtn');
    const ini=(ME.handle||'?')[0].toUpperCase();
    btn.innerHTML=(ME.avatar?'<img src="'+esc(ME.avatar)+'" alt="">':'<span class="ini">'+esc(ini)+'</span>')+'<span>'+esc((ME.handle||'').replace(/\\.bsky\\.social$/,''))+'</span>';
    const menu=el('div','menu');menu.style.display='none';
    menu.innerHTML='<a data-go="/u/'+esc(ME.handle)+'">👤 My profile</a>'
      +'<a data-go="/diary">🎬 My diary</a>'
      +'<a data-go="/club">🍿 The club</a>'
      +'<a data-go="/leaderboard">🏆 Leaderboard</a>'
      +'<a data-go="/parties">🎉 Watch parties</a>'
      +'<div class="sep"></div>'
      +'<a href="/about">ℹ️ About Blueboxd</a>'
      +'<a href="'+ORIGIN+'/logout">↩︎ Log out</a>';
    btn.onclick=(e)=>{e.stopPropagation();menu.style.display=menu.style.display==='none'?'block':'none';};
    menu.querySelectorAll('[data-go]').forEach(a=>a.onclick=(e)=>{e.preventDefault();menu.style.display='none';go(a.getAttribute('data-go'));});
    document.addEventListener('click',()=>{menu.style.display='none';},{once:false});
    wrap.append(btn,menu);s.appendChild(wrap);
  }else{
    const b=el('button','btn acc','Log in');b.onclick=loginModal;s.appendChild(b);
  }
}
function startPartyModal(){
  if(!ME.loggedIn){return loginModal();}
  const m=el('div','modal');
  const sheet=el('div','sheet');
  sheet.innerHTML='<h3>🎬 Start a watch party</h3><p class="muted" style="margin:-4px 0 10px">Pick a public-domain film, set a showtime — we\u2019ll post it to your Bluesky and feature it here.</p>';
  // step 1: film search
  const pick=el('div');
  const lbl1=el('label','plbl','1 · Choose a film');lbl1.style.cssText='display:block;font-weight:700;font-size:13px;margin:6px 0 4px';
  const q=el('input','inp');q.placeholder='Search public-domain films…';q.autocapitalize='off';q.autocomplete='off';
  const res=el('div');res.style.cssText='max-height:230px;overflow:auto;margin:8px 0;display:grid;grid-template-columns:1fr;gap:6px';
  pick.appendChild(lbl1);pick.appendChild(q);pick.appendChild(res);
  // chosen film banner
  const chosenWrap=el('div');chosenWrap.style.display='none';
  // step 2: schedule (hidden until a film is picked)
  const sched=el('div');sched.style.display='none';
  const lbl2=el('label','plbl','2 · Date & time');lbl2.style.cssText='display:block;font-weight:700;font-size:13px;margin:10px 0 4px';
  const dt=el('input','inp');dt.type='datetime-local';
  const nowD=new Date(Date.now()+1000*60*60); nowD.setSeconds(0,0);
  dt.value=new Date(nowD.getTime()-nowD.getTimezoneOffset()*60000).toISOString().slice(0,16);
  const lbl3=el('label','plbl','3 · Theme (optional)');lbl3.style.cssText='display:block;font-weight:700;font-size:13px;margin:10px 0 4px';
  const theme=el('input','inp');theme.placeholder='e.g. Saturday Fright Matinee';theme.maxLength=60;
  const go2=el('button','btn acc','🎉 Create party & post to Bluesky');go2.style.cssText='width:100%;margin-top:14px';
  const note=el('p','muted');note.style.cssText='font-size:12px;margin-top:8px';note.textContent='Posts from your account with #BlueboxdParty so it shows up here and across Bluesky.';
  sched.appendChild(lbl2);sched.appendChild(dt);sched.appendChild(lbl3);sched.appendChild(theme);sched.appendChild(go2);sched.appendChild(note);

  let chosen=null;
  const renderChosen=(f)=>{
    chosen=f;
    chosenWrap.style.display='block';
    chosenWrap.innerHTML='';
    const row=el('div');row.style.cssText='display:flex;gap:10px;align-items:center;background:var(--well,rgba(0,0,0,.04));border-radius:10px;padding:8px;margin:6px 0';
    row.innerHTML=(f.poster?'<img src="'+esc(f.poster)+'" style="width:46px;border-radius:6px">':'🎞️')+'<div><b>'+esc(f.title)+'</b>'+(f.year?' <span class="muted">('+f.year+')</span>':'')+'<br><span class="muted" style="font-size:12px">Tap search again to change</span></div>';
    chosenWrap.appendChild(row);
    sched.style.display='block';
    res.innerHTML='';q.value='';
  };
  let to;
  q.oninput=()=>{clearTimeout(to);const v=q.value.trim();if(v.length<2){res.innerHTML='';return;}
    to=setTimeout(async()=>{
      const d=await jget('/api/search?q='+encodeURIComponent(v));
      res.innerHTML='';
      (d.docs||[]).slice(0,10).forEach(f=>{
        const it=el('div');it.style.cssText='display:flex;gap:10px;align-items:center;cursor:pointer;padding:5px;border-radius:8px';
        it.onmouseenter=()=>it.style.background='var(--well,rgba(0,0,0,.05))';it.onmouseleave=()=>it.style.background='';
        it.innerHTML=(f.poster?'<img src="'+esc(f.poster)+'" style="width:38px;border-radius:5px" loading="lazy">':'🎞️')+'<div style="font-size:14px">'+esc(f.title)+(f.year?' <span class="muted">('+f.year+')</span>':'')+'</div>';
        it.onclick=()=>renderChosen(f);
        res.appendChild(it);
      });
      if(!(d.docs||[]).length)res.innerHTML='<p class="muted" style="font-size:13px">No matches. Try another title.</p>';
    },360);
  };
  go2.onclick=async()=>{
    if(!chosen)return toast('Pick a film first 🎬');
    const local=dt.value;if(!local)return toast('Pick a date & time 🕗');
    const startsAt=new Date(local).toISOString();
    if(new Date(startsAt).getTime()<Date.now()-60000)return toast('Pick a future time 🕗');
    go2.disabled=true;go2.textContent='Creating…';
    const r=await jpost('/api/party/create',{filmId:chosen.id,title:chosen.title,year:chosen.year,poster:chosen.poster,theme:theme.value.trim()||null,startsAt});
    if(r&&r.id){
      toast('Party created! 🎉');m.remove();
      go('/party/'+r.id);
    }else{
      go2.disabled=false;go2.textContent='🎉 Create party & post to Bluesky';
      toast((r&&r.error)||'Could not create party');
    }
  };
  sheet.appendChild(pick);sheet.appendChild(chosenWrap);sheet.appendChild(sched);
  m.appendChild(sheet);
  m.onclick=e=>{if(e.target===m)m.remove();};
  document.body.appendChild(m);
  q.focus();
}
// Original line-art genre icons (stroke-based, no faces). currentColor inherits theme.
const _gsvg=(p,vb)=>'<svg viewBox="'+(vb||'0 0 24 24')+'" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>';
const GICON={
  // Drama — stage curtains
  drama:_gsvg('<path d="M3 3h18"/><path d="M5 3c0 6-1.5 9-2 13 2 1 3 1 4 0-.5-5-1-9-1-13"/><path d="M19 3c0 6 1.5 9 2 13-2 1-3 1-4 0 .5-5 1-9 1-13"/><path d="M9 3c1 5 1 11 0 17"/><path d="M15 3c-1 5-1 11 0 17"/>'),
  // Comedy — sparkle / burst (laugh energy, no face)
  comedy:_gsvg('<path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="M6 6l2.5 2.5"/><path d="M15.5 15.5L18 18"/><path d="M18 6l-2.5 2.5"/><path d="M8.5 15.5L6 18"/>'),
  // Action — lightning bolt
  action:_gsvg('<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/>'),
  // Horror — bat silhouette (line)
  horror:_gsvg('<path d="M12 8c1-2 2-2 2-2s0 1 1 1 2-2 4-2c0 2-1 3-1 4 2 0 3 1 4 2-2 0-3 1-4 2 1 2 1 3 1 3s-3-1-4-2c-1 1-2 3-3 3s-2-2-3-3c-1 1-4 2-4 2s0-1 1-3c-1-1-2-2-4-2 1-1 2-2 4-2 0-1-1-2-1-4 2 0 3 2 4 2s1-1 1-1 1 0 2 2z"/>'),
  // Sci-Fi — rocket
  scifi:_gsvg('<path d="M12 2c3 2 5 6 5 10l-2 3H9l-2-3c0-4 2-8 5-10z"/><path d="M9 15l-2 5 3-2"/><path d="M15 15l2 5-3-2"/><circle cx="12" cy="9" r="1.5"/>'),
  // Romance — heart
  romance:_gsvg('<path d="M12 20s-7-4.5-9-8.5C1.5 8 3.5 5 6.5 5 9 5 12 8 12 8s3-3 5.5-3C20.5 5 22.5 8 21 11.5 19 15.5 12 20 12 20z"/>'),
  // Thriller — blade / dagger
  thriller:_gsvg('<path d="M4 4l11 11"/><path d="M14 14l-2 2 4 4 2-2-4-4z"/><path d="M10 18l-4 2 2-4"/>'),
  // Western — cowboy hat
  western:_gsvg('<path d="M6 14c-2 0-4 1-4 1s3 4 10 4 10-4 10-4-2-1-4-1"/><path d="M7 14c0-5 1-9 2-9 1 0 1 2 3 2s2-2 3-2c1 0 2 4 2 9"/>'),
  // Musical — single eighth note (no face)
  musical:_gsvg('<path d="M9 18V6l10-2v10"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>'),
  // extras for genre page header
  noir:_gsvg('<path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z"/>'),
  'science fiction':_gsvg('<path d="M12 2c3 2 5 6 5 10l-2 3H9l-2-3c0-4 2-8 5-10z"/><path d="M9 15l-2 5 3-2"/><path d="M15 15l2 5-3-2"/><circle cx="12" cy="9" r="1.5"/>')
};

function loginModal(){
  const m=el('div','modal');
  m.innerHTML='<div class="sheet"><h3>Log in with Bluesky 🦋</h3><p>Blueboxd is built <b>into</b> Bluesky on the AT Protocol. Sign in with your Bluesky account and your film diary &amp; reviews are saved to <b>your own</b> account — fully portable, no lock-in.</p><p class="trustnote">🔒 <b>Your password stays private.</b> We never see it or store it — sign-in is handled by Bluesky itself. Blueboxd only gets permission to post your reviews to your account, nothing more.</p><input class="inp" id="h" placeholder="yourname.bsky.social" autocapitalize="off" autocomplete="off"><button class="btn acc" style="width:100%" id="lg">Continue →</button><p style="margin-top:12px;font-size:12px">New to Bluesky? <a href="https://bsky.app" target="_blank">Make a free account</a> first — it’s free and takes a minute.</p></div>';
  m.onclick=e=>{if(e.target===m)m.remove();};
  document.body.appendChild(m);
  const inp=m.querySelector('#h');inp.focus();
  const submit=()=>{const h=inp.value.trim().replace(/^@/,'');if(h)location.href=ORIGIN+'/login?handle='+encodeURIComponent(h);};
  m.querySelector('#lg').onclick=submit;
  inp.onkeydown=e=>{if(e.key==='Enter')submit();};
}
function needLogin(){toast('Log in with Bluesky first 🦋');loginModal();}

// ---------- HOME ----------
async function home(){
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  let d;try{d=await jget('/api/home');}catch(e){app.innerHTML='<div class="center">Couldn’t load the catalog.</div>';return;}
  app.innerHTML='';
  const hero=el('div','hero');
  hero.innerHTML='<h1>Free cinema. Your club. Built into Bluesky.</h1>'+'<p>Blueboxd is a film club for hand-picked public-domain classics \u2014 noir, sci-fi, horror, gangster &amp; more \u2014 all free to watch, no signup, no ads. Rate films, keep a diary, and see what people you follow are watching. <b>It runs <i>on</i> Bluesky:</b> built by Bluesky users on the AT Protocol, so your diary &amp; reviews live in <b>your own</b> account \u2014 yours to keep, anywhere. '+(ME.loggedIn?'':'<b>Log in with Bluesky to start your diary \u2192</b>')+'</p>';
  if(!ME.loggedIn){const b=el('button','btn acc','Log in with Bluesky 🦋');b.style.marginTop='12px';b.onclick=loginModal;hero.appendChild(b);}
  // ===== REDESIGNED HOME (centered column) =====
  const wrap=el('div','homewrap');
  app.appendChild(wrap);
  wrap.appendChild(hero);

  // helper: a horizontal ROW (header + 5 vertical poster-shaped cards) + tiny text link
  function row(title, route, cards, centered){
    const sec=el('div','homerow');
    const h=el('div','rowhd');
    h.innerHTML='<span class="rowttl">'+esc(title)+'</span>';
    const lk=el('a','minilink','See all \u2192'); lk.onclick=()=>go(route); h.appendChild(lk);
    sec.appendChild(h);
    const sc=el('div','rowscroller'+(centered?' centered':''));
    cards.forEach(c=>sc.appendChild(c));
    sec.appendChild(sc);
    return sec;
  }
  // a vertical poster-shaped card for a person (round face on a card)
  function faceCard(p){
    const c=el('div','card facecard');
    const pw=el('div','pw faceframe');
    const mono=esc((p.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase());
    const ring=el('div','facering');
    if(p.portrait){
      const im=el('img');im.loading='lazy';im.decoding='async';
      im.addEventListener('load',function(){im.classList.add('on');});
      im.onerror=function(){ring.classList.add('mono');ring.textContent=mono;};
      im.src=p.portrait; if(im.complete&&im.naturalWidth>0)im.classList.add('on');
      ring.appendChild(im);
    } else { ring.classList.add('mono'); ring.textContent=mono; }
    pw.appendChild(ring);
    c.appendChild(pw);
    c.appendChild(el('div','t',esc(p.name||'')));
    c.onclick=()=>go('/person/'+p.id);
    return c;
  }

  // --- ROW 1: Noir City (5 movie poster cards) ---
  if(d.featured&&d.featured.docs&&d.featured.docs.length){
    wrap.appendChild(row(d.featured.label||'\uD83C\uDF03 Noir City','/genre/noir',
      d.featured.docs.slice(0,5).map(fdoc=>cardEl(fdoc,{noYear:true})),true));
  }
  // people split (original order preserved from payload)
  let stars=[], dirs=[];
  if(d.people&&d.people.length){
    stars=d.people.filter(p=>p.role!=='director');
    dirs=d.people.filter(p=>p.role==='director');
  }
  // --- ROW 2: Browse by Star (vertical face cards) ---
  if(stars.length){
    wrap.appendChild(row('\uD83C\uDFAD Browse by Star','/browse/stars',stars.map(p=>faceCard(p)),true));
  }
  // --- ROW 3: Browse by Director (vertical face cards) ---
  if(dirs.length){
    wrap.appendChild(row('\uD83C\uDFAC Browse by Director','/browse/directors',dirs.map(p=>faceCard(p)),true));
  }

  // --- GENRE GRID: 3x3 pro buttons with icons ---
  const GENRES=[
    {id:'drama',label:'Drama',icon:'\uD83C\uDFAD'},
    {id:'comedy',label:'Comedy',icon:'\uD83D\uDE02'},
    {id:'action',label:'Action',icon:'\uD83D\uDCA5'},
    {id:'horror',label:'Horror',icon:'\uD83D\uDC7B'},
    {id:'scifi',label:'Sci-Fi',icon:'\uD83D\uDE80'},
    {id:'romance',label:'Romance',icon:'\u2764\uFE0F'},
    {id:'thriller',label:'Thriller',icon:'\uD83D\uDD2A'},
    {id:'western',label:'Western',icon:'\uD83E\uDD20'},
    {id:'musical',label:'Musical',icon:'\uD83C\uDFB5'}
  ];
  // map counts from the rails payload if present
  const railCount={};
  (d.rails||[]).forEach(rl=>{ if(rl&&rl.id)railCount[rl.id]=(typeof rl.total==='number')?rl.total:((rl.docs||rl.films||[]).length); });
  const gsec=el('div','gridsec');
  gsec.appendChild(el('h2','secttl','Browse by genre'));
  const grid=el('div','genregrid');
  GENRES.forEach(g=>{
    const b=el('button','genrebtn');
    const cnt=railCount[g.id]||railCount[g.id==='scifi'?'science fiction':g.id]||0;
    b.innerHTML='<span class="gicon">'+(GICON[g.id]||g.icon)+'</span><span class="glabel">'+esc(g.label)+'</span>'+(cnt?'<span class="gcount">'+cnt+'</span>':'');
    b.onclick=()=>go('/genre/'+g.id);
    grid.appendChild(b);
  });
  gsec.appendChild(grid);
  wrap.appendChild(gsec);

  // --- DEFERRED: watch parties (4 cards) + Pete's Picks (5) hydrate after paint ---
  const _hydrateSecondary=async()=>{
  // ── Watch Parties: 4 centered preview cards ──
  try{
    let bbParties=[]; let bskyParties=[];
    try{ const pj=await jget('/api/party/list'); bbParties=((pj&&pj.parties)||[]).filter(p=>p.phase!=='ended'); }catch(_){}
    try{ const dv=await jget('/api/discovery'); bskyParties=(dv&&dv.posts)||[]; }catch(_){}
    bbParties.sort((a,b)=>{
      if(a.phase==='live'&&b.phase!=='live')return -1;
      if(b.phase==='live'&&a.phase!=='live')return 1;
      return new Date(a.startsAt)-new Date(b.startsAt);
    });
    bskyParties.sort((a,b)=>((b.blueboxdTag?1:0)-(a.blueboxdTag?1:0))||(b.createdAt-a.createdAt));
    if(bbParties.length||bskyParties.length||ME.loggedIn){
      const sec=el('div','partysec');
      sec.appendChild(el('h2','secttl','\uD83C\uDF89 Watch parties'));
      sec.appendChild(el('p','secsub','Live + upcoming film watch parties \u2014 on Blueboxd and across Bluesky. Show up, watch together, react live.'));
      const sb=el('button',ME.loggedIn?'btn acc':'btn','\uD83C\uDFAC Start a watch party');
      sb.style.cssText='margin:2px auto 16px;font-size:14px;display:block';
      sb.onclick=ME.loggedIn?(()=>startPartyModal()):loginModal;
      sec.appendChild(sb);
      const pg=el('div','partygrid');
      bbParties.slice(0,4).forEach(p=>{
        const c=el('div','card');
        const pw=el('div','pw');pw.style.position='relative';
        if(p.poster){pw.appendChild(_posterImg(p.poster,pw,false));}
        else pw.innerHTML='<div class="ph">\uD83C\uDF9E\uFE0F</div>';
        const badge=el('div',null, p.phase==='live'?'\uD83D\uDD34 LIVE NOW':('\uD83D\uDD57 '+new Date(p.startsAt).toLocaleString([], {month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})));
        badge.style.cssText='position:absolute;left:6px;top:6px;background:rgba(0,0,0,.78);color:'+(p.phase==='live'?'#ff5b5b':'#fff')+';font-size:11px;font-weight:700;padding:3px 7px;border-radius:7px';
        pw.appendChild(badge);
        const bb=el('div',null,'\uD83C\uDFAC Blueboxd');
        bb.style.cssText='position:absolute;right:6px;top:6px;background:#1c64f2;color:#fff;font-size:10px;font-weight:700;padding:3px 6px;border-radius:6px';
        pw.appendChild(bb);
        c.appendChild(pw);
        c.appendChild(el('div','t',esc(p.title||'')));
        c.appendChild(el('div','y',p.theme?esc(p.theme):(p.year||'')));
        if(p.hostHandle && p.hostHandle.indexOf('did:')!==0 && p.hostHandle!=='blueboxd.com'){
          c.appendChild(el('div','y','by @'+esc(p.hostHandle.replace(/\.bsky\.social$/,''))));
        }
        c.onclick=()=>go('/party/'+p.id);
        pg.appendChild(c);
      });
      const _bbShown=Math.min(bbParties.length,4);const _room=Math.max(0,4-_bbShown);
      bskyParties.slice(0,_room).forEach(p=>{
        const c=el('a','discard');c.href=p.link;c.target='_blank';c.rel='noopener';
        const top=el('div','discrow');
        if(p.avatar){const im=el('img','discav');im.src=p.avatar;im.loading='lazy';top.appendChild(im);}
        const nm=el('div');nm.innerHTML='<b>'+esc(p.displayName)+'</b><br><span class="muted">@'+esc(p.handle)+'</span>';
        top.appendChild(nm);c.appendChild(top);
        c.appendChild(el('div','disctxt',esc(p.text)));
        const tagrow=el('div','disctag','#'+esc(p.tag));
        if(p.blueboxdTag){const star=el('span',null,' \u2B50');star.title='Posted with #BlueboxdParty';tagrow.appendChild(star);}
        c.appendChild(tagrow);
        pg.appendChild(c);
      });
      if(pg.children.length){ sec.appendChild(pg); }
      else { sec.appendChild(el('p','secsub','No parties live right now \u2014 be the first. \uD83C\uDF7F')); }
      wrap.appendChild(sec);
    }
  }catch(e){}

  // ── Pete's Picks: 5 centered poster cards (the closer) ──
  try{
    const pk=await jget('/api/picks');
    if(pk&&pk.picks&&pk.picks.length){
      const sec=el('div','picksec');
      sec.appendChild(el('h2','secttl','\u2605 Pete\u2019s Picks'));
      sec.appendChild(el('p','secsub','Hand-picked by the host \u2014 the ones worth your night in.'));
      const pgr=el('div','pickgrid');
      pk.picks.slice(0,5).forEach(fp=>{
        const c=cardEl({id:fp.film_id,title:fp.title,year:fp.year,poster:fp.poster});
        if(fp.note){c.appendChild(el('div','picknote',esc(fp.note)));}
        pgr.appendChild(c);
      });
      sec.appendChild(pgr);
      wrap.appendChild(sec);
    }
  }catch(e){}
  };
  if('requestIdleCallback'in window){requestIdleCallback(()=>_hydrateSecondary(),{timeout:1200});}
  else{setTimeout(()=>_hydrateSecondary(),60);}
}


function seeAllInline(onClick,label){
  const e=el('div','seeall-inline');
  e.innerHTML=esc(label||'See all')+' \u2192';
  e.onclick=onClick;return e;
}
function moreChip(onClick){
  const c=el('div','card morecard');
  const pw=el('div','pw');
  pw.style.cssText='display:grid;place-items:center;background:var(--panel2);border:1px dashed var(--line)';
  pw.innerHTML='<div style="text-align:center;color:var(--acc);font-weight:700;font-size:13px;line-height:1.3">See all<br><span style="font-size:22px">\u2192</span></div>';
  c.appendChild(pw);
  c.appendChild(el('div','t','Explore more'));
  c.onclick=onClick;return c;
}
function morePerson(onClick,total){
  const c=el('div','person morecard');
  const pc=el('div','pc');
  pc.style.cssText='display:grid;place-items:center;background:var(--panel2);border:1px dashed var(--line);color:var(--acc);font-weight:800;font-size:20px';
  pc.textContent='\u2192';
  c.appendChild(pc);
  c.appendChild(el('div','pn','See all'+(total?' '+total:'')));
  c.onclick=onClick;return c;
}
function peopleRail(title,people,seeAllRoute){
  const r=el('div','rail');
  const h=el('h2',null,title);
  if(seeAllRoute){h.style.cursor='pointer';h.onclick=()=>go(seeAllRoute);}
  r.appendChild(h);
  const pp=el('div','people');
  const CAP=5;
  people.slice(0,CAP).forEach(p=>pp.appendChild(personCard(p)));
  if(seeAllRoute&&people.length>CAP){pp.appendChild(seeAllInline(()=>go(seeAllRoute),'See all '+people.length));}
  r.appendChild(pp);return r;
}
function personCard(p){
  const c=el('div','person');
  const mono=esc((p.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase());
  const pcd=el('div','pc');
  if(p.portrait){const im=el('img');im.loading='lazy';im.decoding='async';im.addEventListener('load',function(){im.classList.add('on');});im.onerror=function(){pcd.textContent=mono;};im.src=p.portrait;if(im.complete&&im.naturalWidth>0)im.classList.add('on');pcd.appendChild(im);}else{pcd.textContent=mono;}
  c.appendChild(pcd);
  c.appendChild(el('div','pn',esc(p.name)));
  c.onclick=()=>go('/person/'+p.id);return c;
}
// club-feed card: poster + watcher/review badges
function clubCard(f){
  const c=el('div','card');
  const pw=el('div','pw');
  if(f.poster){pw.appendChild(_posterImg(f.poster,pw,!!f._eager));}
  else pw.innerHTML='<div class="ph">🎞️</div>';
  c.appendChild(pw);
  c.appendChild(el('div','t',esc(f.title||'')));
  const meta=[];
  if(f.watchers)meta.push('👁 '+f.watchers);
  if(f.avgStars)meta.push('★ '+f.avgStars);
  c.appendChild(el('div','y',meta.join('  ')||(f.year||'')));
  c.onclick=()=>go('/film/'+encodeURIComponent(f.filmId));
  return c;
}

// ---------- /club page: club feed + friends feed ----------
async function clubPage(){
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  app.innerHTML='';
  app.appendChild(el('h2',null,'🍿 The Club'));
  app.appendChild(el('p','muted','What Blueboxd members are watching — public-domain cinema, watched together.'));
  if(!ME.loggedIn){
    const cta=el('div','rail');cta.style.cssText='background:var(--well);border:1px solid var(--line);border-radius:14px;padding:16px;margin:6px 0 4px';
    cta.appendChild(el('p',null,'👋 You’re browsing as a guest.'));
    const sub=el('p','muted');sub.style.margin='4px 0 10px';sub.textContent='Log in with Bluesky to start your own film diary, rate what you watch, and see what people you follow are watching.';cta.appendChild(sub);
    const b=el('button','btn acc','Log in with Bluesky 🦋');b.onclick=loginModal;cta.appendChild(b);
    app.appendChild(cta);
  }

  // friends section (logged-in only)
  if(ME.loggedIn){
    const fwrap=el('div','rail');
    fwrap.appendChild(el('h2',null,'🫂 People you follow'));
    const fmount=el('div',null,'');fwrap.appendChild(fmount);app.appendChild(fwrap);
    try{
      const fr=await jget('/api/feed/friends');
      if(fr&&fr.items&&fr.items.length){
        const sc=el('div','scroller');
        fr.items.forEach(it=>{
          const c=cardEl({id:it.filmId,title:it.title,year:it.year,poster:it.poster});
          const tag=el('div','y','@'+esc((it.handle||'').replace(/\\.bsky\\.social$/,''))+(it.kind==='review'&&it.stars?' · ★'+it.stars:''));
          c.appendChild(tag);
          sc.appendChild(c);
        });
        fmount.appendChild(sc);
      }else{fmount.appendChild(el('p','muted','No one you follow has logged a film yet. Be the first to start the wave.'));}
    }catch(e){fmount.appendChild(el('p','muted','Couldn’t load your follows right now.'));}
  }

  // club-wide trending
  const cwrap=el('div','rail');cwrap.appendChild(el('h2',null,'🔥 Trending in the club'));
  const cmount=el('div',null,'');cwrap.appendChild(cmount);app.appendChild(cwrap);
  try{
    const cw=await jget('/api/feed/watching');
    if(cw&&cw.films&&cw.films.length){
      const sc=el('div','scroller');cw.films.forEach(f=>sc.appendChild(clubCard(f)));cmount.appendChild(sc);
    }else{cmount.appendChild(el('p','muted','No films logged yet. Watch something and you’ll kick it off. 🎬'));}
  }catch(e){cmount.appendChild(el('p','muted','Couldn’t load the club feed.'));}
}
function railEl(rl, opts){
  opts=opts||{};
  const items=rl.docs||rl.films||[];
  const total=(typeof rl.total==='number')?rl.total:items.length;
  const r=el('div','rail collapsible');
  const open0=!!opts.open;            // collapsed by default for perf; only opened rails mount posters
  if(open0)r.classList.add('open');
  // header doubles as the expand/collapse toggle
  const h=el('h2','railtoggle');
  h.innerHTML='<span class="chev">▸</span> '+esc(rl.label)+' <span class="count">'+total+'</span>';
  const sa=el('span','seeall',' See all →');
  sa.onclick=(e)=>{e.stopPropagation();go('/genre/'+(rl.id||''));};
  if(rl.id)h.appendChild(sa);
  r.appendChild(h);
  const sc=el('div','scroller');
  let mounted=false;
  function mount(){
    if(mounted)return; mounted=true;
    items.slice(0,5).forEach(f=>sc.appendChild(cardEl(f)));
    if(rl.id&&total>5){sc.appendChild(seeAllInline(()=>go('/genre/'+rl.id),'See all'));}
  }
  function setOpen(v){
    if(v){r.classList.add('open');mount();}
    else r.classList.remove('open');
  }
  h.onclick=(e)=>{ if(e.target===sa)return; setOpen(!r.classList.contains('open')); };
  if(open0)mount();
  r.appendChild(sc);return r;
}
function _posterImg(src, pw, eager){
  const im=el('img');
  im.loading=eager?'eager':'lazy';
  im.decoding='async';
  if(eager){try{im.fetchPriority='high';}catch(e){}}
  im.addEventListener('load',function(){im.classList.add('on');});
  im.onerror=function(){pw.innerHTML='<div class="ph">\ud83c\udf9e\ufe0f</div>';};
  im.src=src;
  // already-cached images may not fire load
  if(im.complete&&im.naturalWidth>0)im.classList.add('on');
  return im;
}
function cardEl(f,opts){
  const c=el('div','card');
  const pw=el('div','pw');
  if(f.poster){pw.appendChild(_posterImg(f.poster,pw,!!f._eager));}
  else pw.innerHTML='<div class="ph">🎞️</div>';
  c.appendChild(pw);
  var _ttl=String(f.title||'');
  c.appendChild(el('div','t',esc(_ttl)));
  if(f.year && !(opts&&opts.noYear) && !/\(\s*(18|19|20)\d{2}\s*\)\s*$/.test(_ttl))c.appendChild(el('div','y',f.year));
  c.onclick=()=>go('/film/'+encodeURIComponent(f.id));
  return c;
}

// ── PATRON-free: one-click "Add all visible films to my list" ──
function addAllBtn(getFilms){
  const wrap=el('div','addallrow');
  const b=el('button','btn acc');
  function label(n){return '\u2795 Add all'+(n?' ('+n+')':'')+' to my list';}
  b.textContent=label((getFilms()||[]).length);
  b.onclick=async()=>{
    if(!ME.loggedIn)return needLogin();
    const films=(getFilms()||[]).filter(f=>f&&f.id);
    if(!films.length)return toast('Nothing to add yet');
    b.disabled=true;let ok=0,fail=0;
    for(let i=0;i<films.length;i++){const f=films[i];
      b.textContent='Adding \u2026 '+(i+1)+'/'+films.length;
      try{const r=await jpost('/api/library',{filmId:f.id,title:f.title,year:f.year,poster:f.poster,status:'want'});if(r&&r.ok)ok++;else fail++;}catch(e){fail++;}
    }
    b.textContent='\u2713 Added '+ok+' to your list';
    toast('Added '+ok+' film'+(ok===1?'':'s')+' to your list'+(fail?' \u00b7 '+fail+' skipped':'')+' \ud83c\udf7f');
    setTimeout(()=>{b.disabled=false;b.textContent=label(films.length);},2600);
  };
  wrap.appendChild(b);return wrap;
}

// ---------- PERSON / SEARCH grids ----------
async function personPage(id){
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  let page=1,total=0,busy=false,done=false;
  const d=await jget('/api/person?id='+encodeURIComponent(id)+'&rows=40&page=1');
  app.innerHTML='';
  total=d.total||0;
  const head=el('div','pgi');
  const mono=esc((d.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase());
  const avd=el('div','pgi-av');
  if(d.portrait){const im=el('img');im.src=d.portrait;im.onerror=function(){avd.textContent=mono;};avd.appendChild(im);}else{avd.textContent=mono;}
  head.appendChild(avd);
  const info=el('div');info.innerHTML='<h1>'+esc(d.name||'Films')+'</h1><div class="muted">'+(d.role==='director'?'Director':'Star')+' · '+total+' films</div>';
  head.appendChild(info);
  app.appendChild(head);
  const _all=[];
  app.appendChild(addAllBtn(()=>_all));
  const g=el('div','grid');app.appendChild(g);
  (d.docs||[]).forEach(f=>{_all.push(f);g.appendChild(cardEl(f));});
  if((d.docs||[]).length>=total)done=true;
  const sent=el('div');sent.style.height='1px';app.appendChild(sent);
  async function more(){if(busy||done)return;busy=true;page++;
    const r=await jget('/api/person?id='+encodeURIComponent(id)+'&rows=40&page='+page);
    (r.docs||[]).forEach(f=>{_all.push(f);g.appendChild(cardEl(f));});
    if(!(r.docs||[]).length)done=true;busy=false;}
  const io=new IntersectionObserver(es=>{if(es[0].isIntersecting)more();},{rootMargin:'600px'});io.observe(sent);
  document.title=(d.name||'Films')+' — Blueboxd';
}

// ===== WS6: genre browse page (full catalog, paginated) =====
async function genrePage(id){
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  let page=1,busy=false,done=false;
  const d=await jget('/api/rail?id='+encodeURIComponent(id)+'&rows=60&page=1');
  app.innerHTML='';
  // pro genre header band
  const GMETA={
    drama:{icon:'\uD83C\uDFAD',sub:'Heavy hearts, sharp scripts \u2014 the golden-age dramas that defined the form.'},
    comedy:{icon:'\uD83D\uDE02',sub:'Screwball, slapstick & wit \u2014 the classics that still land the laugh.'},
    action:{icon:'\uD83D\uDCA5',sub:'Adventure, peril & pulp thrills from cinema\u2019s public-domain vault.'},
    horror:{icon:'\uD83D\uDC7B',sub:'Monsters, dread & the gothic \u2014 the films that built the genre.'},
    scifi:{icon:'\uD83D\uDE80',sub:'Rockets, robots & wild ideas \u2014 vintage science fiction, free to watch.'},
    'science fiction':{icon:'\uD83D\uDE80',sub:'Rockets, robots & wild ideas \u2014 vintage science fiction, free to watch.'},
    romance:{icon:'\u2764\uFE0F',sub:'Swoons, heartbreak & old-Hollywood chemistry.'},
    thriller:{icon:'\uD83D\uDD2A',sub:'Noir, suspense & the slow tightening of the screw.'},
    western:{icon:'\uD83E\uDD20',sub:'Dust, six-shooters & frontier myth \u2014 the American West on film.'},
    musical:{icon:'\uD83C\uDFB5',sub:'Song, dance & spectacle from the age of the studio musical.'},
    noir:{icon:'\uD83C\uDF03',sub:'Shadows, smoke & doomed antiheroes \u2014 hand-picked film noir.'}
  };
  const _gm=GMETA[(id||'').toLowerCase()]||{icon:'\uD83C\uDF9E\uFE0F',sub:'Free, ad-free public-domain classics \u2014 watched together on Bluesky.'};
  const hd=el('div','genrehd');
  hd.innerHTML='<div class="ghdicon">'+(GICON[(id||'').toLowerCase()]||_gm.icon)+'</div>'+
    '<div><h1>'+esc((d.label||'Browse').replace(/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\uFE0F]+\s*/u,''))+'</h1><p class="ghdsub">'+_gm.sub+'</p></div>'+
    '<div class="ghdcount">'+(d.total||0)+' films</div>';
  app.appendChild(hd);
  const _all=[];
  app.appendChild(addAllBtn(()=>_all));
  const g=el('div','grid');app.appendChild(g);
  (d.docs||[]).forEach(f=>{_all.push(f);g.appendChild(cardEl(f));});
  const sent=el('div');sent.style.height='1px';app.appendChild(sent);
  async function more(){if(busy||done)return;busy=true;page++;
    const r=await jget('/api/rail?id='+encodeURIComponent(id)+'&rows=60&page='+page);
    (r.docs||[]).forEach(f=>{_all.push(f);g.appendChild(cardEl(f));});
    if(!(r.docs||[]).length)done=true;busy=false;}
  const io=new IntersectionObserver(es=>{if(es[0].isIntersecting)more();},{rootMargin:'700px'});io.observe(sent);
  document.title=(d.label||'Browse')+' — Blueboxd';
}
async function searchPage(q){
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  const d=await jget('/api/search?q='+encodeURIComponent(q));try{jpost('/api/searchlog',{q:q,results:(d&&d.docs&&d.docs.length)||0}).catch(()=>{});}catch(e){}
  app.innerHTML='';app.appendChild(el('h2',null,'🔎 “'+esc(q)+'”'));
  const _films=(d.docs||[]);
  if(_films.length)app.appendChild(addAllBtn(()=>_films));
  const g=el('div','grid');_films.forEach(f=>g.appendChild(cardEl(f)));
  if(!(d.docs||[]).length)app.appendChild(el('p','muted','No matches. Try another title.'));
  app.appendChild(g);
}

// ---------- FILM ----------
function plog(action,d,reason){try{navigator.sendBeacon&&navigator.sendBeacon('/api/playlog',new Blob([JSON.stringify({action:action,filmId:(d&&(d.id||d.filmId))||'',title:(d&&d.title)||'',reason:reason||''})],{type:'application/json'}))||jpost('/api/playlog',{action:action,filmId:(d&&(d.id||d.filmId))||'',title:(d&&d.title)||'',reason:reason||''}).catch(()=>{});}catch(e){}}
async function filmPage(id){
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  let d;try{d=await jget('/api/detail?id='+encodeURIComponent(id));}catch(e){app.innerHTML='<div class="center">Couldn’t load this film.</div>';return;}
  if(!d||d.error||d.verified===false){app.innerHTML='<div class="center" style="padding:48px 20px"><div style="font-size:42px">🎞️</div><h2 style="margin:12px 0 6px">Not in the verified film library</h2><p class="muted">Blueboxd only shows titles confirmed in the film database with a real poster &amp; synopsis. This one didn’t qualify.</p><a class="btn acc" href="#/" style="margin-top:14px;display:inline-block">← Back to films</a></div>';document.title='Not available — Blueboxd';return;}
  app.innerHTML='';
  const f=el('div','film');
  const top=el('div','top');
  const pos=el('div','poster');pos.innerHTML=d.poster?'<img src="'+esc(d.poster)+'">':'<div class="ph">🎞️</div>';
  const meta=el('div','meta');
  meta.innerHTML='<h1>'+esc(d.title||'')+'</h1><div class="sub">'+[d.year,d.director,d.runtime].filter(Boolean).map(esc).join(' · ')+'</div>';
  const act=el('div','actions');
  const playB=el('button','btn acc',ME.loggedIn?'▶ Watch free':'\uD83D\uDD12 Log in to watch');playB.onclick=()=>startPlay(d);
  const libB=el('button','btn','🔖 Watchlist');libB.title='Add to your watchlist';libB.onclick=()=>addLib(d,'want',libB);
  const watchedB=el('button','btn','✓ Watched');watchedB.onclick=()=>addLib(d,'watched',watchedB,true);
  const ownB=el('button','btn','📚 Add to Library');ownB.title='Add to your personal library';ownB.onclick=()=>addLib(d,'owned',ownB);
  act.append(playB,libB,watchedB,ownB);
  if(ME.isOwner){
    const pickB=el('button','btn','★ Pete’s Pick');pickB.title='Add / remove from Pete’s Picks';
    pickB.onclick=()=>togglePick(d,pickB);
    act.appendChild(pickB);
    const artB=el('button','btn','🖼 Artwork');artB.title='Pick a poster or backdrop from TMDb';
    artB.onclick=()=>openArtwork(d);
    act.appendChild(artB);
  }
  // Share this film to Bluesky — posts a pro custom SVG poster-card directly (not a naked link).
  const shB=el('button','btn');shB.innerHTML='\u{1F98B} Share';shB.title='Share to Bluesky';
  shB.onclick=async()=>{
    if(!ME.loggedIn)return needLogin();
    shB.disabled=true;const _ot=shB.innerHTML;shB.innerHTML='Posting\u2026';
    let r;try{r=await jpost('/api/share-film',{filmId:id,title:d.title||'',year:d.year||'',poster:d.poster||d.art||''});}catch(e){r={ok:false};}
    shB.disabled=false;shB.innerHTML=_ot;
    toast(r&&r.ok?'Shared to Bluesky with a custom card \u2713':'Couldn\u2019t post right now \u2014 try again');
  };
  act.appendChild(shB);
  meta.appendChild(act);
  top.append(pos,meta);f.appendChild(top);
  if(d.description)f.appendChild(el('div','desc',esc(d.description)));
  const ph=el('div');ph.id='playerHost';f.appendChild(ph);
  f.appendChild(reviewBlock(d));
  if(d.archiveUrl)f.appendChild(el('p','muted','Source: <a href="'+esc(d.archiveUrl)+'" target="_blank">Internet Archive</a> · public domain'));
  app.appendChild(f);
  document.title=(d.title||'Film')+' — Blueboxd';
}
function showPlayGate(d){
  const host=$('#playerHost');if(!host)return;
  host.innerHTML='';
  const g=el('div','playgate');
  const inner=el('div','playgate-inner');
  inner.innerHTML='<div class="pglock">\uD83D\uDD12</div>'+
    '<h3>Free to watch \u2014 with Bluesky</h3>'+
    '<p>Blueboxd is a Bluesky film club. Log in with your Bluesky account to play this film, keep a diary, and join the club. Your data stays in your own repo.</p>';
  const b=el('button','btn acc','Log in with Bluesky \uD83E\uDD8B');
  b.onclick=loginModal;
  inner.appendChild(b);
  const sub=el('p','pgsub','Browsing is open \u2014 playback needs a free Bluesky login.');
  inner.appendChild(sub);
  g.appendChild(inner);host.appendChild(g);
  g.scrollIntoView({behavior:'smooth',block:'center'});
}
function startPlay(d){
  const host=$('#playerHost');if(!host)return;
  // WALLED GARDEN: no playback without a Bluesky login.
  if(!ME.loggedIn){plog('gated',d,'not_logged_in');return showPlayGate(d);}
  host.innerHTML='';
  plog('attempt',d);
  if(!d.streamUrl){
    plog('unplayable',d,'no_stream_url');
    const fb=el('div','fallback');
    fb.innerHTML='▶ This title has no browser-playable copy. <a href="'+esc(d.archiveUrl||'#')+'" target="_blank" rel="noopener">Watch it on the Internet Archive ↗</a>';
    host.appendChild(fb);return;
  }
  const p=el('div','player');
  const v=el('video');v.controls=true;v.playsInline=true;v.autoplay=true;v.src=d.streamUrl;
  v.onerror=()=>{plog('fail',d,(v.error&&v.error.code)?('media_err_'+v.error.code):'media_err');host.innerHTML='';const fb=el('div','fallback');fb.innerHTML='▶ Playback failed for this copy. <a href="'+esc(d.archiveUrl||'#')+'" target="_blank" rel="noopener">Watch on the Internet Archive ↗</a>';host.appendChild(fb);};
  p.appendChild(v);host.appendChild(p);
  v.scrollIntoView({behavior:'smooth',block:'center'});
  // auto-log a watch when playback starts (if logged in)
  {let ok=false;v.addEventListener('playing',()=>{if(ok)return;ok=true;plog('success',d);if(ME.loggedIn)jpost('/api/watch',{filmId:d.id,title:d.title}).catch(()=>{});});}
}
async function openArtwork(d){
  if(!ME.isOwner)return;
  if(!d.tmdbId){toast('No TMDb id for this film');return;}
  const ov=el('div','artmodal');
  const card=el('div','artbox');
  card.innerHTML='<div class="arthd"><b>🖼 Choose artwork</b><span class="artx">✕</span></div><div class="arttabs"><button class="arttab on" data-t="posters">Posters</button><button class="arttab" data-t="backdrops">Backdrops</button></div><div class="artbody"><div class="center"><div class="spin"></div></div></div><div class="artfoot"><button class="btn artreset">↺ Reset to default</button></div>';
  ov.appendChild(card);document.body.appendChild(ov);
  function close(){ov.remove();}
  ov.onclick=(e)=>{if(e.target===ov)close();};
  card.querySelector('.artx').onclick=close;
  const body=card.querySelector('.artbody');
  let data=null;
  try{data=await jget('/api/images?tmdb='+encodeURIComponent(d.tmdbId));}catch(e){}
  function render(kind){
    const arr=(data&&data[kind])||[];
    body.innerHTML='';
    if(!arr.length){body.innerHTML='<p class="muted" style="padding:20px;text-align:center">No '+kind+' found on TMDb for this title.</p>';return;}
    const grid=el('div',kind==='posters'?'artgrid':'artgrid wide');
    arr.forEach(im=>{
      const cell=el('div','artcell');
      cell.innerHTML='<img loading="lazy" src="'+esc(im.thumb)+'">';
      cell.onclick=async()=>{
        cell.classList.add('sel');
        const payload=kind==='posters'?{filmId:d.id,poster:im.full}:{filmId:d.id,backdrop:im.full};
        const r=await jpost('/api/artwork',payload);
        if(r&&r.ok){toast('Artwork updated ✨');close();filmPage(d.id);}
        else{toast('Could not save');cell.classList.remove('sel');}
      };
      grid.appendChild(cell);
    });
    body.appendChild(grid);
  }
  card.querySelectorAll('.arttab').forEach(t=>{t.onclick=()=>{card.querySelectorAll('.arttab').forEach(x=>x.classList.remove('on'));t.classList.add('on');render(t.dataset.t);};});
  card.querySelector('.artreset').onclick=async()=>{const r=await jpost('/api/artwork',{filmId:d.id,reset:true});if(r&&r.ok){toast('Reset to default poster');close();filmPage(d.id);}};
  render('posters');
}
async function togglePick(d,btn){
  if(!ME.isOwner)return;
  btn.textContent='…';
  // ask for an optional one-line note the first time
  let note=btn.dataset.note||'';
  if(btn.dataset.on!=='1'){
    const n=prompt('Optional one-line note for this pick (why it’s worth watching):','');
    if(n!==null)note=n.slice(0,280);
  }
  const remove=btn.dataset.on==='1';
  const r=await jpost('/api/picks/set',{filmId:d.id,title:d.title,year:d.year,poster:d.poster,note,remove});
  if(r&&r.ok){
    if(remove){btn.dataset.on='';btn.textContent='★ Pete’s Pick';toast('Removed from Pete’s Picks');}
    else{btn.dataset.on='1';btn.dataset.note=note;btn.textContent='★ In Picks ✓';toast('Added to Pete’s Picks ★');}
  }else{btn.textContent='★ Pete’s Pick';toast('Could not update — try again');}
}
async function addLib(d,status,btn,alsoWatchLog){
  if(!ME.loggedIn)return needLogin();
  btn.textContent='…';
  const r=await jpost('/api/library',{filmId:d.id,title:d.title,year:d.year,poster:d.poster,status,tmdbId:d.tmdbId||null});
  if(r.ok){
    const lbl=status==='watched'?'✓ Watched':status==='owned'?'✓ In Library':'✓ Watchlisted';
    const msg=status==='watched'?'Marked watched ✓':status==='owned'?'Added to your Library 📚':'Added to your Watchlist 🔖';
    btn.textContent=lbl;toast(msg);
  }
  else if(r&&r.reconnect){btn.textContent='Reconnect Bluesky';toast('Session expired — reconnect Bluesky to save');loginModal();}
  else{btn.textContent='Try again';toast('Could not save — try again');}
}
function reviewBlock(d){
  const box=el('div');box.style.marginTop='8px';
  box.appendChild(el('h2',null,'⭐ Your review'));
  if(!ME.loggedIn){const b=el('button','btn acc','Log in to rate &amp; review 🦋');b.onclick=loginModal;box.appendChild(b);return box;}
  let stars=0;
  const sw=el('div','stars');
  for(let i=1;i<=5;i++){const s=el('span','star','★');s.onclick=()=>{stars=i;[...sw.children].forEach((c,ix)=>c.classList.toggle('on',ix<i));};sw.appendChild(s);}
  box.appendChild(sw);
  const ta=el('textarea');ta.placeholder='What did you think? (optional)';box.appendChild(ta);
  const row=el('div','actions');
  const cpLabel=el('label','chip');const cp=el('input');cp.type='checkbox';cpLabel.append(cp,document.createTextNode(' Share to my Bluesky'));
  const save=el('button','btn acc','Post review');
  save.onclick=async()=>{if(!stars)return toast('Pick a star rating first ⭐');save.disabled=true;save.textContent='…';
    let r;try{r=await jpost('/api/review',{filmId:d.id,title:d.title,year:d.year,poster:d.poster||d.art||'',stars,text:ta.value,crosspost:cp.checked});}catch(e){r={ok:false,error:'network'};}
    save.disabled=false;
    if(r&&r.ok){save.textContent='Saved ✓';toast(cp.checked?'Review posted + shared to Bluesky ✓':'Review saved to your diary ✓');}
    else if(r&&r.reconnect){save.textContent='Reconnect Bluesky';toast('Session expired — reconnect Bluesky to post');loginModal();}
    else{save.textContent='Post review';toast(r&&r.error==='auth'?'Please log in again to post.':'Couldn’t save — try again in a moment.');}
  };
  row.append(cpLabel,save);box.appendChild(row);
  return box;
}

// ---------- DIARY ----------
async function diaryPage(){
  if(!ME.loggedIn){needLogin();go('/');return;}
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  const d=await jget('/api/diary');
  app.innerHTML='';
  app.appendChild(el('h2',null,'🎬 @'+esc(ME.handle)+'’s diary'));
  const lib=(d.library||[]).map(r=>r.value);
  const rev=(d.review||[]).map(r=>r.value);
  const watArr=(d.watch||[]).map(r=>r.value);
  // map filmId -> your star rating (from review records) so we can badge + sort library cards
  const starsByFilm={};rev.forEach(rv=>{if(rv&&rv.filmId)starsByFilm[String(rv.filmId)]=Number(rv.stars)||0;});
  // RECONCILE: any film with a review or watch log is "watched" — promote stranded watchlist
  // entries so a seen film never lingers in Watchlist. Also self-heal the stored record.
  const seenIds={};rev.forEach(x=>{if(x&&x.filmId)seenIds[String(x.filmId)]=1;});watArr.forEach(x=>{if(x&&x.filmId)seenIds[String(x.filmId)]=1;});
  lib.forEach(x=>{if(x&&x.filmId&&x.status!=='watched'&&x.status!=='owned'&&seenIds[String(x.filmId)]){x.status='watched';
    // fire-and-forget persist so the repo record matches what we now show
    try{jpost('/api/library',{filmId:x.filmId,title:x.title,year:x.year,poster:x.poster,status:'watched'});}catch(_){}}});
  const watched=lib.filter(x=>x.status==='watched');
  const owned=lib.filter(x=>x.status==='owned');
  const want=lib.filter(x=>x.status!=='watched'&&x.status!=='owned');
  app.appendChild(el('p','muted',watched.length+' watched · '+want.length+' on watchlist · '+owned.length+' in library · '+rev.length+' reviews'));
  const statsB=el('button','btn acc','📊 View stats');statsB.onclick=function(){go('/stats');};statsB.style.margin='6px 8px 16px 0';app.appendChild(statsB);
  const shareDiaryWrap=el('div');shareDiaryWrap.style.margin='6px 0 16px';
  const shareDiaryB=el('button','btn','📤 Share my last four watched');shareDiaryB.title='Posts a Letterboxd-style #lastfourwatched card to Bluesky — your four most recent films, with a one-off AI blurb.';shareDiaryB.style.margin='0';shareDiaryB.onclick=async()=>{shareDiaryB.disabled=true;const _ot=shareDiaryB.textContent;shareDiaryB.textContent='Posting…';let r;try{r=await jpost('/api/share-diary',{});}catch(e){r={ok:false};}shareDiaryB.disabled=false;shareDiaryB.textContent=_ot;toast(r&&r.ok?'Your #lastfourwatched card was posted to Bluesky ✓':'Couldn’t post right now — try again in a moment');};shareDiaryWrap.appendChild(shareDiaryB);
  const dHint=el('div','muted');dHint.style.cssText='font-size:12px;margin-top:5px;opacity:.8';dHint.innerHTML='Shares your <b>#lastfourwatched</b> card — like Letterboxd, but on Bluesky 🦋';shareDiaryWrap.appendChild(dHint);
  app.appendChild(shareDiaryWrap);
  const out=el('button','btn','Log out');out.onclick=()=>location.href='/logout';out.style.margin='6px 0 16px';app.appendChild(out);
  // ── type filter bar ──
  const FILTERS=[['all','All'],['watched','✓ Watched'],['want','🔖 Watchlist'],['owned','📚 Library'],['reviews','✍️ Reviews']];
  let active=(location.hash.split('?f=')[1]||'all');
  if(!FILTERS.some(f=>f[0]===active))active='all';
  const bar=el('div','diaryfilters');
  const body=el('div');
  FILTERS.forEach(([k,lbl])=>{
    const b=el('button','dfilter'+(k===active?' on':''),lbl);
    b.onclick=()=>{active=k;[...bar.children].forEach(c=>c.classList.remove('on'));b.classList.add('on');renderBody();};
    bar.appendChild(b);
  });
  app.appendChild(bar);
  // ── sort + search controls ──
  let sortKey='added';
  let query='';
  const SORTS=[['added','Recently added'],['rating','Highest rated'],['title','Title A\u2013Z'],['year','Year (newest)']];
  const ctrlWrap=el('div','diarysort');
  const sortLbl=el('span','muted');sortLbl.textContent='Sort:';sortLbl.style.cssText='font-size:13px;margin-right:2px';
  const sel=el('select','dsort');
  SORTS.forEach(([k,lbl])=>{const o=document.createElement('option');o.value=k;o.textContent=lbl;sel.appendChild(o);});
  sel.value=sortKey;sel.onchange=()=>{sortKey=sel.value;renderBody();};
  const dsearch=el('input','dsearch');dsearch.type='search';dsearch.placeholder='\uD83D\uDD0D Find in your diary\u2026';dsearch.autocomplete='off';
  let _qt;dsearch.oninput=()=>{clearTimeout(_qt);_qt=setTimeout(()=>{query=dsearch.value.trim().toLowerCase();renderBody();},160);};
  ctrlWrap.append(sortLbl,sel,dsearch);
  app.appendChild(ctrlWrap);
  app.appendChild(body);
  // case-insensitive title match against the active search query
  function matchQuery(arr){if(!query)return arr;return arr.filter(x=>String(x.title||'').toLowerCase().includes(query));}
  // sort a film array by the active sort key (non-destructive copy)
  function sortFilms(arr){
    const a=arr.slice();
    if(sortKey==='rating')a.sort((x,y)=>(starsByFilm[String(y.filmId)]||0)-(starsByFilm[String(x.filmId)]||0)||(y.addedAt||'').localeCompare(x.addedAt||''));
    else if(sortKey==='title')a.sort((x,y)=>String(x.title||'').localeCompare(String(y.title||''),undefined,{sensitivity:'base'}));
    else if(sortKey==='year')a.sort((x,y)=>(Number(y.year)||0)-(Number(x.year)||0));
    else a.sort((x,y)=>String(y.addedAt||'').localeCompare(String(x.addedAt||'')));
    return a;
  }
  // Remove a diary item (library entry OR review) with optimistic UI.
  async function removeFilm(x,statusArr,card,isReview){
    const what=isReview?'review':'film';
    const ok=confirm('Remove your '+what+' for "'+(x.title||'this film')+'"?');
    if(!ok)return;
    card.style.opacity='.4';
    const ep=isReview?'/api/review':'/api/library';
    let r;try{r=await jpost(ep,{filmId:x.filmId,remove:true});}catch(e){r={ok:false};}
    if(r&&r.ok){
      const i=statusArr.indexOf(x);if(i>=0)statusArr.splice(i,1);
      if(isReview)delete starsByFilm[String(x.filmId)];
      card.remove();toast(isReview?'Review removed \u2713':'Removed from your diary \u2713');renderBody();
    }else{card.style.opacity='';toast('Couldn\u2019t remove right now — try again');}
  }
  const STATUS_BADGE={watched:['\u2713','badge-watched'],owned:['\uD83D\uDCDA','badge-lib'],want:['\uD83D\uDD16','badge-want']};
  function dcard(x,opts){
    opts=opts||{};
    const c=cardEl({id:x.filmId,title:x.title,year:x.year,poster:x.poster});
    c.style.position='relative';
    // status badge (top-left corner pill) — skip on the Reviews section
    if(!opts.isRev){
      const st=(x.status==='watched'||x.status==='owned')?x.status:'want';
      const bd=STATUS_BADGE[st];
      if(bd){const b=el('span','dcard-badge '+bd[1],bd[0]);c.appendChild(b);}
    }
    // star strip — tappable to rate/re-rate inline (posts to /api/review)
    const rated=opts.isRev?(Number(x.stars)||0):(starsByFilm[String(x.filmId)]||0);
    const sdiv=el('div','dstars dstars-rate'+(rated>0?'':' unrated'));
    sdiv.title=rated>0?'Tap to change your rating':'Tap to rate';
    function paint(n){sdiv.innerHTML='';for(let i=1;i<=5;i++){const st=el('span','rstar'+(i<=n?' on':''),'\u2605');st.dataset.v=i;sdiv.appendChild(st);}}
    paint(rated);
    sdiv.onmouseover=(e)=>{const t=e.target.closest('.rstar');if(t)paint(Number(t.dataset.v));};
    sdiv.onmouseleave=()=>paint(starsByFilm[String(x.filmId)]||(opts.isRev?(Number(x.stars)||0):0));
    sdiv.onclick=async(e)=>{
      e.preventDefault();e.stopPropagation();
      const t=e.target.closest('.rstar');if(!t)return;
      const v=Number(t.dataset.v);
      paint(v);sdiv.style.pointerEvents='none';
      let r;try{r=await jpost('/api/review',{filmId:x.filmId,title:x.title,year:x.year,poster:x.poster||'',stars:v,text:'',crosspost:false});}catch(_){r={ok:false};}
      sdiv.style.pointerEvents='';
      if(r&&r.ok){
        starsByFilm[String(x.filmId)]=v;if(opts.isRev)x.stars=v;
        sdiv.classList.remove('unrated');sdiv.title='Tap to change your rating';
        toast(rated>0?'Rating updated \u2605':'Rated \u2605');
      }else{paint(starsByFilm[String(x.filmId)]||0);toast('Couldn\u2019t save rating \u2014 try again');}
    };
    c.appendChild(sdiv);
    if(opts.removable){
      const rm=el('button','dcard-rm','\u2715');rm.title=opts.isRev?'Remove review':'Remove from diary';
      rm.onclick=(e)=>{e.preventDefault();e.stopPropagation();removeFilm(x,opts.arr,c,opts.isRev);};
      c.appendChild(rm);
    }
    return c;
  }
  function section(title,arr,opts){
    opts=opts||{};
    const filtered=matchQuery(arr);
    if(!filtered.length)return;
    const sorted=opts.isRev?filtered:sortFilms(filtered);
    const h=el('h2',null,title+' \u00b7 '+filtered.length);
    body.appendChild(h);
    const g=el('div','grid');
    sorted.forEach(x=>g.appendChild(dcard(x,{isRev:opts.isRev,removable:opts.removable,arr:arr})));
    body.appendChild(g);
  }
  function renderBody(){
    body.innerHTML='';
    if(active==='all'){
      section('\u2713 Watched',watched,{removable:true});
      section('\uD83D\uDD16 Watchlist',want,{removable:true});
      section('\uD83D\uDCDA Library',owned,{removable:true});
      section('\u270D\uFE0F Reviewed',rev,{isRev:true,removable:true});
    }
    else if(active==='watched')section('\u2713 Watched',watched,{removable:true});
    else if(active==='want')section('\uD83D\uDD16 Watchlist',want,{removable:true});
    else if(active==='owned')section('\uD83D\uDCDA Library',owned,{removable:true});
    else if(active==='reviews')section('\u270D\uFE0F Reviewed',rev,{isRev:true,removable:true});
    if(!body.children.length){
      if(query){
        const ne=el('div','diary-empty');
        ne.innerHTML='<div class="de-emoji">\uD83D\uDD0D</div><h3>No matches for \u201c'+esc(query)+'\u201d</h3><p class="muted">Try a different title, or clear the search.</p>';
        const cb=el('button','btn','Clear search');cb.style.marginTop='12px';cb.onclick=()=>{query='';dsearch.value='';renderBody();};ne.appendChild(cb);
        body.appendChild(ne);return;
      }
      const empty=el('div','diary-empty');
      empty.innerHTML=(active==='all'
        ? '<div class="de-emoji">\uD83C\uDF7F</div><h3>Your diary is empty</h3><p class="muted">Browse the catalog and add films to your <b>Watchlist</b> or <b>Library</b>, mark what you\u2019ve <b>Watched</b>, and write a review.</p>'
        : active==='want' ? '<div class="de-emoji">\uD83D\uDD16</div><h3>Nothing on your watchlist</h3><p class="muted">Add films you want to see \u2014 hit \u201c\uD83D\uDD16 Watchlist\u201d on any film.</p>'
        : active==='owned' ? '<div class="de-emoji">\uD83D\uDCDA</div><h3>Your library is empty</h3><p class="muted">Build your collection \u2014 hit \u201c\uD83D\uDCDA Add to Library\u201d on any film.</p>'
        : active==='watched' ? '<div class="de-emoji">\u2713</div><h3>No films watched yet</h3><p class="muted">Watch something free, then mark it watched.</p>'
        : '<div class="de-emoji">\u270D\uFE0F</div><h3>No reviews yet</h3><p class="muted">Watch a film and share your take.</p>');
      const br=el('button','btn acc','\uD83C\uDFAC Browse the catalog');br.style.marginTop='12px';br.onclick=()=>go('/');empty.appendChild(br);
      body.appendChild(empty);
    }
  }
  renderBody();
}
async function statsPage(){
  if(!ME.loggedIn){needLogin();go('/');return;}
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  const d=await jget('/api/diary');
  app.innerHTML='';
  app.appendChild(el('h2',null,'📊 @'+esc(ME.handle)+'’s stats'));
  const lib=(d.library||[]).map(function(r){return r.value;});
  const rev=(d.review||[]).map(function(r){return r.value;});
  const wat=(d.watch||[]).map(function(r){return r.value;});
  const watched=lib.filter(function(x){return x.status==='watched';});
  const want=lib.filter(function(x){return x.status!=='watched'&&x.status!=='owned';});
  const owned=lib.filter(function(x){return x.status==='owned';});
  if(!lib.length&&!rev.length&&!wat.length){
    const empty=el('div','diary-empty');
    empty.innerHTML='<div class="de-emoji">📊</div><h3>No stats yet</h3><p class="muted">Log some films and your stats — decades, ratings, taste — will bloom here. 🍿</p>';
    const b=el('button','btn acc','🎬 Browse films');b.style.marginTop='12px';b.onclick=function(){go('/');};empty.appendChild(b);
    app.appendChild(empty);return;
  }
  const avg=rev.length?(rev.reduce(function(a,r){return a+(Number(r.stars)||0);},0)/rev.length):0;
  // poster lookup by filmId — recover posters for recently-watched (watch records have none)
  const posterBy={};
  lib.concat(rev).forEach(function(x){if(x&&x.filmId&&x.poster&&!posterBy[String(x.filmId)])posterBy[String(x.filmId)]=x.poster;});
  const titleBy={},yearBy={};
  lib.concat(rev).forEach(function(x){if(x&&x.filmId){if(x.title&&!titleBy[String(x.filmId)])titleBy[String(x.filmId)]=x.title;if(x.year&&!yearBy[String(x.filmId)])yearBy[String(x.filmId)]=x.year;}});
  // stars by film (for top-rated)
  const starsBy={};rev.forEach(function(r){if(r&&r.filmId)starsBy[String(r.filmId)]=Number(r.stars)||0;});

  // ── HERO BAND ──
  const totalFilms=watched.length;
  const estMin=totalFilms*95; // ~95min avg for classic public-domain features
  const estHours=Math.round(estMin/60);
  const hero=el('div','stats-hero');
  function heroStat(num,label,suffix){return '<div class="sh-item"><div class="sh-num" data-count="'+num+'">0</div><div class="sh-lbl">'+label+'</div></div>';}
  hero.innerHTML=
    '<div class="sh-item"><div class="sh-num" data-count="'+totalFilms+'">0</div><div class="sh-lbl">films watched</div></div>'+
    '<div class="sh-sep"></div>'+
    '<div class="sh-item"><div class="sh-num"><span data-count="'+estHours+'">0</span>h</div><div class="sh-lbl">of cinema</div></div>'+
    '<div class="sh-sep"></div>'+
    '<div class="sh-item"><div class="sh-num" data-count="'+rev.length+'">0</div><div class="sh-lbl">reviews</div></div>'+
    '<div class="sh-sep"></div>'+
    '<div class="sh-item"><div class="sh-num">'+(avg?avg.toFixed(1):'–')+(avg?' <span class="sh-star">★</span>':'')+'</div><div class="sh-lbl">avg rating</div></div>';
  app.appendChild(hero);

  // ── STAT TILES (tappable → diary filter) ──
  const cards=[
    ['🎬',watched.length,'watched','watched','tile-watched'],
    ['🔖',want.length,'watchlist','want','tile-want'],
    ['📚',owned.length,'library','owned','tile-lib'],
    ['✍️',rev.length,'reviews','reviews','tile-rev'],
    ['⭐',avg?avg.toFixed(1):'–','avg rating',null,'tile-avg']
  ];
  const cw=el('div','statcards');
  cards.forEach(function(c){
    var x=el('div','statcard '+c[4]);
    x.innerHTML='<div class="sc-ic">'+c[0]+'</div><div class="sc-n">'+c[1]+'</div><div class="sc-l">'+c[2]+'</div>';
    if(c[3]){x.classList.add('tappable');x.title='View your '+c[2];x.onclick=function(){go('/diary#?f='+c[3]);};}
    cw.appendChild(x);
  });
  app.appendChild(cw);

  // ── TASTE PROFILE ──
  const decs={};
  watched.forEach(function(x){var y=parseInt(x.year,10);if(y>1880&&y<2100){var dd=Math.floor(y/10)*10;decs[dd]=(decs[dd]||0)+1;}});
  const decKeys=Object.keys(decs).map(Number).sort(function(a,b){return a-b;});
  var favDecade=null,favDecadeN=0;decKeys.forEach(function(k){if(decs[k]>favDecadeN){favDecadeN=decs[k];favDecade=k;}});
  // top-rated film
  var topId=null,topStars=0;Object.keys(starsBy).forEach(function(id){if(starsBy[id]>topStars){topStars=starsBy[id];topId=id;}});
  // completion %
  var compDen=watched.length+want.length;var compPct=compDen?Math.round(watched.length/compDen*100):0;
  if(favDecade||topId||compDen){
    app.appendChild(el('h2',null,'🎭 Your taste'));
    var tp=el('div','taste');
    if(favDecade){
      var t1=el('div','taste-card');
      t1.innerHTML='<div class="tc-k">Favorite era</div><div class="tc-v">'+favDecade+'s</div><div class="tc-s">'+favDecadeN+' film'+(favDecadeN===1?'':'s')+' watched</div>';
      tp.appendChild(t1);
    }
    if(topId){
      var t2=el('div','taste-card taste-top');
      var tposter=posterBy[topId];
      var ttitle=esc(titleBy[topId]||'Your top pick');
      t2.innerHTML='<div class="tc-k">Top rated</div>'+
        '<div class="tc-toprow">'+(tposter?'<img class="tc-poster" src="'+esc(tposter)+'" alt="">':'<div class="tc-poster ph">🎞️</div>')+
        '<div><div class="tc-v tc-vsm">'+ttitle+'</div><div class="tc-stars">'+'★'.repeat(topStars)+'</div></div></div>';
      t2.style.cursor='pointer';t2.onclick=function(){go('/film/'+encodeURIComponent(topId));};
      tp.appendChild(t2);
    }
    if(compDen){
      var t3=el('div','taste-card');
      t3.innerHTML='<div class="tc-k">Watchlist done</div><div class="tc-v">'+compPct+'%</div>'+
        '<div class="tc-bar"><div class="tc-barfill" style="width:'+compPct+'%"></div></div>'+
        '<div class="tc-s">'+watched.length+' of '+compDen+' logged</div>';
      tp.appendChild(t3);
    }
    app.appendChild(tp);
  }

  // ── ACTIVITY: streak + this-year + busiest month (all from dates we already have) ──
  (function(){
    // collect all activity dates: watch.watchedAt, library.addedAt, review.createdAt
    var dates=[];
    wat.forEach(function(x){if(x.watchedAt)dates.push(x.watchedAt);});
    lib.forEach(function(x){if(x.addedAt)dates.push(x.addedAt);});
    rev.forEach(function(x){if(x.createdAt)dates.push(x.createdAt);});
    var parsed=dates.map(function(s){var d=new Date(s);return isNaN(d)?null:d;}).filter(Boolean);
    if(!parsed.length)return;
    // ISO-week key helper
    function weekKey(d){var t=new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()));var day=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-day);var ys=new Date(Date.UTC(t.getUTCFullYear(),0,1));var wk=Math.ceil(((t-ys)/86400000+1)/7);return t.getUTCFullYear()+'-W'+(wk<10?'0':'')+wk;}
    var weeks={};parsed.forEach(function(d){weeks[weekKey(d)]=1;});
    // count consecutive weeks ending at the current week (or last active week)
    function weekStart(d){var t=new Date(d);var day=t.getDay()||7;t.setHours(0,0,0,0);t.setDate(t.getDate()-(day-1));return t;}
    var cur=weekStart(new Date());var streak=0;
    for(var i=0;i<520;i++){var probe=new Date(cur);probe.setDate(probe.getDate()-i*7);if(weeks[weekKey(probe)])streak++;else if(i===0)continue;else break;}
    // this year + busiest month
    var nowY=new Date().getFullYear();var thisYear=parsed.filter(function(d){return d.getFullYear()===nowY;}).length;
    var months={};parsed.forEach(function(d){var k=d.getFullYear()+'-'+(d.getMonth()+1);months[k]=(months[k]||0)+1;});
    var bestM=null,bestN=0;Object.keys(months).forEach(function(k){if(months[k]>bestN){bestN=months[k];bestM=k;}});
    var MN=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var bestLabel='';if(bestM){var pp=bestM.split('-');bestLabel=MN[Number(pp[1])-1]+' '+pp[0];}
    app.appendChild(el('h2',null,'\uD83D\uDD25 Activity'));
    var ac=el('div','taste');
    var a1=el('div','taste-card');
    a1.innerHTML='<div class="tc-k">Current streak</div><div class="tc-v">'+streak+' <span class="tc-vsm">wk'+(streak===1?'':'s')+'</span></div><div class="tc-s">'+(streak>0?'logged a film '+streak+' week'+(streak===1?'':'s')+' running':'log one this week to start a streak')+'</div>';
    ac.appendChild(a1);
    var a2=el('div','taste-card');
    a2.innerHTML='<div class="tc-k">In '+nowY+'</div><div class="tc-v">'+thisYear+'</div><div class="tc-s">film action'+(thisYear===1?'':'s')+' logged this year</div>';
    ac.appendChild(a2);
    if(bestLabel){
      var a3=el('div','taste-card');
      a3.innerHTML='<div class="tc-k">Busiest month</div><div class="tc-v tc-vsm">'+bestLabel+'</div><div class="tc-s">'+bestN+' film action'+(bestN===1?'':'s')+'</div>';
      ac.appendChild(a3);
    }
    app.appendChild(ac);
  })();

  // ── BY DECADE ──
  if(decKeys.length){
    app.appendChild(el('h2',null,'📅 By decade'));
    var dtot=decKeys.reduce(function(a,k){return a+decs[k];},0);
    var dmax=Math.max.apply(null,decKeys.map(function(k){return decs[k];}));
    var dwrap=el('div','bars');
    decKeys.forEach(function(k){
      var pct=Math.round(decs[k]/dtot*100);
      var row=el('div','barrow'+(k===favDecade?' barrow-peak':''));
      row.innerHTML='<div class="barlbl">'+k+'s</div><div class="bartrack"><div class="barfill" style="width:0%" data-w="'+Math.round(decs[k]/dmax*100)+'"></div></div><div class="barn">'+decs[k]+' <span class="barpct">'+pct+'%</span></div>';
      dwrap.appendChild(row);
    });
    app.appendChild(dwrap);
    var spread=el('div','muted');spread.style.cssText='font-size:12px;margin:6px 0 2px;opacity:.75';
    spread.textContent=decKeys.length+' decade'+(decKeys.length===1?'':'s')+', '+decKeys[0]+'s–'+decKeys[decKeys.length-1]+'s';
    app.appendChild(spread);
  }

  // ── RATINGS HISTOGRAM ──
  var hist=[0,0,0,0,0];
  if(rev.length){
    app.appendChild(el('h2',null,'⭐ Your ratings'));
    rev.forEach(function(r){var st=Math.max(1,Math.min(5,Number(r.stars)||0));hist[st-1]++;});
    var rmax=Math.max.apply(null,hist.concat([1]));
    var modal=0,modalI=-1;hist.forEach(function(v,i){if(v>modal){modal=v;modalI=i;}});
    var rwrap=el('div','bars');
    for(var st=5;st>=1;st--){
      var row=el('div','barrow'+((st-1)===modalI?' barrow-peak':''));
      row.innerHTML='<div class="barlbl">'+'★'.repeat(st)+'</div><div class="bartrack"><div class="barfill" style="width:0%" data-w="'+Math.round(hist[st-1]/rmax*100)+'"></div></div><div class="barn">'+hist[st-1]+'</div>';
      rwrap.appendChild(row);
    }
    app.appendChild(rwrap);
  }

  // ── YOUR GENRES (TMDb-backed, KV-cached server-side; renders async so page stays instant) ──
  if(watched.length){
    var genreH=el('h2',null,'\uD83C\uDFAD Your genres');
    var genreWrap=el('div','bars');
    var genreLoading=el('div','muted');genreLoading.style.cssText='font-size:12px;opacity:.7;padding:2px 0';genreLoading.textContent='Tallying your taste\u2026';
    app.appendChild(genreH);app.appendChild(genreLoading);app.appendChild(genreWrap);
    (function(){
      var payload={films:watched.slice(0,60).map(function(x){return {filmId:x.filmId,tmdbId:x.tmdbId||null,title:x.title||'',year:x.year||''};})};
      jpost('/api/genres',payload).then(function(r){
        try{genreLoading.remove();}catch(_){}
        if(!r||!r.ok||!r.genres){genreH.remove();genreWrap.remove();return;}
        var tally={};
        watched.forEach(function(x){
          var key=String(x.filmId||x.tmdbId||x.title||'');
          var gs=r.genres[key]||[];
          gs.forEach(function(g){if(g){tally[g]=(tally[g]||0)+1;}});
        });
        var keys=Object.keys(tally).sort(function(a,b){return tally[b]-tally[a];});
        if(!keys.length){genreH.remove();genreWrap.remove();return;}
        var gmax=tally[keys[0]];
        var top=keys.slice(0,8);
        top.forEach(function(g,i){
          var row=el('div','barrow'+(i===0?' barrow-peak':''));
          row.innerHTML='<div class="barlbl" style="flex:0 0 92px;text-align:left">'+esc(g)+'</div><div class="bartrack"><div class="barfill" style="width:0%" data-w="'+Math.round(tally[g]/gmax*100)+'"></div></div><div class="barn">'+tally[g]+'</div>';
          genreWrap.appendChild(row);
        });
        // animate the new bars
        requestAnimationFrame(function(){genreWrap.querySelectorAll('.barfill[data-w]').forEach(function(b){b.style.width=b.getAttribute('data-w')+'%';});});
        // inject a "Top genre" taste card if the taste panel exists
        try{
          var tasteEl=document.querySelector('.taste');
          if(tasteEl&&keys[0]){
            var tc=el('div','taste-card');
            tc.innerHTML='<div class="tc-k">Top genre</div><div class="tc-v tc-vsm">'+esc(keys[0])+'</div><div class="tc-s">'+tally[keys[0]]+' film'+(tally[keys[0]]===1?'':'s')+' watched</div>';
            tasteEl.appendChild(tc);
          }
        }catch(_){}
      }).catch(function(){try{genreLoading.remove();genreH.remove();genreWrap.remove();}catch(_){}});
    })();
  }

  // ── RECENTLY WATCHED (poster bug fixed via filmId join) ──
  if(wat.length){
    var recent=wat.slice().sort(function(a,b){return String(b.watchedAt||'').localeCompare(String(a.watchedAt||''));});
    // de-dupe by filmId, keep most recent
    var seen={},uniq=[];recent.forEach(function(x){var k=String(x.filmId);if(!seen[k]){seen[k]=1;uniq.push(x);}});
    uniq=uniq.slice(0,12);
    app.appendChild(el('h2',null,'🕒 Recently watched'));
    var g=el('div','grid');
    uniq.forEach(function(x){
      var k=String(x.filmId);
      var card=cardEl({id:x.filmId,title:x.title||titleBy[k]||'',year:yearBy[k]||'',poster:posterBy[k]||''});
      if(x.watchedAt){try{var dt=new Date(x.watchedAt);if(!isNaN(dt))card.title='Watched '+dt.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});}catch(_){}}
      g.appendChild(card);
    });
    app.appendChild(g);
  }

  // animate count-ups + bar fills on next frame
  requestAnimationFrame(function(){
    document.querySelectorAll('.sh-num [data-count],.sh-num[data-count]').forEach(function(node){
      var target=parseInt(node.getAttribute('data-count'),10)||0;if(target<=0){node.textContent='0';return;}
      var startT=performance.now(),dur=700;
      function step(now){var p=Math.min(1,(now-startT)/dur);var v=Math.round(target*(1-Math.pow(1-p,3)));node.textContent=v;if(p<1)requestAnimationFrame(step);}
      requestAnimationFrame(step);
    });
    document.querySelectorAll('.barfill[data-w]').forEach(function(b){b.style.width=b.getAttribute('data-w')+'%';});
  });

  // ── Share + Back ──
  var decStr=decKeys.map(function(k){return k+':'+decs[k];}).join(',');
  var ratStr=(rev.length?[hist[0],hist[1],hist[2],hist[3],hist[4]]:[0,0,0,0,0]).join(',');
  var shareStatsB=el('button','btn acc','\u{1F4E4} Share my stats');shareStatsB.style.margin='20px 8px 0 0';
  shareStatsB.onclick=async function(){shareStatsB.disabled=true;var ot=shareStatsB.textContent;shareStatsB.textContent='Posting\u2026';var r;try{r=await jpost('/api/share-stats',{watched:watched.length,reviews:rev.length,avg:(avg?avg.toFixed(2):0),dec:decStr,rat:ratStr});}catch(e){r={ok:false};}shareStatsB.disabled=false;shareStatsB.textContent=ot;toast(r&&r.ok?'Your stats card was posted to Bluesky \u2713':'Couldn\u2019t post right now \u2014 try again in a moment');};
  app.appendChild(shareStatsB);
  const back=el('button','btn','← Back to diary');back.onclick=function(){go('/diary');};back.style.margin='20px 0 0';app.appendChild(back);
  document.title='Stats — Blueboxd';
}
async function profilePage(handle){
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  const d=await jget('/api/profile?handle='+encodeURIComponent(handle));
  app.innerHTML='';
  if(d.error){app.innerHTML='<div class="center" style="padding:40px">No Blueboxd profile for @'+esc(handle)+' yet.<br><span class="muted">Once they log in and log a film, it shows here.</span></div>';return;}
  const pr=d.profile||{};
  const isMe=ME.loggedIn&&ME.handle&&ME.handle.toLowerCase()===handle.toLowerCase();
  const st=d.stats||{};
  const wrap=el('div','profile');
  // banner
  const ban=el('div','pbanner');if(pr.banner)ban.style.backgroundImage='url('+JSON.stringify(pr.banner).slice(1,-1)+')';wrap.appendChild(ban);
  // header
  const head=el('div','phead');
  const av=pr.avatar?('<img class="pav" src="'+esc(pr.avatar)+'" alt="">'):('<div class="pav">'+esc((handle||'?')[0].toUpperCase())+'</div>');
  head.innerHTML=av+'<div class="pinfo"><h1>'+esc(pr.displayName||handle.replace(/\\.bsky\\.social$/,''))+'</h1><div class="ph-handle">@'+esc(handle)+'</div></div>';
  wrap.appendChild(head);
  if(pr.description)wrap.appendChild(el('div','pbio',esc(pr.description)));
  // bsky meta
  const meta=el('div','pmeta');
  meta.innerHTML='<span>🦋 <b>'+(pr.followers||0)+'</b> followers</span><span><b>'+(pr.following||0)+'</b> following</span><a href="https://bsky.app/profile/'+esc(handle)+'" target="_blank" rel="noopener" class="muted">View on Bluesky ↗</a>';
  wrap.appendChild(meta);
  // stats
  const stats=el('div','pstats');
  stats.innerHTML=[['films',st.films||0],['watched',st.watched||0],['reviews',st.reviews||0],['avg ★',st.avgStars!=null?st.avgStars:'—']]
    .map(([l,n])=>'<div class="pstat"><div class="n">'+esc(String(n))+'</div><div class="l">'+l+'</div></div>').join('');
  wrap.appendChild(stats);
  // favorites
  const favs=d.favorites||[];
  const favSec=el('div','rail');favSec.appendChild(el('h2',null,'❤️ Favorite films'+(isMe?' <span class="muted" style="font-size:12px;font-weight:500">— tap a slot to set</span>':'')));
  const row=el('div','favrow');
  for(let slot=1;slot<=4;slot++){
    const fv=favs.find(f=>f.slot===slot);
    const cell=el('div','favslot');
    if(fv){
      cell.innerHTML='<img src="'+esc(fv.poster||'')+'" alt="'+esc(fv.title||'')+'">'+(isMe?'<button class="rm" title="Remove">✕</button>':'');
      cell.onclick=(e)=>{if(e.target.classList.contains('rm')){e.stopPropagation();setFavorite(slot,null).then(()=>profilePage(handle));return;}go('/film/'+encodeURIComponent(fv.filmId));};
    }else{
      cell.innerHTML='<span class="plus">'+(isMe?'+':'·')+'</span>';
      if(isMe)cell.onclick=()=>pickFavorite(slot,handle);
    }
    row.appendChild(cell);
  }
  favSec.appendChild(row);wrap.appendChild(favSec);
  // diary grid
  const lib=(d.library||[]).map(r=>r.value);
  const diary=el('div','rail');diary.appendChild(el('h2',null,'🎬 Film diary'));
  if(lib.length){const g=el('div','grid');lib.forEach(x=>g.appendChild(cardEl({id:x.filmId,title:x.title,year:x.year,poster:x.poster})));diary.appendChild(g);}
  else diary.appendChild(el('p','muted','No films logged yet.'));
  wrap.appendChild(diary);
  app.appendChild(wrap);
  document.title=(pr.displayName||handle)+' — Blueboxd';
}
async function setFavorite(slot,film){
  if(film)return jpost('/api/favorite',{slot,filmId:film.id||film.filmId,title:film.title,year:film.year,poster:film.poster});
  return jpost('/api/favorite',{slot,remove:true});
}
function pickFavorite(slot,handle){
  const m=el('div','modal');
  m.innerHTML='<div class="sheet"><h3>Pick favorite #'+slot+'</h3><input class="inp" id="fq" placeholder="Search a film…" autocomplete="off"><div id="fres" class="grid" style="margin-top:12px;max-height:46vh;overflow:auto"></div></div>';
  m.onclick=e=>{if(e.target===m)m.remove();};document.body.appendChild(m);
  const q=m.querySelector('#fq'),res=m.querySelector('#fres');q.focus();
  let t;q.oninput=()=>{clearTimeout(t);const v=q.value.trim();if(v.length<2){res.innerHTML='';return;}t=setTimeout(async()=>{const d=await jget('/api/search?q='+encodeURIComponent(v));res.innerHTML='';(d.docs||[]).slice(0,12).forEach(f=>{const c=cardEl({id:f.id,title:f.title,year:f.year,poster:f.poster});c.onclick=async()=>{const r=await setFavorite(slot,f).catch(()=>({ok:false}));m.remove();if(r&&r.reconnect){toast('Session expired — reconnect Bluesky to pin favorites');loginModal();return;}if(r&&r.ok){toast('Pinned to your favorites ❤️');}else{toast('Could not pin — try again');}profilePage(handle);};res.appendChild(c);});},380);};
}
function staticPage(which){
  const app=$('#app');app.innerHTML='';
  if(which==='tos'){
    app.innerHTML='<div class="legal"><h2>Terms of Use</h2>'
      +'<p class="muted">Last updated June 2026.</p>'
      +'<h3>What Blueboxd is</h3><p>Blueboxd is a free, non-commercial film diary and watch-party layer built on the AT Protocol (Bluesky). We curate films we believe to be in the <b>public domain</b> and stream them <b>directly from the Internet Archive</b>. <b>Blueboxd hosts and stores no video files</b> — we link to and embed archival sources only.</p>'
      +'<h3>Your content</h3><p>Your diary entries, watches, ratings and reviews are written to <b>your own Bluesky repository</b>. You own them and can delete them at any time from your account.</p>'
      +'<h3>Conduct</h3><p>Be decent. Bluesky moderation — mutes, blocks and labels — applies in watch-party reaction walls. We may hide reactions that violate Bluesky community guidelines.</p>'
      +'<h3>Age requirement (18+)</h3><p>Blueboxd is intended for adults <b>18 years of age or older</b>. By using the site you represent that you are at least 18. Films are vintage works and may contain mature, dated, or historically sensitive content. If you are under 18, do not use this site.</p>'
      +'<h3>Third-party content &amp; sources</h3><p>All films stream <b>directly from the Internet Archive (archive.org)</b>, a third party. <b>Blueboxd hosts no video, controls no content, and is not responsible</b> for any material delivered by archive.org or other third parties. Public-domain status is presented in good faith based on available information and is <b>not legal advice</b>. You are responsible for ensuring your use of any title is lawful in your jurisdiction.</p>'
      +'<h3>No warranty (“as is”)</h3><p>The service is provided <b>“as is” and “as available,” free of charge, with no warranties of any kind</b>, express or implied, including (without limitation) merchantability, fitness for a particular purpose, accuracy, or availability. Availability of any title depends on the Internet Archive and may change or disappear without notice.</p>'
      +'<h3>Assumption of risk &amp; limitation of liability</h3><p>You use Blueboxd <b>entirely at your own risk</b>. To the <b>maximum extent permitted by law</b>, Blueboxd, its operator, and its contributors shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages, or any loss whatsoever, arising out of or related to your use of (or inability to use) the site or any content accessed through it. You agree to <b>indemnify and hold harmless</b> Blueboxd and its operator from any claim arising out of your use of the site or your violation of these Terms. Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.</p>'
      +'<h3>Copyright / takedown</h3><p>We respect rights holders. If you believe a title is not actually public domain, see our <a href="/dmca">takedown page</a> — we act fast and remove first, verify after.</p>'
      +'<h3>Changes</h3><p>We may update these Terms. Continued use after changes means you accept the revised Terms.</p></div>';
  } else if(which==='privacy'){
    app.innerHTML='<div class="legal"><h2>Privacy</h2>'
      +'<p class="muted">Last updated June 2026.</p>'
      +'<h3>The short version</h3><p>No tracking. No ads. No selling data. No third-party analytics.</p>'
      +'<h3>What we store</h3><ul>'
      +'<li>An <b>encrypted login session</b> (OAuth/DPoP), expiring in ~14 days.</li>'
      +'<li>A <b>cached public catalog</b> (film metadata, posters) — not personal.</li>'
      +'<li>Anonymous, aggregate <b>playback &amp; search counts</b> to spot broken titles. No identities attached.</li>'
      +'<li>A one-line <b>consent record</b> (timestamp + a random token) when you accept these terms.</li></ul>'
      +'<h3>What we do NOT store</h3><p>Your diary, watches and reviews live in <b>your own Bluesky repo</b>, never our database. We don’t keep your email, contacts, or browsing history.</p>'
      +'<h3>Your control</h3><p>Delete any entry from your account; log out to drop the session. Questions → see the <a href="/dmca">contact page</a>.</p></div>';
  } else if(which==='dmca'){
    dmcaPage(app);
  }
}
function dmcaPage(app){
  app.innerHTML='<div class="legal"><h2>Copyright &amp; Takedown</h2>'
    +'<p>Blueboxd curates films believed to be in the <b>public domain</b> and streams them from the Internet Archive. We store no video. If you are a rights holder and believe a title here is not public domain, tell us — <b>we remove first and verify after</b>.</p>'
    +'<p class="muted">Fastest: DM or reply to <a href="https://bsky.app/profile/blueboxd.bsky.social" target="_blank" rel="noopener">@blueboxd.bsky.social</a> on Bluesky. Or send a notice below.</p>'
    +'<div id="dmcaForm"></div></div>';
  const f=$('#dmcaForm');
  const mk=(ph,id,ta)=>{const w=el('div');w.style.margin='8px 0';const i=ta?el('textarea','inp'):el('input','inp');i.id=id;i.placeholder=ph;if(ta)i.rows=4;w.appendChild(i);return w;};
  f.appendChild(mk('Your name','dmName'));
  f.appendChild(mk('Contact email','dmEmail'));
  f.appendChild(mk('Film title / URL on Blueboxd','dmFilm'));
  f.appendChild(mk('Your claim — why this title should be removed','dmMsg',true));
  const btn=el('button','btn acc','Send takedown notice');btn.style.marginTop='6px';
  const status=el('p','muted');status.style.marginTop='8px';
  btn.onclick=async()=>{
    const name=$('#dmName').value.trim(),email=$('#dmEmail').value.trim(),film=$('#dmFilm').value.trim(),msg=$('#dmMsg').value.trim();
    if(!email||!msg){status.textContent='Please add at least a contact email and your claim.';return;}
    btn.disabled=true;btn.textContent='Sending…';
    const r=await jpost('/api/takedown',{name,email,film,msg}).catch(()=>({}));
    if(r&&r.ok){f.innerHTML='<p class="ok">✓ Notice received. We’ll review and act fast — usually same day. A copy of your claim was logged with a reference id: <b>'+esc(r.ref||'')+'</b></p>';}
    else{btn.disabled=false;btn.textContent='Send takedown notice';status.textContent='Could not send — please reply to @blueboxd on Bluesky instead.';}
  };
  f.append(btn,status);
}


// ---------- /parties listing ----------
async function partiesPage(){
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  let d;try{d=await jget('/api/party/list');}catch(e){app.innerHTML='<div class="center">Couldn\u2019t load parties.</div>';return;}
  app.innerHTML='';
  app.appendChild(el('h2',null,'\uD83C\uDF89 Watch Parties'));
  app.appendChild(el('p','muted','Scheduled group screenings of public-domain classics. Show up, watch together, react live on Bluesky.'));
  const arow=el('div');arow.style.cssText='display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 16px';
  if(ME.loggedIn){
    const start=el('button','btn acc');start.textContent='\uD83C\uDFAC Start a watch party';start.onclick=()=>startPartyModal();arow.appendChild(start);
    const sb=el('button','btn');sb.textContent='\uD83D\uDCE4 Share my party stats';sb.title='Post a branded Blueboxd watch-party stats card';sb.onclick=()=>shareViaApi('/api/share-partystats',{},sb);arow.appendChild(sb);
  } else {
    const start=el('button','btn acc');start.textContent='\uD83C\uDFAC Start a watch party';start.onclick=loginModal;arow.appendChild(start);
  }
  app.appendChild(arow);
  const ps=(d.parties||[]);
  const upcoming=ps.filter(p=>p.phase!=='ended').sort((a,b)=>{
    if(a.phase==='live'&&b.phase!=='live')return -1;
    if(b.phase==='live'&&a.phase!=='live')return 1;
    return new Date(a.startsAt)-new Date(b.startsAt);
  });
  const past=ps.filter(p=>p.phase==='ended');
  if(upcoming.length){
    const hero=upcoming[0];
    app.appendChild(buildPartyHero(hero));
    startHeroCountdown(hero);
    const rest=upcoming.slice(1);
    if(rest.length){
      app.appendChild(el('h2',null,'\uD83D\uDCC5 Also coming up'));
      const g=el('div','rail');g.style.cssText='flex-direction:column;gap:10px;align-items:flex-start';
      rest.forEach(p=>g.appendChild(buildPartyCard(p)));
      app.appendChild(g);
    }
  } else {
    app.appendChild(buildMatineeFixture());
    if(past.length){
      const last=past[0];
      const note=el('p','muted');note.style.margin='2px 0 4px';
      note.innerHTML='No live screening right now \u2014 the next one drops <b>Saturday</b>. Last time the room watched <b>'+esc(last.title||'a classic')+(last.year?' ('+last.year+')':'')+'</b>. \uD83C\uDF7F';
      app.appendChild(note);
    }
  }
  if(past.length){
    const det=el('details','recaps');
    if(past.length<=3)det.open=true;
    const sum=el('summary');sum.innerHTML='<span class="chev">\u25B6</span> \uD83D\uDCFC Recaps & replays <span class="muted" style="font-weight:600;font-size:13px">('+past.length+')</span>';
    det.appendChild(sum);
    const g2=el('div','rail');g2.style.cssText='flex-direction:column;gap:10px;align-items:flex-start';
    past.forEach(p=>g2.appendChild(buildPartyCard(p,true)));
    det.appendChild(g2);
    app.appendChild(det);
  }
}
function buildPartyHero(p){
  const h=el('div','phero');h.dataset.pid=p.id;
  const bg=el('div','bg');if(p.poster)bg.style.backgroundImage='url('+esc(p.poster)+')';h.appendChild(bg);
  h.appendChild(el('div','scrim'));
  const inn=el('div','in');
  if(p.poster){const im=document.createElement('img');im.className='pp';im.src=esc(p.poster);im.alt=esc(p.title||'');inn.appendChild(im);}
  else{const ph=el('div','ppph','\uD83C\uDF9E\uFE0F');inn.appendChild(ph);}
  const m=el('div','meta');
  const live=p.phase==='live';
  const startMs=Date.parse(p.startsAt), soon=!live&&(startMs-Date.now())<=15*60000&&(startMs-Date.now())>0;
  const pill=el('span',live?'live-pill':(soon?'soon-pill':'when-pill'));
  pill.id='heroPill';
  pill.textContent=live?'\uD83D\uDD34 Live now':(soon?'\u23F0 Starting soon':'\uD83D\uDD52 Upcoming');
  m.appendChild(pill);
  m.appendChild(el('h1',null,(p.title||'Watch Party')+(p.year?' ('+p.year+')':'')));
  if(p.theme)m.appendChild(el('div','theme',p.theme));
  const cd=el('div','cd');cd.id='heroCd';m.appendChild(cd);
  const going=el('div','going');going.id='heroGoing';
  const lbl=el('span','lbl');lbl.id='heroGoingLbl';lbl.textContent=(p.rsvpCount||0)+' going';
  going.appendChild(lbl);m.appendChild(going);
  const cta=el('div','cta');
  const rsvpB=el('button','btn acc');rsvpB.textContent=live?'\uD83D\uDD34 Join the room':'\u270B I\u2019m in';
  rsvpB.onclick=async()=>{
    if(live){return go('/party/'+p.id);}
    if(!ME.loggedIn)return needLogin();
    rsvpB.textContent='\u2026';
    const r=await jpost('/api/party/rsvp',{partyId:p.id});
    if(r&&r.ok){rsvpB.textContent='\u2713 You\u2019re in';const gl=$('#heroGoingLbl');if(gl)gl.textContent=r.rsvpCount+' going';rememberReminder(p);toast('See you at showtime \uD83C\uDF7F');hydrateHeroAvatars(p.id);}
  };
  cta.appendChild(rsvpB);
  const openB=el('button','btn');openB.textContent='Open room \u2192';openB.onclick=()=>go('/party/'+p.id);cta.appendChild(openB);
  m.appendChild(cta);
  if(p.hostHandle&&p.hostHandle.indexOf('did:')!==0&&p.hostHandle!=='blueboxd.com'){
    const hb=el('div','host');hb.id='heroHost';hb.textContent='Hosted by @'+p.hostHandle.replace(/\.bsky\.social$/,'');m.appendChild(hb);
  }
  inn.appendChild(m);h.appendChild(inn);
  hydrateHeroAvatars(p.id);
  return h;
}
async function hydrateHeroAvatars(id){
  let p;try{p=await jget('/api/party/get/'+encodeURIComponent(id));}catch(e){return;}
  const going=$('#heroGoing');if(!going)return;
  const avs=(p.rsvpAvatars||[]).filter(Boolean);
  const old=going.querySelector('.avs');if(old)old.remove();
  if(avs.length){
    const strip=el('div','avs');
    avs.slice(0,5).forEach(a=>{
      const av=el('div','av');
      if(a.avatar){av.style.backgroundImage='url('+esc(a.avatar)+')';}
      else{av.textContent=((a.handle||'?')[0]||'?').toUpperCase();}
      av.title=a.handle?('@'+a.handle.replace(/\.bsky\.social$/,'')):'';
      strip.appendChild(av);
    });
    going.insertBefore(strip,going.firstChild);
  }
  const gl=$('#heroGoingLbl');if(gl)gl.textContent=(p.rsvpCount||0)+' going';
}
let _heroCdT=null;
function startHeroCountdown(p){
  if(_heroCdT){clearInterval(_heroCdT);_heroCdT=null;}
  const tick=()=>{
    const cd=$('#heroCd');if(!cd){if(_heroCdT)clearInterval(_heroCdT);return;}
    const now=Date.now(),start=Date.parse(p.startsAt);
    if(p.phase==='live'||now>=start){cd.innerHTML='\uD83D\uDD34 <b>Live now</b> \u2014 the room is watching together.';return;}
    const s=Math.max(0,Math.floor((start-now)/1000));
    const dd=Math.floor(s/86400),h=Math.floor(s%86400/3600),mn=Math.floor(s%3600/60),sec=s%60;
    let str;
    if(dd>0)str=dd+'d '+h+'h '+mn+'m';
    else if(h>0)str='<b>'+h+'h '+mn+'m '+sec+'s</b>';
    else str='<b>'+mn+'m '+sec+'s</b>';
    cd.innerHTML='\u23F3 Starts in '+str;
    const pill=$('#heroPill');
    if(pill&&(start-now)<=15*60000&&(start-now)>0&&!pill.classList.contains('soon-pill')&&!pill.classList.contains('live-pill')){
      pill.className='soon-pill';pill.textContent='\u23F0 Starting soon';
    }
  };
  tick();_heroCdT=setInterval(tick,1000);
}
function buildPartyCard(p,isRecap){
  const c=el('div','pcard');
  if(p.poster){const im=document.createElement('img');im.className='pp';im.src=esc(p.poster);im.alt=esc(p.title||'');im.loading='lazy';c.appendChild(im);}
  else{c.appendChild(el('div','pph','\uD83C\uDF9E\uFE0F'));}
  const b=el('div','b');
  b.appendChild(el('div','ti',(p.title||'')+(p.year?' ('+p.year+')':'')));
  if(p.theme)b.appendChild(el('div','th',p.theme));
  const st=el('div','st');
  if(p.phase==='live')st.innerHTML='<span class="live">\uD83D\uDD34 LIVE NOW</span>';
  else if(isRecap||p.phase==='ended')st.innerHTML='<span class="muted">\uD83D\uDCFC Catch the recap \u2192</span>';
  else st.textContent='\uD83D\uDD52 '+new Date(p.startsAt).toLocaleString([], {weekday:'short',month:'short',day:'numeric',hour:'numeric',minute:'2-digit'});
  b.appendChild(st);
  if(!isRecap&&p.phase!=='ended'&&p.rsvpCount)b.appendChild(el('div','gng','\uD83D\uDC65 '+p.rsvpCount+' going'));
  c.appendChild(b);
  c.onclick=()=>go('/party/'+p.id);
  return c;
}
function buildMatineeFixture(){
  const f=el('div','fixture');
  f.appendChild(el('div','ico','\uD83C\uDF7F'));
  const b=el('div');
  b.appendChild(el('div','ti','Saturday Matinee \u2014 every week'));
  b.appendChild(el('div','su','A fresh public-domain classic screens every Saturday. RSVP when it drops and react live with the room.'));
  f.appendChild(b);
  return f;
}
function rememberReminder(p){
  try{
    const k='bb_remind';
    const cur=JSON.parse(localStorage.getItem(k)||'[]').filter(x=>x&&x.startsAt&&Date.parse(x.startsAt)>Date.now());
    if(!cur.find(x=>x.id===p.id))cur.push({id:p.id,title:p.title,year:p.year,startsAt:p.startsAt});
    localStorage.setItem(k,JSON.stringify(cur));
  }catch(e){}
}

// ---------- /party/:id room ----------
let _wallTimer=null,_partyTimer=null;
function clearPartyTimers(){if(_wallTimer)clearInterval(_wallTimer);if(_partyTimer)clearInterval(_partyTimer);_wallTimer=_partyTimer=null;if(typeof _heroCdT!=="undefined"&&_heroCdT){clearInterval(_heroCdT);_heroCdT=null;}if(window._beaconTimer){clearInterval(window._beaconTimer);window._beaconTimer=null;}_partyVideo=null;}
async function partyRoom(id){
  clearPartyTimers();
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  let p;try{p=await jget('/api/party/get/'+encodeURIComponent(id));}catch(e){app.innerHTML='<div class="center">Couldn’t load this party.</div>';return;}
  if(p.error){app.innerHTML='<div class="center">Party not found.</div>';return;}
  app.innerHTML='';
  document.title=(p.title||'Watch Party')+' — Blueboxd';

  const head=el('div','hero');
  const phase=p.phase==='live'?'🔴 LIVE':(p.phase==='ended'?'Ended':'Starts soon');
  head.innerHTML='<h1>🎬 '+esc(p.title||'')+(p.year?' ('+p.year+')':'')+'</h1><p>'+(p.theme?esc(p.theme)+' · ':'')+phase+' · 👥 <span id="rsvpN">'+p.rsvpCount+'</span> in</p>';
  app.appendChild(head);

  // countdown / status line
  const status=el('div','muted');status.id='pstatus';status.style.margin='4px 0 12px';app.appendChild(status);

  // RSVP + join row
  const row=el('div','actions');
  const rsvpB=el('button','btn acc','✋ I’m in');
  rsvpB.onclick=async()=>{if(!ME.loggedIn)return needLogin();rsvpB.textContent='…';const r=await jpost('/api/party/rsvp',{partyId:id});if(r.ok){$('#rsvpN').textContent=r.rsvpCount;rsvpB.textContent='✓ You’re in';toast('See you at showtime 🍿');}};
  row.appendChild(rsvpB);app.appendChild(row);

  // host credit + host-only controls
  const amHost = ME.loggedIn && ME.did && p.hostDid && ME.did === p.hostDid;
  if(p.hostHandle && p.hostHandle.indexOf('did:')!==0 && p.hostHandle!=='blueboxd.com'){
    const hb=el('div','rhost');
    const hh=esc(p.hostHandle.replace(/\.bsky\.social$/,''));
    if(p.hostAvatar){const av=document.createElement('img');av.className='av';av.src=esc(p.hostAvatar);av.alt=hh;av.loading='lazy';hb.appendChild(av);}
    else{const ph=el('div','avph',(hh[0]||'?').toUpperCase());hb.appendChild(ph);}
    const lbl=el('span');lbl.innerHTML='Hosted by <b>@'+hh+'</b>'+(amHost?' \u00b7 that\u2019s you \ud83c\udfac':'');
    hb.appendChild(lbl);
    app.appendChild(hb);
  }
  if(amHost && p.phase!=='ended' && p.status!=='cancelled'){
    const hostRow=el('div','actions');hostRow.style.cssText='margin:2px 0 8px';
    const cancelB=el('button','btn');cancelB.style.cssText='font-size:13px;opacity:.85';cancelB.textContent='✕ Cancel this party';
    cancelB.onclick=async()=>{
      if(!confirm('Cancel this watch party? Guests will see it as cancelled. This can\u2019t be undone.'))return;
      cancelB.disabled=true;cancelB.textContent='Cancelling…';
      const r=await jpost('/api/party/cancel',{partyId:id});
      if(r&&r.ok){toast('Party cancelled');go('/parties');}
      else{cancelB.disabled=false;cancelB.textContent='✕ Cancel this party';toast((r&&r.error)||'Could not cancel');}
    };
    hostRow.appendChild(cancelB);app.appendChild(hostRow);
  }

  // ---------- SHARE / Bluesky-native interaction ----------
  const partyUrl=location.origin+'/party/'+id;
  const liveThread=p.bskyUri?('https://bsky.app/profile/'+(p.bskyUri.split('/')[2]||'blueboxd.com')+'/post/'+p.bskyUri.split('/').pop()):null;
  const shareTxt='\u{1F4FA} I just joined the Blueboxd watch party for '+(p.title||'a classic')+(p.year?' ('+p.year+')':'')+' \u2014 free + legal public-domain cinema, watched together on Bluesky. Come react live with us \u{1F37F}\\n\\n'+partyUrl+'\\n\\n#Blueboxd #filmsky';
  const share=el('div','actions');share.style.cssText='display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 4px';
  // Share to Bluesky (compose intent — opens app/web composer prefilled)
  // PRIMARY: post a branded Blueboxd party card to the user's Bluesky.
  const cardB=el('button','btn acc');cardB.textContent='\u{1F98B} Share party card';
  cardB.title='Posts a branded Blueboxd party card to your Bluesky';
  cardB.onclick=()=>shareViaApi('/api/share-party',{partyId:id,joined:true},cardB);
  share.appendChild(cardB);
  const bskyB=el('a','btn');bskyB.textContent='\u270F\uFE0F Compose instead';
  bskyB.href='https://bsky.app/intent/compose?text='+encodeURIComponent(shareTxt);
  bskyB.target='_blank';bskyB.rel='noopener';share.appendChild(bskyB);
  // Reply on the live @blueboxd thread (native interaction driver)
  if(liveThread){const tb=el('a','btn');tb.textContent='\u{1F4AC} Reply on Bluesky thread';tb.href=liveThread;tb.target='_blank';tb.rel='noopener';share.appendChild(tb);}
  // Copy link
  const cpB=el('button','btn');cpB.textContent='\u{1F517} Copy invite link';
  cpB.onclick=async()=>{try{await navigator.clipboard.writeText(partyUrl);cpB.textContent='\u2713 Copied';toast('Invite link copied \u2014 paste it to a friend');setTimeout(()=>cpB.textContent='\u{1F517} Copy invite link',1800);}catch(e){toast('Copy failed');}};
  share.appendChild(cpB);
  // Native share sheet (mobile)
  if(navigator.share){const ns=el('button','btn');ns.textContent='\u{1F4E4} Share\u2026';ns.onclick=()=>navigator.share({title:'Blueboxd Watch Party',text:shareTxt,url:partyUrl}).catch(()=>{});share.appendChild(ns);}
  app.appendChild(share);
  app.appendChild(el('p','muted','Every share & reply on Bluesky brings more film fans into the room \u2014 that\u2019s the whole idea. \u{1F98B}'));

  // player host
  const ph=el('div');ph.id='partyPlayer';ph.style.margin='12px 0';app.appendChild(ph);

  // reaction wall
  // pre-show lounge / reaction wall (phase-aware)
  const isPre=p.phase==='scheduled', isLive=p.phase==='live';
  const chatH=el('h2',null,isPre?'🍿 Pre-show lounge':(isLive?'💬 Reaction wall · LIVE':'💬 Reaction wall'));chatH.id='chatHeading';app.appendChild(chatH);
  const chatIntro=el('p','muted');chatIntro.id='chatIntro';chatIntro.textContent=isPre?'Doors are open — say hi, hype the film, and hang out while everyone files in. Chat’s live now; the movie unlocks at showtime.':(isLive?'The room is watching together — react in real time.':'Catch the recap and replies below.');app.appendChild(chatIntro);
  if(ME.loggedIn){
    const rb=el('div');rb.style.display='flex';rb.style.gap='6px';rb.style.margin='6px 0';
    const ri=el('input','inp');ri.placeholder=isPre?'Say hi to the room…':'Drop a reaction…';ri.id='chatInput';ri.maxLength=300;ri.style.flex='1';
    const rsend=el('button','btn acc','Send');
    // P2: auto-RSVP on first chat if the room guard asks for it, then retry once.
    const sendReact=async(payload)=>{let r=await jpost('/api/party/react',payload);if(r&&r.error==='rsvp_required'){const rs=await jpost('/api/party/rsvp',{partyId:id});if(rs&&rs.ok){const rn=$('#rsvpN');if(rn&&rs.rsvpCount!=null)rn.textContent=rs.rsvpCount;toast('You\u2019re in \u2014 welcome to the room \u{1F37F}');r=await jpost('/api/party/react',payload);}else{toast('RSVP to join the chat');}}loadWall(id,true);return r;};
    const send=async()=>{const t=ri.value.trim();if(!t)return;ri.value='';await sendReact({partyId:id,text:t});};
    rsend.onclick=send;ri.onkeydown=e=>{if(e.key==='Enter')send();};
    rb.append(ri,rsend);app.appendChild(rb);
    // quick emoji
    const qr=el('div');qr.style.margin='2px 0 10px';['😂','😱','❤️','🔥','👏','🎬'].forEach(em=>{const b=el('button','tab',em);b.onclick=async()=>{await sendReact({partyId:id,emoji:em,text:em});};qr.appendChild(b);});
    app.appendChild(qr);
  }else{app.appendChild(el('p','muted','Log in to RSVP and react. Replies to the @blueboxd post on Bluesky show up here too.'));}
  const wall=el('div');wall.id='wall';app.appendChild(wall);

  renderPartyState(p);
  loadWall(id,true);
  // refresh party state every 5s (for live/elapsed), wall every 4s
  _partyTimer=setInterval(async()=>{try{const np=await jget('/api/party/get/'+encodeURIComponent(id));renderPartyState(np);}catch(e){}},5000);
  _wallTimer=setInterval(()=>loadWall(id,false),4000);
}
function renderPartyState(p){
  const st=$('#pstatus');if(!st)return;
  const now=Date.now(),start=Date.parse(p.startsAt);
  if(p.phase==='scheduled'){
    const s=Math.max(0,Math.floor((start-now)/1000));
    const h=Math.floor(s/3600),m=Math.floor(s%3600/60),sec=s%60;
    const within60=s<=60, within10=s<=600;
    if(within60){
      st.classList.add('soon');
      st.innerHTML='<span class="golive">⚡ Showtime in <b>'+m+'m '+sec+'s</b></span> — the film unlocks any second. Stay in the room.';
    }else if(within10){
      st.classList.add('soon');
      st.innerHTML='<span class="urgent">⏰ Starting soon · '+m+'m '+sec+'s</span> — grab your snacks, the room is filling up. 🍿';
    }else{
      st.classList.remove('soon');
      st.innerHTML='⏳ Starts in <b>'+(h?h+'h ':'')+m+'m '+sec+'s</b> — the film unlocks at showtime.';
    }
    const ph=$('#partyPlayer');if(ph&&!ph.dataset.locked){ph.dataset.locked='1';ph.innerHTML='<div class="ph" style="aspect-ratio:16/9;display:grid;place-items:center;border-radius:12px">🔒 Opens at showtime</div>';}
  }else if(p.phase==='live'){
    const synced=p.hostFresh?'synced to the host ▶':'synced to the group';
    st.innerHTML='🔴 <b>LIVE</b> · '+fmtElapsed(p.elapsedSec)+' in — '+(ME.isOwner?'<b>you’re hosting</b> — the room follows your player.':'the player is '+synced+'.');
    const ch=$('#chatHeading');if(ch&&ch.dataset.flipped!=='1'){ch.dataset.flipped='1';ch.textContent='💬 Reaction wall · LIVE';const ci=$('#chatIntro');if(ci)ci.textContent='The room is watching together — react in real time.';const cin=$('#chatInput');if(cin)cin.placeholder='Drop a reaction…';if(typeof toast==='function')toast('🔴 Showtime — the film just unlocked!');}
    ensurePartyPlayer(p);
    syncToHost(p);
  }else{
    st.innerHTML='This party has ended. Catch the recap on @blueboxd. 🎬';
  }
}
function fmtElapsed(s){const m=Math.floor(s/60),sec=s%60;return (m?m+'m ':'')+sec+'s';}
var _partyVideo=null;
async function ensurePartyPlayer(p){
  const host=$('#partyPlayer');if(!host||host.dataset.playing)return;
  host.dataset.playing='1';host.dataset.locked='';
  let d;try{d=await jget('/api/detail?id='+encodeURIComponent(p.filmId));}catch(e){return;}
  if(!d.streamUrl){host.innerHTML='<div class="fallback">▶ This title isn’t browser-playable. <a href="'+esc(d.archiveUrl||'#')+'" target="_blank" rel="noopener">Watch on the Internet Archive ↗</a></div>';return;}
  host.innerHTML='';
  const pl=el('div','player');
  const v=el('video');v.controls=true;v.playsInline=true;v.src=d.streamUrl;_partyVideo=v;
  const isHost=ME.isOwner;
  // initial seek: prefer fresh host beacon, else group elapsed time
  const target=(p.hostPos!=null)?p.hostPos:p.elapsedSec;
  v.addEventListener('loadedmetadata',()=>{if(target>2&&target<(v.duration||1e9)){v.currentTime=target;}v.play().catch(()=>{});},{once:true});
  pl.appendChild(v);host.appendChild(pl);
  if(isHost){
    // HOST: beacon true position every 5s so the room follows pauses/seeks, not just wall-clock
    if(window._beaconTimer)clearInterval(window._beaconTimer);
    window._beaconTimer=setInterval(()=>{if(!_partyVideo)return;jpost('/api/party/beacon',{partyId:p.id,pos:_partyVideo.currentTime,paused:_partyVideo.paused}).catch(()=>{});},5000);
  }
  if(ME.loggedIn)jpost('/api/watch',{filmId:p.filmId,title:p.title,partyId:p.id}).catch(()=>{});
}
// VIEWER soft-resync: nudge toward the host's live position when drift >2.5s
function syncToHost(p){
  if(ME.isOwner||!_partyVideo||p.hostPos==null)return;
  const v=_partyVideo;if(v.readyState<1)return;
  const drift=Math.abs(v.currentTime-p.hostPos);
  if(drift>2.5&&p.hostPos<(v.duration||1e9)){v.currentTime=p.hostPos;}
  if(p.hostPaused&&!v.paused){v.pause();}
  else if(!p.hostPaused&&v.paused&&p.phase==='live'){v.play().catch(()=>{});}
}
async function loadWall(id,reset){
  const wall=$('#wall');if(!wall)return;
  const since=reset?0:(wall.dataset.max||0);
  let d;try{d=await jget('/api/party/wall/'+encodeURIComponent(id)+'?since='+since);}catch(e){return;}
  const items=(d.wall||[]);if(!items.length&&!reset)return;
  if(reset)wall.innerHTML='';
  // ambient empty-state: a fresh room shouldn't look dead. Show a gentle prompt (not fake users).
  if(reset && !items.length){
    const ph=el('div');ph.id='wallEmpty';
    ph.style.cssText='padding:16px;border-radius:11px;background:var(--panel2);text-align:center;color:var(--mut);line-height:1.5';
    ph.innerHTML='\ud83c\udf7f <b>Quiet in here\u2026 for now.</b><br>Be the first to drop a reaction \u2014 tap an emoji above or say hi. Replies to the @blueboxd thread on Bluesky land here too. \ud83e\udd8b';
    wall.appendChild(ph);
    return;
  }
  // real reactions arrived \u2014 clear the placeholder
  if(items.length){const pe=$('#wallEmpty');if(pe)pe.remove();}
  if(items.length){const mx=Math.max(...items.map(x=>x.id),Number(wall.dataset.max||0));wall.dataset.max=mx;}
  // prepend newest
  items.sort((a,b)=>a.id-b.id).forEach(it=>{
    const row=el('div');row.style.cssText='padding:8px 10px;border-radius:9px;background:var(--panel2);margin-bottom:6px';
    const who=it.handle?('@'+esc(it.handle.replace(/\.bsky\.social$/,''))):'someone';
    const tag=it.source==='bsky'?' <span class="muted" style="font-size:11px">via Bluesky 🦋</span>':'';
    row.innerHTML='<b style="font-size:13px">'+who+'</b>'+tag+'<div>'+(it.emoji?esc(it.emoji)+' ':'')+esc(it.text||'')+'</div>';
    wall.insertBefore(row,wall.firstChild);
  });
}

// ---------- router ----------
async function aboutPage(){
  const app=$('#app');app.innerHTML='';
  const wrap=el('div','about');
  wrap.innerHTML=\`
    <div class="abouthero">
      <h1>Free public-domain cinema,<br>watched together on Bluesky.</h1>
      <p class="abouttag">Noir, sci-fi, horror, gangster &amp; golden-age classics — streamed free, logged in your own film diary, watched alongside the club in real time.</p>
      <div class="aboutcta" id="aboutCtaRow"></div>
    </div>

    <div class="aboutstats" id="aboutStats" aria-label="Blueboxd community stats">
      <div class="astat"><div class="anum" id="asFilms">—</div><div class="albl">🎞️ films</div></div>
      <div class="astat"><div class="anum" id="asWatched">—</div><div class="albl">✓ watched</div></div>
      <div class="astat"><div class="anum" id="asMembers">—</div><div class="albl">🍿 members</div></div>
      <div class="astat"><div class="anum" id="asReviews">—</div><div class="albl">★ reviews</div></div>
    </div>

    <div class="rail"><h2>🎞️ How it works</h2>
    <div class="howgrid">
      <div class="howcard"><div class="howemoji">🎞️</div><h3>Stream free</h3><p class="muted">Every film plays straight from the <b>Internet Archive</b>. We store no video, run no ads, and never charge a cent.</p></div>
      <div class="howcard"><div class="howemoji">📓</div><h3>Keep a diary</h3><p class="muted">Log what you watch, rate it, write reviews — Letterboxd-style. Your data lives in <b>your own Bluesky repo</b>, not locked in our database.</p></div>
      <div class="howcard"><div class="howemoji">🍿</div><h3>Watch together</h3><p class="muted">See what the club is watching in real time, join scheduled <b>watch parties</b>, and climb the leaderboard.</p></div>
    </div></div>

    <div class="rail"><h2>✨ Everything you can do</h2>
    <div class="featgrid">
      <a class="featcard" data-go="/diary"><div class="fi">📓</div><div class="ft">Film diary</div><div class="fd">Log every watch, rate it, write reviews — your timeline of cinema.</div></a>
      <a class="featcard" data-go="/leaderboard"><div class="fi">🏆</div><div class="ft">Leaderboard</div><div class="fd">Climb the ranks by films watched, reviews and decades explored.</div></a>
      <a class="featcard" data-go="/club"><div class="fi">🍿</div><div class="ft">The Club</div><div class="fd">See what the community is watching right now, in real time.</div></a>
      <a class="featcard" data-go="/parties"><div class="fi">🎉</div><div class="ft">Watch parties</div><div class="fd">Scheduled group screenings — react live, all on Bluesky.</div></a>
      <a class="featcard" data-go="/stats"><div class="fi">📊</div><div class="ft">Your stats</div><div class="fd">Hours watched, favorite eras, taste profile — share a card.</div></a>
      <a class="featcard" data-go="/"><div class="fi">🔖</div><div class="ft">Watchlist &amp; Library</div><div class="fd">Save films for later, keep the ones you love close.</div></a>
    </div></div>

    <div class="rail"><h2>❓ Frequently asked</h2>
    <div class="faq">
      <details><summary>Is this legal?</summary><p>Yes. Every title is in the <b>public domain</b> and streams directly from the <b>Internet Archive</b> — Blueboxd hosts no video. Films are curated for public-domain status in good faith, and there's a one-click <a href="/dmca" data-go="/dmca">takedown</a> path if a rights-holder ever disagrees.</p></details>
      <details><summary>Is it really free?</summary><p>Free, and always will be. No paywall, no ads, no upsell. Tips are optional, never gate anything, and exist only to keep the lights on — no strings.</p></details>
      <details><summary>Where does my data live?</summary><p>In <b>your own Bluesky repo</b>, on the open AT Protocol — not locked in our database. Your diary, ratings and reviews are fully portable and yours to keep, even if Blueboxd vanished tomorrow.</p></details>
      <details><summary>What does "public domain" mean?</summary><p>Works whose copyright has expired (or was never renewed) — free for anyone to watch, share and build on. That's how noir, sci-fi and golden-age classics from cinema's first decades end up here, legally and for free.</p></details>
      <details><summary>How do I add or remove a film?</summary><p>Catalog comes from the Internet Archive's public-domain collections. If something shouldn't be here, file a <a href="/dmca" data-go="/dmca">takedown</a> and it's gone — we honor valid notices.</p></details>
      <details><summary>Who makes this?</summary><p>Blueboxd is built and run by <a href="https://osintnet.uk" target="_blank" rel="noopener">Indica Independent</a> — solo, independent, no VC, no boss. Just code and conviction, in the VPDLNY tradition: information serves people.</p></details>
    </div></div>

    <div class="rail valuesrail"><h2>🛡️ Independent & ad-free</h2>
    <p class="muted">Blueboxd is built and run by <a href="https://osintnet.uk" target="_blank" rel="noopener">Indica Independent</a> — independent OSINT &amp; open tooling, in the VPDLNY tradition: information serves people, never the other way around. No trackers, no data sale, no dark patterns.</p>
    <a class="iimbadge" href="https://osintnet.uk" target="_blank" rel="noopener" title="Created with Creative Clarity — a unique badge on every visit"><img loading="lazy" alt="Created with Creative Clarity — Indica Independent Media" width="400" height="200" src="https://badge.osintnet.uk/badge.svg?dynamic"></a></div>

    <div class="rail"><h2>⚡ Support the project</h2>
    <p class="muted">Blueboxd is free and always will be. If it brought you a good night in, a tip keeps the lights on — no strings.</p>
    <div class="tipwrap">
      <div class="qr"><img alt="Bitcoin / Lightning tip QR" id="tipqr"></div>
      <div class="tipmeta">
        <a class="btn acc" href="https://osintnet.uk/tip" target="_blank" rel="noopener">⚡ Tip in Bitcoin →</a>
        <div class="muted" style="margin-top:8px">Lightning &amp; on-chain · osintnet.uk/tip</div>
      </div>
    </div></div>

    <div class="rail"><h2>🔗 Find us</h2>
    <div class="chiprow">
      <a class="chip" href="https://osintnet.uk" target="_blank" rel="noopener">🌐 osintnet.uk</a>
      <a class="chip" href="https://warheatmap.app" target="_blank" rel="noopener">🗺️ warheatmap.app</a>
      <a class="chip" href="https://discord.osintnet.uk" target="_blank" rel="noopener">🎮 Discord</a>
      <a class="chip" href="https://bsky.app/profile/indica.osintnet.uk" target="_blank" rel="noopener">🦋 @indica.osintnet.uk</a>
    </div>
    <div class="finalcta"><button class="btn acc" data-go="/">🎬 Start watching</button></div></div>
  \`;
  app.appendChild(wrap);
  // QR via public image API pointed at the tip page (no extra JS dep)
  const qr=wrap.querySelector('#tipqr');
  if(qr)qr.src='https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=0&data='+encodeURIComponent('https://osintnet.uk/tip');
  // ── E1: hero CTA buttons ──
  const ctaRow=wrap.querySelector('#aboutCtaRow');
  if(ctaRow){
    const browse=el('button','btn acc','\uD83C\uDFAC Browse films');browse.onclick=()=>go('/');ctaRow.appendChild(browse);
    if(ME&&ME.loggedIn){const d=el('button','btn','\uD83D\uDCD3 My diary');d.onclick=()=>go('/diary');ctaRow.appendChild(d);}
    else{const lg=el('button','btn','\uD83E\uDD8B Log in with Bluesky');lg.onclick=loginModal;ctaRow.appendChild(lg);}
  }
  // E3/E4: route data-go links/cards through the SPA (no full reload)
  wrap.querySelectorAll('[data-go]').forEach(node=>{
    node.style.cursor='pointer';
    node.addEventListener('click',e=>{e.preventDefault();const to=node.getAttribute('data-go');if(to)go(to);});
  });
  // ── E2: live community stat strip (animated count-up) ──
  (async()=>{
    let d=null;try{d=await jget('/api/about-stats');}catch(_){}
    if(!d){const st=document.getElementById('aboutStats');if(st)st.style.display='none';return;}
    const fmt=n=>{n=Number(n)||0;return n>=1000?(n/1000).toFixed(n>=10000?0:1).replace(/\.0$/,'')+'k':String(n);};
    const set=(id,val)=>{const elx=document.getElementById(id);if(!elx)return;const target=Number(val)||0;if(target<=0){elx.textContent='0';return;}const t0=performance.now(),dur=900;const tick=t=>{const k=Math.min(1,(t-t0)/dur);const e=1-Math.pow(1-k,3);elx.textContent=fmt(Math.round(target*e));if(k<1)requestAnimationFrame(tick);};requestAnimationFrame(tick);};
    set('asFilms',d.films);set('asWatched',d.watched);set('asMembers',d.members);set('asReviews',d.reviews);
  })();
  document.title='About — Blueboxd';
}

function setSearchVisible(v){const sb=document.getElementById('searchbox');if(sb)sb.style.display=v?'':'none';}
async function peopleBrowsePage(kind){
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  let d;try{d=await jget('/api/people-all');}catch(e){d=null;}
  if(!d||!d.people||!d.people.length){try{d=await jget('/api/home');}catch(e){app.innerHTML='<div class="center">Couldn\u2019t load.</div>';return;}}
  app.innerHTML='';
  const all=(d.people||[]).filter(p=> kind==='director'? p.role==='director' : p.role!=='director');
  const back=el('div','rail');
  const bb=el('span','seeall','\u2190 Back to home');bb.style.cursor='pointer';bb.onclick=()=>go('/');
  back.appendChild(bb);app.appendChild(back);
  const r=el('div','rail');
  r.appendChild(el('h2',null, kind==='director'?'\uD83C\uDFAC All directors':'\uD83C\uDFAD All stars'));
  r.appendChild(el('p','muted', all.length+(kind==='director'?' directors':' stars')+' \u2014 tap to explore their films.'));
  const pp=el('div','people');pp.style.flexWrap='wrap';
  all.forEach(p=>pp.appendChild(personCard(p)));
  r.appendChild(pp);app.appendChild(r);
}
function route(){
  if(typeof clearPartyTimers==='function'){try{clearPartyTimers();}catch(e){}}
  try{checkPartyReminders();}catch(e){}
  const p=location.pathname;
  // WS4: hide the search bar on person & genre browse pages (Pete's ask)
  setSearchVisible(!(p.startsWith('/person/')||p.startsWith('/genre/')));
  if(p==='/')return home();
  if(p==='/about')return aboutPage();
  if(p.startsWith('/genre/'))return genrePage(decodeURIComponent(p.slice(7)));
  if(p.startsWith('/film/'))return filmPage(decodeURIComponent(p.slice(6)));
  if(p.startsWith('/person/'))return personPage(decodeURIComponent(p.slice(8)));
  if(p.startsWith('/u/'))return profilePage(decodeURIComponent(p.slice(3)));
  if(p==='/diary')return diaryPage();
  if(p==='/stats')return statsPage();
  if(p==='/club')return clubPage();
  if(p==='/parties')return partiesPage();
  if(p==='/leaderboard')return leaderboardPage();
  if(p==='/browse/stars')return peopleBrowsePage('star');
  if(p==='/browse/directors')return peopleBrowsePage('director');
  if(p.startsWith('/party/'))return partyRoom(decodeURIComponent(p.slice(7)));
  if(p==='/tos')return staticPage('tos');
  if(p==='/privacy')return staticPage('privacy');
  if(p==='/dmca')return staticPage('dmca');
  home();
}
function checkPartyReminders(){
  let list=[];try{list=JSON.parse(localStorage.getItem('bb_remind')||'[]');}catch(e){return;}
  if(!list.length)return;
  const now=Date.now();
  list=list.filter(x=>x&&x.startsAt&&Date.parse(x.startsAt)>now-90*60000);
  try{localStorage.setItem('bb_remind',JSON.stringify(list));}catch(e){}
  const soon=list.filter(x=>{const t=Date.parse(x.startsAt)-now;return t>-30*60000&&t<=30*60000;})
                 .sort((a,b)=>Date.parse(a.startsAt)-Date.parse(b.startsAt))[0];
  if(!soon)return;
  if(sessionStorage.getItem('bb_remind_dismiss')===soon.id)return;
  const ex=$('#remindBar');if(ex)ex.remove();
  const bar=el('div');bar.id='remindBar';
  bar.style.cssText='position:fixed;left:0;right:0;bottom:0;z-index:9998;background:linear-gradient(135deg,var(--acc),var(--acc2));color:#fff;padding:11px 14px;display:flex;align-items:center;gap:10px;box-shadow:0 -4px 18px rgba(0,0,0,.28);font-weight:600;font-size:14px';
  const mins=Math.max(0,Math.round((Date.parse(soon.startsAt)-now)/60000));
  const started=Date.parse(soon.startsAt)<=now;
  bar.innerHTML='\uD83C\uDF7F <span style="flex:1">'+(started?'<b>'+esc(soon.title||'Your party')+'</b> is live now \u2014 get in!':'<b>'+esc(soon.title||'Your party')+'</b> starts in '+mins+'m')+'</span>';
  const jb=el('button');jb.textContent='Join \u2192';jb.style.cssText='background:#fff;color:var(--acc);border:none;border-radius:8px;padding:7px 13px;font-weight:800;cursor:pointer';
  jb.onclick=()=>{bar.remove();go('/party/'+soon.id);};
  const xb=el('button');xb.textContent='\u2715';xb.style.cssText='background:transparent;color:#fff;border:none;font-size:16px;cursor:pointer;padding:4px 8px';
  xb.onclick=()=>{try{sessionStorage.setItem('bb_remind_dismiss',soon.id);}catch(e){}bar.remove();};
  bar.append(jb,xb);
  document.body.appendChild(bar);
}

// search
let st;$('#q').addEventListener('input',e=>{clearTimeout(st);const v=e.target.value.trim();st=setTimeout(()=>{if(v.length>=2)searchPage(v);else if(location.pathname==='/')home();},420);});
$('#q').addEventListener('keydown',e=>{if(e.key==='Enter'){const v=e.target.value.trim();if(v)searchPage(v);}});

function showClickwrap(){
  try{ if(localStorage.getItem('bbx_gate_v2')) return; }catch(e){ return; }
  const w=el('div','gate');
  const box=el('div','gatebox');
  box.innerHTML=
    '<div class="gatehd"><div class="gatelogo">\uD83C\uDFAC</div><h2>Welcome to Blueboxd</h2>'+
    '<p class="gatesub">A Bluesky film club for public-domain cinema. Before you enter, please confirm:</p></div>'+
    '<div class="gatebody">'+
      '<ul class="gatelist">'+
        '<li><b>You are 18 or older.</b> This is an adult-access site. Films are vintage public-domain works and may contain mature, dated, or historically sensitive content.</li>'+
        '<li><b>The films are third-party content.</b> Every title streams directly from the Internet Archive (archive.org). Blueboxd hosts no video, controls no content, and is <b>not responsible</b> for material provided by archive.org. Public-domain status is presented in good faith and is not legal advice.</li>'+
        '<li><b>Provided \u201cas is.\u201d</b> The service is offered without warranties of any kind. You use it <b>at your own risk</b>. To the maximum extent permitted by law, Blueboxd and its operator are not liable for any damages arising from your use of the site or any content, and you agree to hold them harmless.</li>'+
        '<li><b>Built into Bluesky \u2014 and safe to sign in.</b> Blueboxd is made by Bluesky users on the open AT Protocol. You log in with your Bluesky account, and <b>we never see or store your password</b> \u2014 your film diary &amp; reviews are saved to <b>your own</b> account, fully portable, yours to keep.</li>'+'<li><b>Rights holders:</b> request removal anytime via our <a href="/dmca" target="_blank" rel="noopener">Takedown</a> page \u2014 we honor valid notices.</li>'+
      '</ul>'+
      '<label class="gatecheck"><input type="checkbox" id="gateck"> <span>I am <b>18 or older</b> and I have read and agree to the <a href="/tos" target="_blank" rel="noopener">Terms</a>, <a href="/privacy" target="_blank" rel="noopener">Privacy Policy</a>, and the disclaimer above.</span></label>'+
    '</div>'+
    '<div class="gatebtns"><button class="btn acc" id="gateok" disabled>I Agree \u2014 Enter</button><button class="btn" id="gateno">Leave</button></div>';
  w.appendChild(box);document.body.appendChild(w);
  const ck=box.querySelector('#gateck'),ok=box.querySelector('#gateok'),no=box.querySelector('#gateno');
  ck.addEventListener('change',()=>{ok.disabled=!ck.checked;});
  ok.onclick=()=>{if(!ck.checked)return;try{localStorage.setItem('bbx_gate_v2',Date.now());}catch(e){} jpost('/api/consent',{v:'gate-v2',age18:true}).catch(()=>{}); w.remove();};
  no.onclick=()=>{location.href='https://archive.org/details/feature_films';};
}
(async()=>{try{ME=await jget('/api/me');if(ME.loggedIn&&ME.handle){try{const _pr=await jget('/api/profile?handle='+encodeURIComponent(ME.handle));if(_pr&&_pr.profile){ME.avatar=_pr.profile.avatar;ME.displayName=_pr.profile.displayName;}}catch(e){}};}catch(e){}authSlot();route();showClickwrap();})();
</script>
</body></html>`;

// worker.js
var APP_ID = "69a76ce1b110c1c0c8c86855";
var CATALOG_API = `https://base44.app/api/apps/${APP_ID}/functions/cinevault`;

// Full people roster (mirrors cinevault PEOPLE order) — used by /api/person enrichment
// and the /browse/stars + /browse/directors "See all" pages. Homepage rows stay curated.
var BBX_ROSTER = [
  { id: "bogart", name: "Humphrey Bogart", role: "star" },
  { id: "cagney", name: "James Cagney", role: "star" },
  { id: "robinson", name: "Edward G. Robinson", role: "star" },
  { id: "mitchum", name: "Robert Mitchum", role: "star" },
  { id: "stanwyck", name: "Barbara Stanwyck", role: "star" },
  { id: "welles", name: "Orson Welles", role: "star" },
  { id: "grant", name: "Cary Grant", role: "star" },
  { id: "gable", name: "Clark Gable", role: "star" },
  { id: "stewart", name: "James Stewart", role: "star" },
  { id: "tracy", name: "Spencer Tracy", role: "star" },
  { id: "karloff", name: "Boris Karloff", role: "star" },
  { id: "lugosi", name: "Bela Lugosi", role: "star" },
  { id: "price", name: "Vincent Price", role: "star" },
  { id: "serling", name: "Rod Serling", role: "star" },
  { id: "garfield", name: "John Garfield", role: "star" },
  { id: "davis", name: "Bette Davis", role: "star" },
  { id: "brent", name: "George Brent", role: "star" },
  { id: "brennan", name: "Walter Brennan", role: "star" },
  { id: "andrews", name: "Dana Andrews", role: "star" },
  { id: "lupino", name: "Ida Lupino", role: "star" },
  { id: "jbennett", name: "Joan Bennett", role: "star" },
  { id: "dpowell", name: "Dick Powell", role: "star" },
  { id: "gford", name: "Glenn Ford", role: "star" },
  { id: "raft", name: "George Raft", role: "star" },
  { id: "widmark", name: "Richard Widmark", role: "star" },
  { id: "lancaster", name: "Burt Lancaster", role: "star" },
  { id: "tierney", name: "Gene Tierney", role: "star" },
  { id: "vlake", name: "Veronica Lake", role: "star" },
  { id: "bacall", name: "Lauren Bacall", role: "star" },
  { id: "crawford", name: "Joan Crawford", role: "star" },
  { id: "rryan", name: "Robert Ryan", role: "star" },
  { id: "hayden", name: "Sterling Hayden", role: "star" },
  { id: "trevor", name: "Claire Trevor", role: "star" },
  { id: "grahame", name: "Gloria Grahame", role: "star" },
  { id: "ford", name: "John Ford", role: "director" },
  { id: "hitchcock", name: "Alfred Hitchcock", role: "director" },
  { id: "hawks", name: "Howard Hawks", role: "director" },
  { id: "wyler", name: "William Wyler", role: "director" },
  { id: "capra", name: "Frank Capra", role: "director" },
  { id: "lang", name: "Fritz Lang", role: "director" },
  { id: "siodmak", name: "Robert Siodmak", role: "director" },
  { id: "amann", name: "Anthony Mann", role: "director" },
  { id: "wilder", name: "Billy Wilder", role: "director" },
  { id: "preminger", name: "Otto Preminger", role: "director" },
  { id: "huston", name: "John Huston", role: "director" },
  { id: "nray", name: "Nicholas Ray", role: "director" },
  { id: "tourneur", name: "Jacques Tourneur", role: "director" },
  { id: "ulmer", name: "Edgar G. Ulmer", role: "director" },
  { id: "jhlewis", name: "Joseph H. Lewis", role: "director" },
  { id: "dassin", name: "Jules Dassin", role: "director" },
];
var BBX_ROSTER_BY_ID = Object.fromEntries(BBX_ROSTER.map(p => [p.id, p]));
var SCOPE = "atproto transition:generic";
var SESSION_TTL = 60 * 60 * 24 * 14;
var json = (o, s = 200, h = {}) => new Response(JSON.stringify(o), { status: s, headers: { "content-type": "application/json", ...h } });
var html = (s, code = 200) => new Response(s, { status: code, headers: { "content-type": "text/html; charset=utf-8" } });
function selfOrigin(env, url) {
  return env.PUBLIC_ORIGIN || `${url.protocol}//${url.host}`;
}
function clientId(origin) {
  return `${origin}/oauth-client-metadata.json`;
}
function redirectUri(origin) {
  return `${origin}/oauth/callback`;
}
function getCookie(req, name) {
  const c = req.headers.get("cookie") || "";
  const m = c.match(new RegExp(`(?:^|; )${name}=([^;]+)`));
  return m ? decodeURIComponent(m[1]) : null;
}
function setCookie(name, val, maxAge) {
  const parts = [`${name}=${encodeURIComponent(val)}`, "Path=/", "HttpOnly", "Secure", "SameSite=Lax"];
  if (maxAge != null) parts.push(`Max-Age=${maxAge}`);
  return parts.join("; ");
}
function loadPrivateJwk(env) {
  if (!env.CLIENT_PRIVATE_JWK) throw new Error("CLIENT_PRIVATE_JWK secret not set");
  const jwk = JSON.parse(env.CLIENT_PRIVATE_JWK);
  if (!jwk.kid) jwk.kid = "cineclub-key-1";
  return jwk;
}
async function loadSession(req, env) {
  const signed = getCookie(req, "cc_sid");
  if (!signed) return null;
  const sid = await verifySid(env.SESSION_SECRET, signed);
  if (!sid) return null;
  const packed = await env.CC_KV.get(`sess:${sid}`);
  if (!packed) return null;
  let sess;
  try {
    sess = await decryptBlob(env.SESSION_SECRET, packed);
  } catch {
    return null;
  }
  sess._sid = sid;
  // Only proactively refresh when the token is ACTUALLY expired (was 60s-before, which
  // raced 4 rapid clicks into concurrent refreshes -> token rotation -> 400 invalid_grant).
  // If refresh fails here, keep the current token; the reactive path in putRecord/createRecord
  // will retry once and, if still dead, signal reconnect to the client.
  if (sess.expires_at && Date.now() > sess.expires_at && sess.refresh_token) {
    try {
      const meta = await resolveAuthServer(sess.pds);
      const { tokens, dpopNonce } = await refreshTokens({
        meta,
        clientId: clientId(sess.origin),
        refreshToken: sess.refresh_token,
        privateJwk: loadPrivateJwk(env),
        dpop: sess.dpop,
        nonce: sess.dpopNonce
      });
      sess.access_token = tokens.access_token;
      if (tokens.refresh_token) sess.refresh_token = tokens.refresh_token;
      sess.expires_at = Date.now() + (tokens.expires_in || 3600) * 1e3;
      if (dpopNonce) sess.dpopNonce = dpopNonce;
      await saveSession(env, sid, sess);
    } catch (e) {
      slog({ev:"auth",step:"loadSession_refresh",status:"fail",err:String(e&&e.oauthError||e&&e.message||e)});
    }
  }
  return sess;
}
async function saveSession(env, sid, sess) {
  const { _sid, ...clean } = sess;
  await env.CC_KV.put(`sess:${sid}`, await encryptBlob(env.SESSION_SECRET, clean), { expirationTtl: SESSION_TTL });
}
async function touchNonce(env, sess, newNonce) {
  if (newNonce && newNonce !== sess.dpopNonce) {
    sess.dpopNonce = newNonce;
    await saveSession(env, sess._sid, sess);
  }
}
async function fetchFollows(sess) {
  const dids = [];
  let cursor = "";
  for (let i = 0; i < 5; i++) {
    const u = `https://public.api.bsky.app/xrpc/app.bsky.graph.getFollows?actor=${encodeURIComponent(sess.did)}&limit=100${cursor ? "&cursor=" + encodeURIComponent(cursor) : ""}`;
    let data = null;
    try {
      const r = await fetch(u);
      data = await r.json();
    } catch {
      break;
    }
    if (!data || !Array.isArray(data.follows)) break;
    for (const f of data.follows) if (f.did) dids.push(f.did);
    if (!data.cursor) break;
    cursor = data.cursor;
  }
  return dids;
}

// ── Shared rail master builder: de-dupe (by id + variant) + per-genre curation.
// Cached under hc:railmaster2:<id>. Used by /api/rail AND the home featured rail.
async function buildRailMaster(env, id) {
  const mk = "hc:railmaster2:" + id;
  let master = await env.CC_KV.get(mk, "json");
  if (master) return master;
  const full = await catalog("rail", { id, rows: 500 });
  // Poisoned archive items: filename says one film, metadata resolves to another.
  // Drop them so they can never headline a rail. (e.g. doa_ipod -> "The Wizard of Oz")
  const BAD_IDS = new Set(["doa_ipod"]);
  const seen = new Set();
  const byId = [];
  for (const f of (full && Array.isArray(full.docs) ? full.docs : [])) {
    const fid = f && f.id;
    if (!fid || seen.has(fid) || BAD_IDS.has(fid)) continue;
    seen.add(fid);
    byId.push(f);
  }
  const nkey = (f) => {
    let t = String(f.title || "").toLowerCase();
    t = t.replace(/\(\s*\d{4}\s*\)/g, " ");
    t = t.replace(/\b(?:19|20)\d{2}\b/g, " ");
    t = t.replace(/[^a-z0-9 ]+/g, " ");
    t = t.replace(/\b(?:the|a|an|of|and|de|le|la)\b/g, " ");
    t = t.replace(/\b(?:full|movie|film|hd|hq|restored|remastered|color|colour|colorized|colourized|complete|version|public|domain|avi|mp4|mkv|720p|1080p|ipod|subtitles?|subtitled|subbed|subs|english|engsubs?|with)\b/g, " ");
    t = t.replace(/\s+/g, " ").trim();
    const y = f.year ? String(f.year) : "";
    return t ? (t + "|" + y) : ("id:" + f.id);
  };
  const better = (a, b) => {
    const ap = a.poster ? 1 : 0, bp = b.poster ? 1 : 0;
    if (ap !== bp) return ap > bp ? a : b;
    const al = (a.blurb || "").length, bl = (b.blurb || "").length;
    if (Math.abs(al - bl) > 40) return al > bl ? a : b;
    const ad = Number(a.downloads || 0), bd = Number(b.downloads || 0);
    return ad >= bd ? a : b;
  };
  const clusters = new Map();
  const order = [];
  for (const f of byId) {
    const k = nkey(f);
    if (clusters.has(k)) { clusters.set(k, better(clusters.get(k), f)); }
    else { clusters.set(k, f); order.push(k); }
  }
  const docs = order.map((k) => clusters.get(k));
  master = { label: (full && full.label) || id, total: docs.length, docs };
  if (id === "noir") {
    master.label = "\uD83C\uDF03 Noir City";
    const NOIR_HEAD = [
      "scarlet street","detour","the killers","laura","d o a","d.o.a","doa",
      "kiss me deadly","the big heat","gilda","this gun for hire","the killing",
      "shadow of a doubt","the stranger","the lost weekend","quicksand","kansas city confidential",
      "the red house","the chase","he walked by night","the glass key","spellbound"
    ];
    const norm = (t) => String(t || "").toLowerCase().replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
    const headMatch = (f) => {
      const n = norm(f.title);
      for (let i = 0; i < NOIR_HEAD.length; i++) { if (n === NOIR_HEAD[i] || n.indexOf(NOIR_HEAD[i] + " ") === 0) return NOIR_HEAD[i]; }
      return null;
    };
    // Targeted canonical merge: one best copy per head-classic (kills credit-laden dupes).
    {
      const headBest = new Map();   // head phrase -> best film
      const rest = [];
      for (const f of master.docs) {
        const h = headMatch(f);
        if (h) {
          const cur = headBest.get(h);
          if (!cur) headBest.set(h, f);
          else {
            const cp = cur.poster ? 1 : 0, fp = f.poster ? 1 : 0;
            const cd = Number(cur.downloads || 0), fd = Number(f.downloads || 0);
            if (fp > cp || (fp === cp && fd > cd)) headBest.set(h, f);
          }
        } else rest.push(f);
      }
      // Clean display titles for the head classics (cards read crisp on the marquee).
      const PRETTY = {
        "scarlet street":"Scarlet Street (1945)","detour":"Detour (1945)","the killers":"The Killers (1946)",
        "laura":"Laura (1944)","d o a":"D.O.A. (1950)","kiss me deadly":"Kiss Me Deadly (1955)",
        "the big heat":"The Big Heat (1953)","gilda":"Gilda (1946)","this gun for hire":"This Gun for Hire (1942)",
        "the killing":"The Killing (1956)","shadow of a doubt":"Shadow of a Doubt (1943)","the stranger":"The Stranger (1946)",
        "the lost weekend":"The Lost Weekend (1945)","quicksand":"Quicksand (1950)","kansas city confidential":"Kansas City Confidential (1952)",
        "the red house":"The Red House (1947)","the chase":"The Chase (1946)","he walked by night":"He Walked by Night (1948)",
        "the glass key":"The Glass Key (1942)","spellbound":"Spellbound (1945)"
      };
      for (const [h, f] of headBest.entries()) { if (PRETTY[h]) f.title = PRETTY[h]; }
      master.docs = [...headBest.values(), ...rest];
      master.total = master.docs.length;
    }
    const score = (f) => {
      const n = norm(f.title);
      for (let i = 0; i < NOIR_HEAD.length; i++) { if (n.indexOf(NOIR_HEAD[i]) === 0 || n === NOIR_HEAD[i]) return i; }
      return 999;
    };
    master.docs = master.docs.slice().sort((a, b) => {
      const sa = score(a), sb = score(b);
      if (sa !== sb) return sa - sb;
      return Number(b.downloads || 0) - Number(a.downloads || 0);
    });
  }
  if (docs.length) { try { await env.CC_KV.put(mk, JSON.stringify(master), { expirationTtl: 900 }); } catch (e) {} }
  return master;
}
async function buildNoirMaster(env) { return buildRailMaster(env, "noir"); }

async function bbxPortrait(env, name){
  try{
    if(!name || !env.TMDB_API_KEY) return null;
    const ck = "pt:" + String(name).toLowerCase();
    let cached=null; try{ cached = await env.CC_KV.get(ck,"json"); }catch(e){}
    if(cached && cached.ok && cached.portrait) return cached.portrait;
    if(cached && cached.ok===false) return null;
    const pu=new URL("https://api.themoviedb.org/3/search/person");
    pu.searchParams.set("query",name); pu.searchParams.set("include_adult","false");
    const pr=await fetch(pu.toString(),{headers:{Authorization:"Bearer "+env.TMDB_API_KEY}});
    if(!pr.ok) return null;
    const pj=await pr.json();
    const hit=(pj.results||[]).find(x=>x&&x.profile_path)||null;
    const out=hit?{ok:true,portrait:"https://image.tmdb.org/t/p/w300"+hit.profile_path}:{ok:false};
    try{ await env.CC_KV.put(ck,JSON.stringify(out),{expirationTtl:60*60*24*30}); }catch(e){}
    return out.ok?out.portrait:null;
  }catch(e){ return null; }
}

async function catalog(action, params = {}) {
  const r = await fetch(CATALOG_API, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ action, ...params })
  });
  // cinevault returns 404 for deny/unverified films BY DESIGN — pass that JSON through
  // (it carries {error:"unverified",verified:false}). Only treat 5xx / network as failure.
  if (r.status === 404) {
    try { return await r.json(); } catch (e) { return { error: "unverified", verified: false }; }
  }
  if (!r.ok) throw new Error(`catalog ${action} ${r.status}`);
  return r.json();
}

// ═══ Phase 3 — playback/search observability (D1 telemetry, app-local) ═══════
let __schemaReady = false;
async function ensureSchema(env){
  if (__schemaReady) return;
  try {
    await env.CC_SOCIAL.batch([
      env.CC_SOCIAL.prepare(`CREATE TABLE IF NOT EXISTS play_events (id INTEGER PRIMARY KEY AUTOINCREMENT, film_id TEXT, title TEXT, action TEXT, reason TEXT, device TEXT, ts INTEGER)`),
      env.CC_SOCIAL.prepare(`CREATE INDEX IF NOT EXISTS idx_play_film ON play_events(film_id)`),
      env.CC_SOCIAL.prepare(`CREATE INDEX IF NOT EXISTS idx_play_action ON play_events(action)`),
      env.CC_SOCIAL.prepare(`CREATE TABLE IF NOT EXISTS search_events (id INTEGER PRIMARY KEY AUTOINCREMENT, q TEXT, results INTEGER, device TEXT, ts INTEGER)`),
      env.CC_SOCIAL.prepare(`CREATE INDEX IF NOT EXISTS idx_search_q ON search_events(q)`),
      env.CC_SOCIAL.prepare(`CREATE TABLE IF NOT EXISTS petes_picks (film_id TEXT PRIMARY KEY, title TEXT, poster TEXT, year TEXT, note TEXT, sort INTEGER, ts INTEGER)`),
      env.CC_SOCIAL.prepare(`CREATE INDEX IF NOT EXISTS idx_picks_sort ON petes_picks(sort)`),
      env.CC_SOCIAL.prepare(`CREATE TABLE IF NOT EXISTS consent_log (id INTEGER PRIMARY KEY AUTOINCREMENT, token TEXT, version TEXT, ua TEXT, ts INTEGER)`),
      env.CC_SOCIAL.prepare(`CREATE TABLE IF NOT EXISTS takedowns (id INTEGER PRIMARY KEY AUTOINCREMENT, ref TEXT, name TEXT, email TEXT, film TEXT, msg TEXT, status TEXT DEFAULT 'open', ts INTEGER)`),
      env.CC_SOCIAL.prepare(`CREATE TABLE IF NOT EXISTS lb_snapshots (day TEXT, did TEXT, rank INTEGER, score INTEGER, PRIMARY KEY(day, did))`),
      env.CC_SOCIAL.prepare(`CREATE INDEX IF NOT EXISTS idx_lbsnap_day ON lb_snapshots(day)`),
    ]);
    // Phase 6: host position beacon columns (idempotent — ignore "duplicate column")
    for (const col of ["host_pos REAL", "host_pos_at INTEGER", "host_paused INTEGER", "host_did TEXT", "host_handle TEXT", "reminder_sent INTEGER", "live_sent INTEGER"]) {
      try { await env.CC_SOCIAL.prepare(`ALTER TABLE parties ADD COLUMN ${col}`).run(); } catch(e){}
    }
    // Leaderboard opt-out flag on members (idempotent).
    try { await env.CC_SOCIAL.prepare(`ALTER TABLE members ADD COLUMN lb_optout INTEGER DEFAULT 0`).run(); } catch(e){}
    __schemaReady = true;
  } catch (e) { /* non-fatal: telemetry must never break the app */ }
}
function deviceHash(req){
  try {
    const ua = req.headers.get("user-agent") || "";
    const ip = req.headers.get("cf-connecting-ip") || "";
    let h = 0; const str = ua + "|" + ip;
    for (let i=0;i<str.length;i++){ h = ((h<<5)-h + str.charCodeAt(i))|0; }
    return "d"+(h>>>0).toString(36);
  } catch(e){ return "d0"; }
}

async function bskyActorProfile(handleOrDid){
  try {
    const u = "https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=" + encodeURIComponent(handleOrDid);
    const r = await fetch(u, { cf: { cacheTtl: 300 } });
    if (!r.ok) return null;
    const j = await r.json();
    return { displayName: j.displayName||"", description: j.description||"", avatar: j.avatar||"", banner: j.banner||"", followers: j.followersCount||0, following: j.followsCount||0 };
  } catch(e){ return null; }
}
var worker_default = {
  // CRON: pull native Bluesky replies into live party walls. Self-gates cheaply.
  async scheduled(event, env, ctx) {
    ctx.waitUntil(pollLiveParties(env).catch(() => {}));
    ctx.waitUntil(partyLifecycle(env).catch(() => {}));   // showtime reminders + LIVE auto-announce
    ctx.waitUntil(ensureSchema(env).catch(() => {}));
    ctx.waitUntil(scanWatchParties(env).catch(() => {}));  // discovery (self-throttled ~7min)
    ctx.waitUntil(pollMentions(env).catch(() => {}));       // opt-in invite replies (self-throttled ~3min)
    ctx.waitUntil(dailyRoundup(env).catch(() => {}));       // once/day own-feed roundup
  },
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const origin = selfOrigin(env, url);
    // ── Latency-critical OAuth discovery endpoints: serve IMMEDIATELY, before any D1/KV work.
    // Bluesky fetches these during the redirect handshake and enforces a short timeout; if they
    // lag behind ensureSchema()/cron contention the login redirect stalls ("You are being
    // redirected…" hangs). These are pure static JSON — no env state needed.
    if (path === "/oauth-client-metadata.json") {
      return json({
        client_id: clientId(origin),
        client_name: "Blueboxd",
        client_uri: origin,
        logo_uri: `${origin}/logo.png`,
        tos_uri: `${origin}/tos`,
        policy_uri: `${origin}/privacy`,
        redirect_uris: [redirectUri(origin)],
        scope: SCOPE,
        grant_types: ["authorization_code", "refresh_token"],
        response_types: ["code"],
        application_type: "web",
        token_endpoint_auth_method: "private_key_jwt",
        token_endpoint_auth_signing_alg: "ES256",
        dpop_bound_access_tokens: true,
        jwks_uri: `${origin}/.well-known/jwks.json`
      }, 200, { "cache-control": "public, max-age=3600" });
    }
    if (path === "/.well-known/jwks.json") {
      const pub = publicJwkFromPrivate(loadPrivateJwk(env));
      return json({ keys: [pub] }, 200, { "cache-control": "public, max-age=3600" });
    }
    if (path === "/.well-known/atproto-did") {
      return new Response(OWNER_DID, { headers: { "content-type": "text/plain", "cache-control": "public, max-age=3600" } });
    }
    try {
      ctx.waitUntil(ensureSchema(env));
      if (path === "/health" || path === "/__health") return new Response("ok");
      if (path === "/og-default.png") {
        return Response.redirect("https://media.base44.com/images/public/69a76ce1b110c1c0c8c86855/b7f428e32_generated_image.png", 302);
      }
      if (path === "/logo.png") {
        const bin = Uint8Array.from(atob(LOGO_B64), c => c.charCodeAt(0));
        return new Response(bin, { headers: { "content-type": "image/png", "cache-control": "public, max-age=86400" } });
      }
      if (path === "/login") {
        const handle = (url.searchParams.get("handle") || "").trim();
        if (!handle) return Response.redirect(`${origin}/?needhandle=1`, 302);
        const did = await resolveHandleToDid(handle);
        if (!did) return html(errPage("Couldn\u2019t find that Bluesky handle. Double-check it (e.g. yourname.bsky.social)."), 400);
        const didDoc = await resolveDidDoc(did);
        const pds = didDoc && pdsFromDidDoc(didDoc);
        if (!pds) return html(errPage("Could not locate your data server (PDS)."), 400);
        const meta = await resolveAuthServer(pds);
        const pkce = await makePkce();
        const state = randB64url(24);
        const dpop = await generateDpopKeypair();
        const priv = loadPrivateJwk(env);
        const { requestUri, dpopNonce } = await pushAuthorizationRequest({
          meta,
          clientId: clientId(origin),
          redirectUri: redirectUri(origin),
          scope: SCOPE,
          state,
          pkce,
          loginHint: handle,
          privateJwk: priv,
          dpop
        });
        await env.CC_KV.put(`flow:${state}`, JSON.stringify({
          did,
          pds,
          handle,
          origin,
          issuer: meta.issuer,
          token_endpoint: meta.token_endpoint,
          pkce,
          dpop,
          dpopNonce
        }), { expirationTtl: 600 });
        return Response.redirect(buildAuthorizeUrl({ meta, clientId: clientId(origin), requestUri }), 302);
      }
      if (path === "/oauth/callback") {
        const code = url.searchParams.get("code");
        const state = url.searchParams.get("state");
        const oerr = url.searchParams.get("error");
        if (oerr) return html(errPage(`Login was cancelled or failed (${oerr}).`), 400);
        if (!code || !state) return html(errPage("Missing login code."), 400);
        const raw = await env.CC_KV.get(`flow:${state}`);
        if (!raw) return html(errPage("Login session expired \u2014 please try again."), 400);
        const flow = JSON.parse(raw);
        await env.CC_KV.delete(`flow:${state}`);
        const _t0 = Date.now();
        slog({ev:"oauth",step:"callback_start",did:flow.did});
        const meta = await resolveAuthServer(flow.pds);
        const { tokens, dpopNonce } = await exchangeCode({
          meta,
          clientId: clientId(origin),
          redirectUri: redirectUri(origin),
          code,
          pkce: flow.pkce,
          privateJwk: loadPrivateJwk(env),
          dpop: flow.dpop,
          initialNonce: flow.dpopNonce
        });
        const sid = randB64url(24);
        const sess = {
          did: tokens.sub || flow.did,
          handle: flow.handle,
          pds: flow.pds,
          origin,
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
          expires_at: Date.now() + (tokens.expires_in || 3600) * 1e3,
          dpop: flow.dpop,
          dpopNonce: dpopNonce || flow.dpopNonce
        };
        await saveSession(env, sid, sess);
        ctx.waitUntil(upsertMember(env, sess.did, sess.handle));
        const cookie = setCookie("cc_sid", await signSid(env.SESSION_SECRET, sid), SESSION_TTL);
        slog({ev:"oauth",step:"callback_done",ms:Date.now()-_t0,did:sess.did});
        return new Response(null, { status: 302, headers: { Location: `${origin}/`, "Set-Cookie": cookie } });
      }
      if (path === "/logout") {
        const signed = getCookie(request, "cc_sid");
        if (signed) {
          const sid = await verifySid(env.SESSION_SECRET, signed);
          if (sid) await env.CC_KV.delete(`sess:${sid}`);
        }
        return new Response(null, { status: 302, headers: { Location: `${origin}/`, "Set-Cookie": setCookie("cc_sid", "", 0) } });
      }
      if (path === "/api/me") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ loggedIn: false });
        return json({ loggedIn: true, did: sess.did, handle: sess.handle, isOwner: sess.did === OWNER_DID });
      }
      if (path === "/api/discovery") {
        const d = await getDiscovery(env);
        return json(d, 200, { "cache-control": "public, max-age=120" });
      }
      if (path === "/api/about-stats") {
        try { const hit = await env.CC_KV.get("about:stats", "json"); if (hit) return json(hit, 200, { "cache-control": "public, max-age=300" }); } catch (_) {}
        let films=0,watched=0,members=0,reviews=0;
        try {
          await ensureSchema(env);
          const r = await env.CC_SOCIAL.prepare(`SELECT COUNT(DISTINCT film_id) AS films, SUM(CASE WHEN kind='watch' THEN 1 ELSE 0 END) AS watched, COUNT(DISTINCT did) AS members, SUM(CASE WHEN kind='review' THEN 1 ELSE 0 END) AS reviews FROM watch_index`).first();
          if (r) { films=r.films||0; watched=r.watched||0; members=r.members||0; reviews=r.reviews||0; }
        } catch (e) { slog({ev:"about",step:"stats_fail",err:String(e&&e.message||e)}); }
        const out={films,watched,members,reviews,at:Date.now()};
        try { await env.CC_KV.put("about:stats", JSON.stringify(out), { expirationTtl: 600 }); } catch (_) {}
        return json(out, 200, { "cache-control": "public, max-age=300" });
      }
      if (path === "/api/picks") {
        await ensureSchema(env);
        const rs = await env.CC_SOCIAL.prepare(`SELECT film_id, title, poster, year, note, sort FROM petes_picks ORDER BY sort ASC, ts DESC LIMIT 60`).all().catch(()=>({results:[]}));
        return json({ picks: rs.results || [] }, 200, { "cache-control": "public, max-age=60" });
      }
      if (path === "/api/picks/set" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        if (sess.did !== OWNER_DID) return json({ error: "owner only" }, 403);
        await ensureSchema(env);
        const b = await request.json();
        const fid = String(b.filmId||"").slice(0,120);
        if (!fid) return json({ error: "no film" }, 400);
        if (b.remove) {
          await env.CC_SOCIAL.prepare(`DELETE FROM petes_picks WHERE film_id=?`).bind(fid).run();
          return json({ ok: true, removed: true });
        }
        await env.CC_SOCIAL.prepare(
          `INSERT INTO petes_picks (film_id, title, poster, year, note, sort, ts) VALUES (?,?,?,?,?,?,?)
           ON CONFLICT(film_id) DO UPDATE SET title=excluded.title, poster=excluded.poster, year=excluded.year, note=excluded.note, sort=excluded.sort`
        ).bind(fid, String(b.title||"").slice(0,200), String(b.poster||"").slice(0,400), String(b.year||""), String(b.note||"").slice(0,280), Number(b.sort)||0, Date.now()).run();
        return json({ ok: true });
      }
      if (path === "/api/consent" && request.method === "POST") {
        await ensureSchema(env);
        const b = await request.json().catch(()=>({}));
        const token = crypto.randomUUID();
        await env.CC_SOCIAL.prepare(`INSERT INTO consent_log (token,version,ua,ts) VALUES (?,?,?,?)`)
          .bind(token, String(b.v||"v1"), (request.headers.get("user-agent")||"").slice(0,200), Date.now()).run().catch(()=>{});
        return json({ ok: true, token });
      }
      if (path === "/api/takedown" && request.method === "POST") {
        await ensureSchema(env);
        const b = await request.json().catch(()=>({}));
        const email = String(b.email||"").slice(0,200);
        const msg = String(b.msg||"").slice(0,2000);
        if (!email || !msg) return json({ error: "missing" }, 400);
        const ref = "TD-" + Date.now().toString(36).toUpperCase();
        await env.CC_SOCIAL.prepare(`INSERT INTO takedowns (ref,name,email,film,msg,ts) VALUES (?,?,?,?,?,?)`)
          .bind(ref, String(b.name||"").slice(0,200), email, String(b.film||"").slice(0,400), msg, Date.now()).run().catch(()=>{});
        try {
          if (env.SCRAMBLEMEBOT_TOKEN && env.PETE_CHAT_ID) {
            const t = "🚨 Blueboxd TAKEDOWN " + ref + "\nFilm: " + (b.film||"(none)") + "\nFrom: " + (b.name||"") + " <" + email + ">\n\n" + msg.slice(0,500);
            ctx.waitUntil(fetch("https://api.telegram.org/bot" + env.SCRAMBLEMEBOT_TOKEN + "/sendMessage", {
              method: "POST", headers: { "content-type": "application/json" },
              body: JSON.stringify({ chat_id: env.PETE_CHAT_ID, text: t })
            }).catch(()=>{}));
          }
        } catch(e){}
        return json({ ok: true, ref });
      }
      if (path === "/api/playlog" && request.method === "POST") {
        try {
          const b = await request.json().catch(() => ({}));
          const action = String(b.action || "").slice(0, 24);
          if (!action) return json({ ok: false }, 400);
          await ensureSchema(env);
          ctx.waitUntil(env.CC_SOCIAL.prepare(
            `INSERT INTO play_events (film_id, title, action, reason, device, ts) VALUES (?,?,?,?,?,?)`
          ).bind(String(b.filmId||"").slice(0,120), String(b.title||"").slice(0,200), action, String(b.reason||"").slice(0,80), deviceHash(request), Date.now()).run().catch(()=>{}));
          return json({ ok: true });
        } catch(e){ return json({ ok: false }); }
      }
      if (path === "/api/searchlog" && request.method === "POST") {
        try {
          const b = await request.json().catch(() => ({}));
          const q = String(b.q || "").slice(0, 120);
          if (!q) return json({ ok: false }, 400);
          await ensureSchema(env);
          ctx.waitUntil(env.CC_SOCIAL.prepare(
            `INSERT INTO search_events (q, results, device, ts) VALUES (?,?,?,?)`
          ).bind(q, Number(b.results)||0, deviceHash(request), Date.now()).run().catch(()=>{}));
          return json({ ok: true });
        } catch(e){ return json({ ok: false }); }
      }
      if (path === "/api/health/playback") {
        await ensureSchema(env);
        const since = Date.now() - 1000*60*60*24*7;
        const totals = await env.CC_SOCIAL.prepare(
          `SELECT action, COUNT(*) n FROM play_events WHERE ts>? GROUP BY action`
        ).bind(since).all().catch(()=>({results:[]}));
        const offenders = await env.CC_SOCIAL.prepare(
          `SELECT film_id, title, COUNT(*) fails FROM play_events WHERE ts>? AND action IN ('fail','unplayable') GROUP BY film_id ORDER BY fails DESC LIMIT 40`
        ).bind(since).all().catch(()=>({results:[]}));
        const zeroSearch = await env.CC_SOCIAL.prepare(
          `SELECT q, COUNT(*) n FROM search_events WHERE ts>? AND results=0 GROUP BY q ORDER BY n DESC LIMIT 25`
        ).bind(since).all().catch(()=>({results:[]}));
        const tmap = {}; for (const r of (totals.results||[])) tmap[r.action]=r.n;
        const attempts = (tmap.attempt||0);
        const fails = (tmap.fail||0)+(tmap.unplayable||0);
        const rate = attempts ? Math.round((1-(fails/attempts))*1000)/10 : null;
        return json({
          window: "7d",
          play: tmap,
          success_rate_pct: rate,
          worst_films: offenders.results||[],
          zero_result_searches: zeroSearch.results||[]
        }, 200, { "cache-control": "no-store" });
      }
      if (path === "/api/home") {
        const hk = "hc:home";
        const hit = await env.CC_KV.get(hk, "json");
        if (hit) return json(hit, 200, { "cache-control": "public, max-age=120", "x-bbx-cache": "hit" });
        const data = await catalog("home");
        if (data && Array.isArray(data.rails)) {
          data.rails = data.rails.map(rl => {
            const docs = rl.docs || rl.films || [];
            return { ...rl, docs, total: (typeof rl.total === "number" ? rl.total : docs.length) };
          });
          // COUNT RECONCILE: the upstream "home" action returns raw archive hit-counts
          // (e.g. Comedy=127k) which disagree with the deduped category page. Recompute
          // each rail's total from buildRailMaster — the SAME source the /api/rail
          // browse page uses — so the number on the marquee matches the number inside.
          await Promise.all(data.rails.map(async (rl) => {
            if (!rl.id) return;
            try {
              const m = await buildRailMaster(env, rl.id);
              if (m && typeof m.total === "number") rl.total = m.total;
            } catch (e) {}
          }));
          // ── CROSS-RAIL DEDUP (touch docs only, never total) ──────────────
          // A film tagged multiple genres was showing in each rail (e.g. Scarlet
          // Street in Noir + Thriller). Walk rails in order, keep a global seen-set
          // by id AND normalized title-key, drop repeats, backfill from each rail's
          // master so every rail still shows a full 5. Headers keep their true total.
          try {
            const _nkey = (t, y) => {
              t = String(t || "").toLowerCase();
              t = t.replace(/\(\s*\d{4}\s*\)/g, " ").replace(/\b(?:19|20)\d{2}\b/g, " ");
              t = t.replace(/[^a-z0-9 ]+/g, " ").replace(/\b(?:the|a|an|of|and|de|le|la)\b/g, " ");
              t = t.replace(/\s+/g, " ").trim();
              return t ? (t + "|" + (y || "")) : "";
            };
            const seenId = new Set();
            const seenKey = new Set();
            try {
              const nmSeed = await buildNoirMaster(env);
              for (const f of ((nmSeed && nmSeed.docs) || []).slice(0, 5)) {
                if (f && f.id) seenId.add(f.id);
                const k = _nkey(f && f.title, f && f.year); if (k) seenKey.add(k);
              }
            } catch (e) {}
            for (const rl of data.rails) {
              if (!rl || !Array.isArray(rl.docs)) continue;
              let pool = rl.docs;
              try { const m = await buildRailMaster(env, rl.id); if (m && Array.isArray(m.docs) && m.docs.length) pool = m.docs; } catch (e) {}
              const fresh = [];
              for (const f of pool) {
                if (fresh.length >= 5) break;
                if (!f || !f.id) continue;
                const k = _nkey(f.title, f.year);
                if (seenId.has(f.id) || (k && seenKey.has(k))) continue;
                fresh.push(f); seenId.add(f.id); if (k) seenKey.add(k);
              }
              if (fresh.length >= 3) rl.docs = fresh;
              else rl.docs = (rl.docs || []).slice(0, 5);
            }
          } catch (e) { /* dedup best-effort; never break home */ }

          // CURATED ROSTER (Pete, Jun 19): override upstream people with the canonical
          // featured 5 stars + 4 directors, in this exact order. Portraits fill below.
          data.people = [
            { id: "bogart",   name: "Humphrey Bogart", role: "star" },
            { id: "grant",    name: "Cary Grant",      role: "star" },
            { id: "gable",    name: "Clark Gable",     role: "star" },
            { id: "stewart",  name: "James Stewart",   role: "star" },
            { id: "tracy",    name: "Spencer Tracy",   role: "star" },
            { id: "ford",     name: "John Ford",       role: "director" },
            { id: "hitchcock",name: "Alfred Hitchcock",role: "director" },
            { id: "hawks",    name: "Howard Hawks",    role: "director" },
            { id: "wyler",    name: "William Wyler",   role: "director" },
            { id: "capra",    name: "Frank Capra",     role: "director" },
          ];
          // PEOPLE PORTRAITS: enrich each star/director with a real TMDb headshot
          // (server-side, using the worker's TMDB key; KV-cached 30d via pt: keys).
          try {
            if (Array.isArray(data.people) && data.people.length && env.TMDB_API_KEY) {
              await Promise.all(data.people.map(async (p) => {
                if (!p || p.portrait || !p.name) return;
                const ck = "pt:" + String(p.name).toLowerCase();
                let cached = null; try { cached = await env.CC_KV.get(ck, "json"); } catch (e) {}
                if (cached && cached.ok && cached.portrait) { p.portrait = cached.portrait; return; }
                try {
                  const pu = new URL("https://api.themoviedb.org/3/search/person");
                  pu.searchParams.set("query", p.name);
                  pu.searchParams.set("include_adult", "false");
                  const pr = await fetch(pu.toString(), { headers: { Authorization: "Bearer " + env.TMDB_API_KEY } });
                  if (pr.ok) {
                    const pj = await pr.json();
                    const hit = (pj.results || []).find(x => x && x.profile_path) || null;
                    const out = hit ? { ok: true, portrait: "https://image.tmdb.org/t/p/w300" + hit.profile_path } : { ok: false };
                    try { await env.CC_KV.put(ck, JSON.stringify(out), { expirationTtl: 60*60*24*30 }); } catch (e) {}
                    if (out.ok) p.portrait = out.portrait;
                  }
                } catch (e) {}
              }));
            }
          } catch (e) { /* portrait enrich best-effort */ }

          // FEATURED: Noir City marquee at the top of home. Reuse the deduped + curated
          // noir master (built by /api/rail logic, cached under hc:railmaster2:noir).
          try {
            const nm = await buildNoirMaster(env);
            if (nm && Array.isArray(nm.docs) && nm.docs.length) {
              data.featured = {
                id: "noir",
                label: "\uD83C\uDF03 Noir City",
                tagline: "Saturday night at the movies \u2014 hand-picked shadows, venetian blinds & the genre that defined cool.",
                total: nm.total,
                docs: nm.docs.slice(0, 8)
              };
            }
          } catch (e) {}
          // only cache a healthy payload (rails present and non-empty)
          if (data.rails.length && data.rails.some(rl => (rl.docs || []).length)) {
            try { await env.CC_KV.put(hk, JSON.stringify(data), { expirationTtl: 600 }); } catch (e) {}
          }
        }
        return json(data, 200, { "cache-control": "public, max-age=120", "x-bbx-cache": "miss" });
      }
      if (path === "/api/rail") {
        // Page-aware + de-duplicated genre browse.
        // ROOT FIX: frontend paginates with &page=N, but upstream ignored it and
        // re-served the same slice -> visible dupes on infinite scroll. We now
        // build ONE de-duped master list per genre (cached), then slice by page.
        const id = url.searchParams.get("id");
        const rows = Math.min(parseInt(url.searchParams.get("rows") || "60", 10) || 60, 120);
        const page = Math.max(parseInt(url.searchParams.get("page") || "1", 10) || 1, 1);
        const master = await buildRailMaster(env, id);
        const start = (page - 1) * rows;
        const slice = ((master && master.docs) || []).slice(start, start + rows);
        const out = { label: (master && master.label) || id, total: (master && master.total) || 0, page, rows, docs: slice };
        return json(out, 200, { "cache-control": "public, max-age=300", "x-bbx-cache": "master" });
      }
      if (path === "/api/person") {
        const id = url.searchParams.get("id");
        const d = await catalog("person", { id });
        // Enrich with display fields (function returns only {total,docs,label}).
        const meta = BBX_ROSTER_BY_ID[id] || null;
        if (meta) {
          d.name = d.name || meta.name;
          d.role = d.role || meta.role;
          if (!d.portrait) { const pr = await bbxPortrait(env, meta.name); if (pr) d.portrait = pr; }
        }
        if (!d.name && d.label) d.name = d.label;
        // Dedupe filmography: same film often has multiple IA uploads with slightly
        // different titles (e.g. "His Girl Friday" vs "His Girl Friday - 1940").
        // Collapse by tmdbId (canonical), falling back to a normalized title key.
        if (Array.isArray(d.docs)) {
          const seen = new Set();
          d.docs = d.docs.filter((x) => {
            const k = (x && x.tmdbId != null)
              ? "t:" + x.tmdbId
              : "n:" + String((x && x.title) || "").toLowerCase().replace(/[^a-z0-9]/g, "");
            if (seen.has(k)) return false;
            seen.add(k); return true;
          });
        }
        return json(d, 200, { "cache-control": "public, max-age=300" });
      }
      if (path === "/api/people-all") {
        // Full roster (cinevault order) with portraits — powers /browse/stars + /browse/directors.
        const ck = "people:all:v1";
        const cached = await env.CC_KV.get(ck, "json");
        if (cached) return json(cached, 200, { "cache-control": "public, max-age=3600" });
        const people = await Promise.all(BBX_ROSTER.map(async (p) => ({
          id: p.id, name: p.name, role: p.role, portrait: await bbxPortrait(env, p.name)
        })));
        const out = { people };
        try { await env.CC_KV.put(ck, JSON.stringify(out), { expirationTtl: 60*60*24 }); } catch (e) {}
        return json(out, 200, { "cache-control": "public, max-age=3600" });
      }
      if (path === "/api/search") {
        const q = url.searchParams.get("q") || "";
        return json(await catalog("search", { q }), 200, { "cache-control": "public, max-age=120" });
      }
      if (path === "/api/detail") {
        const id = url.searchParams.get("id");
        const source = url.searchParams.get("source") || "archive";
        const det = await catalog("detail", { id, source });
        try {
          if (det && !det.error && id) {
            const ov = await env.CC_KV.get("art:" + id, "json");
            if (ov && ov.poster) det.poster = ov.poster;
            if (ov && ov.backdrop) det.backdrop = ov.backdrop;
            if (ov && ov.year) det.year = ov.year;
            if (ov && ov.title) det.title = ov.title;
            if (ov && ov.director) det.director = ov.director;
          }
        } catch (e) {}
        // WALLED GARDEN: browsing stays open (title, poster, synopsis), but the
        // actual stream is withheld unless the visitor has a valid Bluesky session.
        // This walls playback at the API layer, not just the UI.
        try {
          const _sess = await loadSession(request, env);
          if (!_sess && det && !det.error) {
            det.locked = true;
            det.streamUrl = null;
            det.streams = undefined;
          }
        } catch (e) {}
        // Per-visitor gating => do NOT shared-cache the stream URL.
        return json(det, 200, { "cache-control": "private, max-age=0, no-store" });
      }
      if (path === "/api/portrait") {
        // Portrait proxy for cinevault people-rails (function lacks a TMDb key). KV-cached 30d.
        const name = (url.searchParams.get("name") || "").trim();
        if (!name) return json({ ok: false });
        if (!env.TMDB_API_KEY) return json({ ok: false });
        const ck = "pt:" + name.toLowerCase();
        const cached = await env.CC_KV.get(ck, "json");
        if (cached) return json(cached, 200, { "cache-control": "public, max-age=86400" });
        try {
          const pu = new URL("https://api.themoviedb.org/3/search/person");
          pu.searchParams.set("query", name);
          pu.searchParams.set("include_adult", "false");
          const pr = await fetch(pu.toString(), { headers: { Authorization: "Bearer " + env.TMDB_API_KEY } });
          if (!pr.ok) return json({ ok: false });
          const pj = await pr.json();
          const hit = (pj.results || []).find(x => x && x.profile_path) || null;
          const out = hit
            ? { ok: true, portrait: "https://image.tmdb.org/t/p/w300" + hit.profile_path }
            : { ok: false };
          await env.CC_KV.put(ck, JSON.stringify(out), { expirationTtl: 60*60*24*30 });
          return json(out, 200, { "cache-control": "public, max-age=86400" });
        } catch (e) { return json({ ok: false, error: String(e.message || e) }); }
      }
      if (path === "/api/tmdb-verify") {
        // Catalog-verification proxy for the cinevault function (which lacks a TMDb key).
        // Returns {poster, overview, tmdbId, tmdbTitle} or {ok:false}. KV-cached 7d.
        const q = (url.searchParams.get("q") || "").trim();
        const yr = url.searchParams.get("year") || "";
        if (!q) return json({ ok: false });
        if (!env.TMDB_API_KEY) return json({ ok: false });
        const ck = "tv2:" + q.toLowerCase() + ":" + yr;
        const cached = await env.CC_KV.get(ck, "json");
        if (cached) return json(cached, 200, { "cache-control": "public, max-age=600" });
        try {
          const tu = new URL("https://api.themoviedb.org/3/search/movie");
          tu.searchParams.set("query", q); if (yr) tu.searchParams.set("year", yr);
          tu.searchParams.set("include_adult", "false");
          const tr = await fetch(tu.toString(), { headers: { Authorization: "Bearer " + env.TMDB_API_KEY } });
          if (!tr.ok) { return json({ ok: false }); }
          const tj = await tr.json();
          const hit = (tj.results || []).find(m => m && m.poster_path && typeof m.overview === "string" && m.overview.trim().length >= 20 && !m.adult) || null;
          if (!hit) { const miss = { ok: false }; await env.CC_KV.put(ck, JSON.stringify(miss), { expirationTtl: 60*60*24*7 }); return json(miss, 200, { "cache-control": "public, max-age=600" }); }
          const tmdbYear = (typeof hit.release_date === "string" && hit.release_date.length >= 4) ? parseInt(hit.release_date.slice(0,4)) : null;
          const out = { ok: true, poster: "https://image.tmdb.org/t/p/w500" + hit.poster_path, overview: String(hit.overview).slice(0, 1200), tmdbId: hit.id, tmdbTitle: hit.title || hit.original_title || q, tmdbYear };
          await env.CC_KV.put(ck, JSON.stringify(out), { expirationTtl: 60*60*24*7 });
          return json(out, 200, { "cache-control": "public, max-age=600" });
        } catch (e) { return json({ ok: false, error: String(e.message || e) }); }
      }
      if (path === "/api/genres" && request.method === "POST") {
        if (!env.TMDB_API_KEY) return json({ ok: false, genres: {} });
        let body; try { body = await request.json(); } catch (_) { body = {}; }
        const films = Array.isArray(body.films) ? body.films.slice(0, 60) : [];
        const out = {};
        async function tmdbGenres(film) {
          const fid = String(film.filmId || film.tmdbId || film.title || "");
          if (!fid) return [];
          const ck = "genres:" + fid;
          try { const c = await env.CC_KV.get(ck, "json"); if (c && Array.isArray(c.g)) return c.g; } catch (_) {}
          let tmdbId = film.tmdbId || null;
          // resolve tmdbId via search if missing
          if (!tmdbId && film.title) {
            try {
              const su = new URL("https://api.themoviedb.org/3/search/movie");
              su.searchParams.set("query", film.title);
              if (film.year) su.searchParams.set("year", String(film.year));
              su.searchParams.set("include_adult", "false");
              const sr = await fetch(su.toString(), { headers: { Authorization: "Bearer " + env.TMDB_API_KEY } });
              if (sr.ok) { const sj = await sr.json(); const hit = (sj.results || [])[0]; if (hit) tmdbId = hit.id; }
            } catch (_) {}
          }
          let g = [];
          if (tmdbId) {
            try {
              const du = "https://api.themoviedb.org/3/movie/" + tmdbId;
              const dr = await fetch(du, { headers: { Authorization: "Bearer " + env.TMDB_API_KEY } });
              if (dr.ok) { const dj = await dr.json(); g = (dj.genres || []).map(x => x && x.name).filter(Boolean); }
            } catch (_) {}
          }
          try { await env.CC_KV.put(ck, JSON.stringify({ g }), { expirationTtl: 60*60*24*30 }); } catch (_) {}
          return g;
        }
        // resolve in parallel (TMDb tolerates this; results are cached after first pass)
        const results = await Promise.all(films.map(async f => { const g = await tmdbGenres(f); return [String(f.filmId || f.tmdbId || f.title), g]; }));
        results.forEach(([k, g]) => { if (k) out[k] = g; });
        return json({ ok: true, genres: out }, 200, { "cache-control": "public, max-age=300" });
      }
      if (path === "/api/ia-search") {
        // IA advancedsearch proxy for the cinevault function. Base44's shared egress IP
        // gets throttled by archive.org (returns numFound but empty docs); CF egress is
        // reliable. KV-cached 10m. Params: q, rows, page, sort.
        const q = (url.searchParams.get("q") || "").trim();
        if (!q) return json({ total: 0, docs: [] });
        const rows = Math.min(60, parseInt(url.searchParams.get("rows") || "30", 10) || 30);
        const page = Math.max(1, parseInt(url.searchParams.get("page") || "1", 10) || 1);
        const sort = url.searchParams.get("sort") || "downloads desc";
        const ck = "ia:" + page + ":" + rows + ":" + sort + ":" + q;
        const cached = await env.CC_KV.get(ck, "json");
        if (cached) return json(cached, 200, { "cache-control": "public, max-age=300" });
        try {
          const p = new URLSearchParams();
          p.set("q", q);
          ["identifier", "title", "year", "downloads", "description"].forEach(fl => p.append("fl[]", fl));
          p.append("sort[]", sort);
          p.set("rows", String(rows)); p.set("page", String(page)); p.set("output", "json");
          const r = await fetch("https://archive.org/advancedsearch.php?" + p.toString(), {
            headers: { "user-agent": "Blueboxd/1.0 (+https://blueboxd.com)" },
            cf: { cacheTtl: 300, cacheEverything: true } });
          if (!r.ok) return json({ total: 0, docs: [], error: "ia " + r.status });
          const j = await r.json();
          const docs = j.response?.docs || [];
          const out = { response: { numFound: j.response?.numFound || 0, docs } };
          if (docs.length) await env.CC_KV.put(ck, JSON.stringify(out), { expirationTtl: 600 });
          return json(out, 200, { "cache-control": "public, max-age=300" });
        } catch (e) { return json({ total: 0, docs: [], error: String(e.message || e) }); }
      }
      if (path === "/api/images") {
        const tmdbId = Number(url.searchParams.get("tmdb") || 0);
        if (!tmdbId) return json({ posters: [], backdrops: [] });
        const key = "img:" + tmdbId;
        const cached = await env.CC_KV.get(key, "json");
        if (cached) return json(cached, 200, { "cache-control": "public, max-age=600" });
        if (!env.TMDB_API_KEY) return json({ posters: [], backdrops: [] });
        try {
          const iu = new URL("https://api.themoviedb.org/3/movie/" + tmdbId + "/images");
          iu.searchParams.set("include_image_language", "en,null");
          const ir = await fetch(iu.toString(), { headers: { Authorization: "Bearer " + env.TMDB_API_KEY } });
          if (!ir.ok) return json({ posters: [], backdrops: [] });
          const ij = await ir.json();
          const map = (arr, small, full, cap) => (arr || [])
            .filter(x => x && x.file_path)
            .sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0))
            .slice(0, cap)
            .map(x => ({ thumb: small + x.file_path, full: full + x.file_path }));
          const out = {
            tmdbId,
            posters: map(ij.posters, "https://image.tmdb.org/t/p/w185", "https://image.tmdb.org/t/p/w500", 24),
            backdrops: map(ij.backdrops, "https://image.tmdb.org/t/p/w300", "https://image.tmdb.org/t/p/w780", 18)
          };
          await env.CC_KV.put(key, JSON.stringify(out), { expirationTtl: 60 * 60 * 24 * 7 });
          return json(out, 200, { "cache-control": "public, max-age=600" });
        } catch (e) {
          return json({ posters: [], backdrops: [], error: String(e.message || e) });
        }
      }
      if (path === "/api/artwork" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        if (sess.did !== OWNER_DID) return json({ error: "owner only" }, 403);
        const b = await request.json();
        const fid = String(b.filmId || "");
        if (!fid) return json({ error: "missing filmId" }, 400);
        if (b.reset) { await env.CC_KV.delete("art:" + fid); return json({ ok: true, reset: true }); }
        // merge with existing override so partial updates don't wipe poster/etc.
        const prev = (await env.CC_KV.get("art:" + fid, "json")) || {};
        const ov = { ...prev };
        if (b.poster) ov.poster = String(b.poster);
        if (b.backdrop) ov.backdrop = String(b.backdrop);
        if (b.year != null && b.year !== "") ov.year = Number(b.year) || String(b.year);
        if (b.title) ov.title = String(b.title);
        if (b.director) ov.director = String(b.director);
        await env.CC_KV.put("art:" + fid, JSON.stringify(ov));
        return json({ ok: true, art: ov });
      }
      if (path === "/api/library" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const { filmId, title, year: year2, poster: poster2, status, tmdbId, remove } = await request.json();
        const rkey = filmRkey(filmId);
        let res;
        if (remove) res = await deleteRecord(sess, NSID.library, rkey);
        else res = await putRecord(sess, NSID.library, rkey, buildLibrary({ filmId, title, year: year2, poster: poster2, status, tmdbId }), env);
        await touchNonce(env, sess, res.dpopNonce);
        return json({ ok: res.ok, status: res.status, data: res.data, reconnect: !!res.reconnect });
      }
      if (path === "/api/favorite" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const b = await request.json();
        const slot = Math.max(1, Math.min(4, Number(b.slot)||1));
        const rkey = "fav" + slot;
        let res;
        if (b.remove) res = await deleteRecord(sess, NSID.favorite, rkey);
        else res = await putRecord(sess, NSID.favorite, rkey, buildFavorite({ filmId: b.filmId, title: b.title, year: b.year, poster: b.poster, slot }), env);
        await touchNonce(env, sess, res.dpopNonce);
        return json({ ok: res.ok, status: res.status, data: res.data, reconnect: !!res.reconnect });
      }
      if (path === "/api/watch" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const { filmId, title, progressPct, partyId, poster, year } = await request.json();
        const res = await createRecord(sess, NSID.watch, buildWatch({ filmId, title, progressPct, partyId }));
        await touchNonce(env, sess, res.dpopNonce);
        if (res.ok) {
          ctx.waitUntil(indexWatch(env, { did: sess.did, handle: sess.handle, filmId, title, year, poster, kind: "watch", at: (/* @__PURE__ */ new Date()).toISOString() }));
          ctx.waitUntil(markLibraryWatched(sess, { filmId, title, year, poster }));
        }
        return json({ ok: res.ok, status: res.status });
      }
      if (path === "/api/review" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const { filmId, title, year, poster, stars, text, spoiler, crosspost, remove } = await request.json();
        const rkey = filmRkey(filmId);
        if (remove) {
          const dres = await deleteRecord(sess, NSID.review, rkey);
          await touchNonce(env, sess, dres.dpopNonce);
          return json({ ok: dres.ok, status: dres.status });
        }
        const res = await putRecord(sess, NSID.review, rkey, buildReview({ filmId, title, stars, text, spoiler }), env);
        await touchNonce(env, sess, res.dpopNonce);
        if (res.reconnect) return json({ ok: false, reconnect: true, status: res.status });
        if (crosspost && res.ok) {
          try { await shareToBluesky(sess, env, "review", { filmId, title, year, poster, stars, text }); } catch (_) {}
        }
        if (res.ok) {
          ctx.waitUntil(indexWatch(env, { did: sess.did, handle: sess.handle, filmId, title, year, poster, kind: "review", stars, at: (/* @__PURE__ */ new Date()).toISOString() }));
          ctx.waitUntil(markLibraryWatched(sess, { filmId, title, year, poster }));
        }
        return json({ ok: res.ok, status: res.status });
      }
      if (path === "/api/diary") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const out = {};
        for (const [k, ns] of [["library", NSID.library], ["watch", NSID.watch], ["review", NSID.review]]) {
          const r = await listRecords({ pdsUrl: sess.pds, did: sess.did, collection: ns, limit: 100, accessToken: sess.access_token, dpop: sess.dpop, nonce: sess.dpopNonce });
          await touchNonce(env, sess, r.dpopNonce);
          out[k] = r.data && r.data.records || [];
        }
        return json(out);
      }
      if (path === "/api/feed/watching") {
        const days = Math.min(365, Number(url.searchParams.get("days") || 30) || 30);
        const out = await clubWatching(env, { days, limit: 24 });
        return json(out, 200, { "cache-control": "public, max-age=60" });
      }
      if (path === "/api/leaderboard") {
        await ensureSchema(env);
        const lim = Math.min(100, Number(url.searchParams.get("limit") || 50) || 50);
        const tf = String(url.searchParams.get("tf") || "all").toLowerCase();
        let since = null;
        if (tf === "week")  since = new Date(Date.now() - 7*86400000).toISOString();
        else if (tf === "month") since = new Date(Date.now() - 30*86400000).toISOString();
        const out = await clubLeaderboard(env, { limit: lim, since });
        out.tf = tf;
        // attach the caller's DID (if logged in) so the UI can highlight "you" + a sticky self-row.
        try { const sess = await loadSession(request, env); if (sess && sess.did) out.meDid = sess.did; } catch (_) {}
        return json(out, 200, { "cache-control": "private, max-age=60" });
      }
      if (path === "/api/lb-snapshot") {
        // Token-gated daily snapshot writer (called by the automation). Records today's ranks for ▲▼ deltas.
        const tok = request.headers.get("x-cron-token") || url.searchParams.get("token") || "";
        if (!env.SCRAMBLEMEBOT_TOKEN || tok !== env.SCRAMBLEMEBOT_TOKEN) return json({ error: "forbidden" }, 403);
        const r = await snapshotLeaderboard(env);
        return json(r);
      }
      if (path === "/api/feed/friends") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const follows = await fetchFollows(sess);
        const out = await friendsWatching(env, follows, { days: 60, limit: 30 });
        return json(out);
      }
      // ── P3b/P4b: branded OG card images (resvg-wasm), KV-cached PNG ──
      if (path.startsWith("/og/") && path.endsWith(".png")) {
        const seg = path.slice(4, -4).split("/");
        const type = seg[0] || "";
        const id = decodeURIComponent(seg.slice(1).join("/") || "_");
        const reset = url.searchParams.get("reset") === "1";
        let ck = "ogimg:" + type + ":" + id;
        if (type === "stats") { ck += ":" + (url.searchParams.get("w")||"0") + "-" + (url.searchParams.get("r")||"0") + "-" + (url.searchParams.get("avg")||"0") + "-" + (url.searchParams.get("dec")||"") + "-" + (url.searchParams.get("rat")||""); }
        if (type === "movie" || type === "watching" || type === "party" || type === "partystats") { ck += ":" + (url.searchParams.get("v")||"0"); }
        if (reset) { try { await env.CC_KV.delete(ck); } catch (_) {} }
        if (!reset) {
          const hit = await env.CC_KV.get(ck, "arrayBuffer");
          if (hit) return new Response(hit, { headers: { "content-type": "image/png", "cache-control": "public, max-age=86400", "x-og-cache": "hit" } });
        }
        try {
          let png = await buildOgPng(env, type, id, url.searchParams);
          try { await env.CC_KV.put(ck, png, { expirationTtl: 21600 }); } catch (_) {}
          return new Response(png, { headers: { "content-type": "image/png", "cache-control": "public, max-age=86400", "x-og-cache": reset ? "reset" : "miss" } });
        } catch (e) {
          slog({ev:"og",step:"render_fail",type,err:String(e&&e.message||e)});
          return Response.redirect(origin + "/og-default.png", 302);
        }
      }
      if (path === "/api/share-diary" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        let count = 0;
        try {
          const c = await env.CC_SOCIAL.prepare("SELECT COUNT(*) n FROM watch_index WHERE did=? AND kind!=?").bind(sess.did, "want").first();
          count = (c && c.n) || 0;
        } catch (_) {}
        // Pull the same last-four films the card renders, to feed the AI blurb.
        let films = [];
        try {
          const rs = await env.CC_SOCIAL.prepare(
            "SELECT title, year, stars FROM watch_index WHERE did=? AND kind!=? ORDER BY at DESC LIMIT 4"
          ).bind(sess.did, "want").all();
          films = (rs.results || []).map(r => ({ title: r.title, year: r.year, stars: r.stars }));
        } catch (_) {}
        try {
          // Warm the EXACT image URL the share will fetch (no query) so the blob upload hits a ready, cached PNG.
          // reset=1 first to bust any stale cache, then prime the canonical URL.
          const r = await shareToBluesky(sess, env, "diary", { did: sess.did, count, films });
          await touchNonce(env, sess, r.dpopNonce);
          return json({ ok: r.ok !== false, status: r.status });
        } catch (e) {
          return json({ ok: false, error: String(e.message || e) }, 500);
        }
      }
      if (path === "/api/share-stats" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        let body = {};
        try { body = await request.json(); } catch (_) {}
        const watched = parseInt(body.watched, 10) || 0;
        const reviews = parseInt(body.reviews, 10) || 0;
        const avg = parseFloat(body.avg) || 0;
        const dec = String(body.dec || "");          // "1940:2,1950:1"
        const rat = String(body.rat || "");          // "1,0,0,0,0"
        const handle = sess.handle || "";
        try {
          const qp = "w=" + watched + "&r=" + reviews + "&avg=" + avg + "&h=" + encodeURIComponent(handle) + "&dec=" + encodeURIComponent(dec) + "&rat=" + encodeURIComponent(rat);
          // derive the user's most-watched decade for the AI blurb (e.g. "1940")
          let topDecade = "";
          try {
            const pairs = dec.split(",").filter(Boolean).map(x => { const [k,n] = x.split(":"); return { k, n: parseInt(n,10)||0 }; });
            pairs.sort((a,b) => b.n - a.n);
            if (pairs[0] && pairs[0].k) topDecade = pairs[0].k;
          } catch (_) {}
          // warm the stats image so the blob fetch hits a ready PNG
          const r = await shareToBluesky(sess, env, "stats", { did: sess.did, handle, watched, reviews, avg, dec, rat, topDecade });
          await touchNonce(env, sess, r.dpopNonce);
          return json({ ok: r.ok !== false, status: r.status });
        } catch (e) {
          return json({ ok: false, error: String(e.message || e) }, 500);
        }
      }
      if (path === "/api/share-leaderboard" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        let body = {}; try { body = await request.json(); } catch (_) {}
        try {
          const r = await shareToBluesky(sess, env, "leaderboard", { myRank: body.myRank || null, myScore: body.myScore != null ? body.myScore : null, invite: !!body.invite });
          await touchNonce(env, sess, r.dpopNonce);
          return json({ ok: r.ok !== false, status: r.status });
        } catch (e) {
          return json({ ok: false, error: String(e.message || e) }, 500);
        }
      }
      if (path === "/api/share-film" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const { filmId, title, year: year2, poster, snippet } = await request.json();
        try {
          const r = await shareToBluesky(sess, env, "movie", { filmId, title, year: year2, poster, snippet });
          await touchNonce(env, sess, r.dpopNonce);
          return json({ ok: r.ok !== false, status: r.status });
        } catch (e) {
          return json({ ok: false, error: String(e.message || e) }, 500);
        }
      }
      if (path === "/api/crosspost" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const { filmId, title, year: year2, poster, note } = await request.json();
        try {
          const r = await shareToBluesky(sess, env, "watching", { filmId, title, year: year2, poster, note });
          await touchNonce(env, sess, r.dpopNonce);
          return json({ ok: r.ok !== false, status: r.status });
        } catch (e) {
          return json({ ok: false, error: String(e.message || e) }, 500);
        }
      }
      if (path === "/api/share-party" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        let body = {}; try { body = await request.json(); } catch (_) {}
        const partyId = String(body.partyId || "");
        if (!partyId) return json({ error: "partyId required" }, 400);
        try {
          let p = null; try { p = await getParty(env, partyId); } catch (_) {}
          if (!p) return json({ error: "party not found" }, 404);
          let reactions = 0; try { const rc = await env.CC_SOCIAL.prepare("SELECT COUNT(*) n FROM reactions WHERE party_id=?").bind(partyId).first(); reactions=(rc&&rc.n)||0; } catch(_){}
          const now = Date.now(); const startMs = p.startsAt ? Date.parse(p.startsAt) : 0;
          const endMs = startMs && p.runtimeSec ? startMs + p.runtimeSec*1000 : (startMs ? startMs + 3*3600*1000 : 0);
          const live = startMs && now >= startMs - 5*60*1000 && (!endMs || now <= endMs);
          const r = await shareToBluesky(sess, env, "party", { partyId, title: p.title, year: p.year, going: p.rsvpCount||0, reactions, live, joined: body.joined !== false });
          await touchNonce(env, sess, r.dpopNonce);
          return json({ ok: r.ok !== false, status: r.status });
        } catch (e) {
          const msg = String(e && e.message || e);
          slog({ev:"share",step:"party_fail",err:String(e&&e.stack||msg).slice(0,300),did:sess&&sess.did});
          return json({ ok: false, error: msg, reconnect: msg.indexOf("reconnect")>=0 }, 500);
        }
      }
      if (path === "/api/share-partystats" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        try {
          const st = await userPartyStats(env, sess.did);
          const handle = sess.handle || st.handle || "";
          const r = await shareToBluesky(sess, env, "partystats", { did: sess.did, handle, isOwner: st.isOwner, hosted: st.hosted, attendees: st.attendees, reactions: st.reactions });
          await touchNonce(env, sess, r.dpopNonce);
          return json({ ok: r.ok !== false, status: r.status, stats: { hosted: st.hosted, attendees: st.attendees, reactions: st.reactions } });
        } catch (e) {
          const msg = String(e && e.message || e);
          return json({ ok: false, error: msg, reconnect: msg.indexOf("reconnect")>=0 }, 500);
        }
      }
      if (path === "/api/party/create" && request.method === "POST") {
        // Three ways in: (1) automation via host secret, (2) owner, (3) any logged-in Bluesky user.
        await ensureSchema(env);
        const hostSecret = request.headers.get("X-Host-Secret");
        const viaSecret = env.PARTY_HOST_SECRET && hostSecret && hostSecret === env.PARTY_HOST_SECRET;
        let hostSess = null;
        if (!viaSecret) {
          const sess = await loadSession(request, env);
          if (!sess) return json({ error: "auth" }, 401);
          hostSess = sess; // owner OR regular user — both may host
        }
        const b = await request.json();
        // basic validation + light rate-limit for non-owner users
        if (!b || !b.filmId || !b.title || !b.startsAt) return json({ error: "missing filmId/title/startsAt" }, 400);
        const startMs = Date.parse(b.startsAt);
        if (!startMs || startMs < Date.now() - 5*60*1000) return json({ error: "startsAt must be in the future" }, 400);
        if (startMs > Date.now() + 1000*60*60*24*60) return json({ error: "startsAt too far out (max 60 days)" }, 400);
        if (hostSess && hostSess.did !== OWNER_DID) {
          // per-user throttle: max 3 future parties at once, and 1 created / 10 min
          try {
            const rl = await env.CC_KV.get("party:rl:" + hostSess.did);
            if (rl) return json({ error: "Slow down — you can start another party in a few minutes." }, 429);
            const cnt = await env.CC_SOCIAL.prepare("SELECT COUNT(*) n FROM parties WHERE host_did=? AND status!='cancelled' AND starts_at > ?").bind(hostSess.did, new Date().toISOString()).first();
            if (cnt && cnt.n >= 3) return json({ error: "You already have 3 upcoming parties. Let those run first." }, 429);
          } catch(_){}
        }
        const out = await createParty(env, { ...b, origin, hostSess });
        if (hostSess && hostSess.did !== OWNER_DID) { try { await env.CC_KV.put("party:rl:" + hostSess.did, "1", { expirationTtl: 600 }); } catch(_){} }
        return json(out);
      }
      if (path === "/api/admin/purge-home" && request.method === "POST") {
        const hostSecret = request.headers.get("X-Host-Secret");
        if (!(env.PARTY_HOST_SECRET && hostSecret && hostSecret === env.PARTY_HOST_SECRET)) {
          return json({ error: "host only" }, 403);
        }
        try { await env.CC_KV.delete("hc:home"); } catch (e) {}
        return json({ ok: true, purged: "hc:home" });
      }
      if (path === "/api/admin/backfill-posters" && request.method === "POST") {
        const hostSecret = request.headers.get("X-Host-Secret");
        if (!(env.PARTY_HOST_SECRET && hostSecret && hostSecret === env.PARTY_HOST_SECRET)) {
          return json({ error: "host only" }, 403);
        }
        try {
          const rs = await env.CC_SOCIAL.prepare(
            "SELECT DISTINCT title, year FROM watch_index WHERE (poster IS NULL OR poster='') AND title IS NOT NULL"
          ).all();
          const rows = (rs.results || []);
          let done = 0, miss = 0; const report = [];
          for (const r of rows) {
            // extract a year hint from the title if the year column is empty ("Sabrina (1954)")
            let yr = r.year;
            if (!yr) { const m = String(r.title||"").match(/\((\d{4})\)/); if (m) yr = parseInt(m[1],10); }
            // clean obvious archive cruft off the query ("... Film Noir Full Movie")
            let q = String(r.title||"").replace(/\(\d{4}\).*$/,"").replace(/\b(film noir|full movie|featuring).*$/i,"").trim();
            const p = await posterByTitle(env, q, yr);
            if (p) {
              await env.CC_SOCIAL.prepare(
                "UPDATE watch_index SET poster=?, year=COALESCE(year,?) WHERE title=? AND (poster IS NULL OR poster='')"
              ).bind(p, yr||null, r.title).run();
              done++; report.push({ title: q, year: yr||null, ok: true });
            } else { miss++; report.push({ title: q, year: yr||null, ok: false }); }
          }
          return json({ ok: true, scanned: rows.length, backfilled: done, unmatched: miss, report });
        } catch (e) {
          return json({ ok: false, error: String(e.message || e) }, 500);
        }
      }
      if (path === "/api/party/cancel" && request.method === "POST") {
        await ensureSchema(env);
        const hostSecret = request.headers.get("X-Host-Secret");
        const viaSecret = env.PARTY_HOST_SECRET && hostSecret && hostSecret === env.PARTY_HOST_SECRET;
        const b = await request.json();
        const pidv = String(b.partyId||"");
        if (!pidv) return json({ error: "no party" }, 400);
        if (!viaSecret) {
          const sess = await loadSession(request, env);
          if (!sess) return json({ error: "auth" }, 401);
          // owner can cancel anything; a regular user can cancel only their OWN party
          if (sess.did !== OWNER_DID) {
            const row = await env.CC_SOCIAL.prepare("SELECT host_did FROM parties WHERE id=?").bind(pidv).first().catch(()=>null);
            if (!row || row.host_did !== sess.did) return json({ error: "not your party" }, 403);
          }
        }
        await env.CC_SOCIAL.prepare(`UPDATE parties SET status='cancelled' WHERE id=?`).bind(pidv).run().catch(()=>{});
        return json({ ok: true });
      }
      if (path === "/api/party/beacon" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        if (sess.did !== OWNER_DID) return json({ error: "host only" }, 403);
        const b = await request.json();
        const pidv = String(b.partyId||"");
        const pos = Number(b.pos);
        if (!pidv || !Number.isFinite(pos)) return json({ error: "bad" }, 400);
        await env.CC_SOCIAL.prepare(`UPDATE parties SET host_pos=?, host_pos_at=?, host_paused=? WHERE id=?`)
          .bind(pos, Date.now(), b.paused?1:0, pidv).run().catch(()=>{});
        return json({ ok: true });
      }
      if (path === "/api/party/list") {
        return json({ parties: await listParties(env) }, 200, { "cache-control": "public, max-age=30" });
      }
      if (path.startsWith("/api/party/get/")) {
        const id = decodeURIComponent(path.slice("/api/party/get/".length));
        const p = await getParty(env, id);
        return p ? json(p) : json({ error: "notfound" }, 404);
      }
      if (path === "/api/party/rsvp" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const { partyId } = await request.json();
        const count = await rsvp(env, partyId, sess.did, sess.handle);
        return json({ ok: true, rsvpCount: count });
      }
      if (path === "/api/party/react" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const { partyId, text, emoji } = await request.json();
        // P2 guard (Pitfall 4): only RSVP'd members (or the host) may post to a room wall.
        if (!(await isRsvpedOrHost(env, partyId, sess.did))) {
          return json({ error: "rsvp_required", message: "RSVP to join the room chat." }, 403);
        }
        await addReaction(env, partyId, { did: sess.did, handle: sess.handle, text, emoji });
        return json({ ok: true });
      }
      if (path.startsWith("/api/party/wall/")) {
        const id = decodeURIComponent(path.slice("/api/party/wall/".length));
        const since = url.searchParams.get("since") || "0";
        return json({ wall: await getWall(env, id, since) }, 200, { "cache-control": "no-store" });
      }
      if (path === "/api/profile") {
        const handle = (url.searchParams.get("handle") || "").trim();
        const did = await resolveHandleToDid(handle);
        if (!did) return json({ error: "notfound" }, 404);
        const didDoc = await resolveDidDoc(did);
        const pds = didDoc && pdsFromDidDoc(didDoc);
        if (!pds) return json({ error: "nopds" }, 404);
        const out = { handle, did };
        const actor = await bskyActorProfile(did);
        if (actor) out.profile = actor;
        for (const [k, ns] of [["library", NSID.library], ["watch", NSID.watch], ["review", NSID.review], ["favorite", NSID.favorite]]) {
          const r = await listRecords({ pdsUrl: pds, did, collection: ns, limit: 100 });
          out[k] = r.data && r.data.records || [];
        }
        const watched = (out.library||[]).filter(r=>r.value&&r.value.status==='watched').length + (out.watch||[]).length;
        const ratings = (out.review||[]).map(r=>r.value).filter(v=>v&&v.stars);
        const avg = ratings.length ? Math.round((ratings.reduce((a,v)=>a+(v.stars||0),0)/ratings.length)*10)/10 : null;
        out.stats = { films: (out.library||[]).length, watched, reviews: (out.review||[]).length, avgStars: avg };
        out.favorites = (out.favorite||[]).map(r=>r.value).sort((a,b)=>(a.slot||0)-(b.slot||0));
        return json(out, 200, { "cache-control": "public, max-age=30" });
      }
      if (path === "/" || path.startsWith("/film/") || path.startsWith("/u/") || path.startsWith("/person/") || path.startsWith("/browse/") || path.startsWith("/genre/") || path === "/about" || path === "/diary" || path === "/stats" || path === "/club" || path === "/parties" || path === "/leaderboard" || path.startsWith("/party/") || path === "/tos" || path === "/privacy" || path === "/dmca") {
        let shell = SHELL_HTML(origin);
        if (path.startsWith("/party/")) {
          try {
            const pid2 = decodeURIComponent(path.slice("/party/".length));
            const pp = await getParty(env, pid2);
            if (pp) {
              shell = shell.replace(/<!--OGSTART-->[\s\S]*?<!--OGEND-->/, partyOgHtml(origin, pp));
            }
          } catch (_) {}
        }
        else if (path.startsWith("/film/")) {
          try {
            const fid2 = decodeURIComponent(path.slice("/film/".length));
            const fdet = await catalog("detail", { id: fid2, source: "archive" });
            if (fdet && !fdet.error) {
              try { const ov2 = await env.CC_KV.get("art:" + fid2, "json"); if (ov2) { if (ov2.poster) fdet.poster = ov2.poster; if (ov2.year) fdet.year = ov2.year; if (ov2.title) fdet.title = ov2.title; if (ov2.director) fdet.director = ov2.director; } } catch (_) {}
              shell = shell.replace(/<!--OGSTART-->[\s\S]*?<!--OGEND-->/, filmOgHtml(origin, fid2, fdet));
            }
          } catch (_) {}
        }
        else if (path.startsWith("/genre/")) {
          try {
            const gid = decodeURIComponent(path.slice("/genre/".length));
            const ck = "og:genre:" + gid;
            let blk = await env.CC_KV.get(ck);
            if (!blk) {
              const m = await buildRailMaster(env, gid);
              const docs = (m && Array.isArray(m.docs)) ? m.docs : [];
              const total = (m && typeof m.total === "number") ? m.total : docs.length;
              // GUARD: unknown/empty genre slug -> don't promise films that aren't there; leave the brand card.
              if (total > 0 && docs.length) {
                const poster = (docs.find(d => d && d.poster) || {}).poster || null;
                const label = (m && m.label && !/^[a-z-]+$/.test(String(m.label))) ? m.label : prettySlug(gid);
                blk = genreOgHtml(origin, gid, label, poster, total);
                try { await env.CC_KV.put(ck, blk, { expirationTtl: 21600 }); } catch (_) {}
              }
            }
            if (blk) shell = shell.replace(/<!--OGSTART-->[\s\S]*?<!--OGEND-->/, blk);
          } catch (_) {}
        }
        else if (path.startsWith("/person/")) {
          try {
            const pid3 = decodeURIComponent(path.slice("/person/".length));
            const ck = "og:person:" + pid3;
            let blk = await env.CC_KV.get(ck);
            if (!blk) {
              const pd = await catalog("person", { id: pid3 });
              const docs = (pd && Array.isArray(pd.docs)) ? pd.docs : ((pd && Array.isArray(pd.results)) ? pd.results : []);
              const ptotal = (pd && typeof pd.total === "number") ? pd.total : docs.length;
              // GUARD: person browse has no data unless the catalog returns films; don't over-promise.
              if (ptotal > 0 && docs.length) {
                const poster = (docs.find(d => d && d.poster) || {}).poster || null;
                let name = (pd && (pd.name || pd.person) && !/^[a-z-]+$/.test(String(pd.name||pd.person))) ? (pd.name||pd.person) : prettySlug(pid3);
                blk = personOgHtml(origin, pid3, name, poster, ptotal);
                try { await env.CC_KV.put(ck, blk, { expirationTtl: 21600 }); } catch (_) {}
              }
            }
            if (blk) shell = shell.replace(/<!--OGSTART-->[\s\S]*?<!--OGEND-->/, blk);
          } catch (_) {}
        }
        else if (path.startsWith("/u/")) {
          try {
            const handle = decodeURIComponent(path.slice("/u/".length)).replace(/\/.*$/, "").trim();
            if (handle) {
              const ck = "og:u:" + handle.toLowerCase();
              let blk = await env.CC_KV.get(ck);
              if (!blk) {
                const did = await resolveHandleToDid(handle);
                if (did) {
                  let displayName = null, stats = null;
                  try { const ap = await bskyActorProfile(did); if (ap) displayName = ap.displayName || null; } catch (_) {}
                  try {
                    const fc = await env.CC_SOCIAL.prepare("SELECT COUNT(*) n FROM watch_index WHERE did=? AND kind!=?").bind(did, "want").first();
                    stats = { films: (fc && fc.n) || 0 };
                  } catch (_) {}
                  blk = profileOgHtml(origin, handle, did, displayName, stats);
                  try { await env.CC_KV.put(ck, blk, { expirationTtl: 3600 }); } catch (_) {}
                }
              }
              if (blk) shell = shell.replace(/<!--OGSTART-->[\s\S]*?<!--OGEND-->/, blk);
            }
          } catch (_) {}
        }
        else if (path === "/leaderboard") {
          try {
            const img = origin + "/og/leaderboard.png?v=" + Date.now().toString(36);
            const og = `<!--OGSTART-->\n<meta property="og:title" content="\u{1F3C6} Blueboxd Leaderboard"/>\n<meta property="og:description" content="Top cinephiles on Blueboxd \u2014 free public-domain cinema, watched together on Bluesky."/>\n<meta property="og:image" content="${img}"/>\n<meta name="twitter:card" content="summary_large_image"/>\n<!--OGEND-->`;
            shell = shell.replace(/<!--OGSTART-->[\s\S]*?<!--OGEND-->/, og);
          } catch (_) {}
        }
        else if (path === "/diary" || path === "/club" || path === "/parties") {
          try {
            // shared cheap poster: newest party poster, else curated noir hero
            let poster = null, nextTitle = null;
            try {
              const ps = await listParties(env);
              const up = (ps || []).filter(p => p.phase !== "ended" && p.poster);
              if (up.length) { poster = up[0].poster; nextTitle = up[0].title + (up[0].year ? " (" + up[0].year + ")" : ""); }
              else if (ps && ps.length && ps[0].poster) { poster = ps[0].poster; }
            } catch (_) {}
            if (!poster) {
              try { const nm = await buildNoirMaster(env); const d = (nm && nm.docs || []).find(x => x && x.poster); if (d) poster = d.poster; } catch (_) {}
            }
            const blk = path === "/diary" ? diaryOgHtml(origin, poster)
                      : path === "/club" ? clubOgHtml(origin, poster)
                      : partiesOgHtml(origin, poster, nextTitle);
            shell = shell.replace(/<!--OGSTART-->[\s\S]*?<!--OGEND-->/, blk);
          } catch (_) {}
        }
        return html(shell);
      }
      return json({ error: "not found" }, 404);
    } catch (e) {
      const msg = String(e && (e.message || e)).slice(0, 200);
      // API routes must ALWAYS return JSON so the client never JSON.parse-chokes on an HTML error page.
      if (url.pathname.startsWith("/api/")) return json({ ok: false, error: "server_error", detail: msg }, 500);
      return html(errPage(`Something went wrong: ${msg}`), 500);
    }
  }
};
function errPage(msg) {
  return `<!doctype html><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1">
  <title>Blueboxd</title><body style="background:#0b0d10;color:#e8eaed;font:16px system-ui;display:grid;place-items:center;height:100vh;margin:0;text-align:center;padding:24px">
  <div><div style="font-size:42px">\u{1F3AC}</div><h2 style="font-weight:600">Blueboxd</h2><p style="color:#9aa0a6;max-width:420px">${msg}</p>
  <a href="/" style="color:#7cc4ff;text-decoration:none">\u2190 Back to Blueboxd</a></div></body>`;
}
export {
  worker_default as default
};