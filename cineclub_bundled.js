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
    if (n) resp = await doIt(n);
  }
  if (!resp.ok) throw new Error(`refresh failed ${resp.status}`);
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
  if (resp.status === 401) {
    const n = resp.headers.get("DPoP-Nonce");
    if (n) resp = await doCall(n);
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
var OWNER_DID = "did:plc:YOUR_OWNER_DID"; // ← self-hosters: set to your Bluesky host/owner account DID
var NSID = {
  library: "uk.osintnet.cineclub.library",
  watch: "uk.osintnet.cineclub.watch",
  review: "uk.osintnet.cineclub.review",
  favorite: "uk.osintnet.cineclub.favorite"
};
function filmRkey(filmId) {
  return String(filmId).toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 60) || "film";
}
async function putRecord(sess, collection, rkey, record) {
  return pdsXrpc({
    pdsUrl: sess.pds,
    nsidPath: "com.atproto.repo.putRecord",
    method: "POST",
    accessToken: sess.access_token,
    dpop: sess.dpop,
    nonce: sess.dpopNonce,
    body: { repo: sess.did, collection, rkey, record }
  });
}
async function createRecord(sess, collection, record) {
  return pdsXrpc({
    pdsUrl: sess.pds,
    nsidPath: "com.atproto.repo.createRecord",
    method: "POST",
    accessToken: sess.access_token,
    dpop: sess.dpop,
    nonce: sess.dpopNonce,
    body: { repo: sess.did, collection, record }
  });
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
function buildLibrary({ filmId, title, year: year2, poster: poster2, status }) {
  return {
    $type: NSID.library,
    filmId: String(filmId),
    title: title || "",
    year: year2 ? Number(year2) || String(year2) : void 0,
    poster: poster2 || void 0,
    status: status || "want",
    // want | watching | watched
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
  }));
  return { films };
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
  return { items };
}

// party.js
var HOST_HANDLE = "blueboxd.bsky.social";
var HOST_PDS = "https://YOUR-PDS.host.bsky.network"; // ← self-hosters: your PDS endpoint
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
async function hostPost(env, text) {
  const s = await hostSession(env);
  const r = await fetch(`${HOST_PDS}/xrpc/com.atproto.repo.createRecord`, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${s.jwt}` },
    body: JSON.stringify({
      repo: s.did,
      collection: "app.bsky.feed.post",
      record: { $type: "app.bsky.feed.post", text, createdAt: (/* @__PURE__ */ new Date()).toISOString(), langs: ["en"] }
    })
  });
  return r.json();
}
var pid = () => "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

// ── Phase 8: Watch-party discovery + opt-in invite bot ──
// Bluesky policy: we may ONLY auto-reply to users who @-mention us (opt-in).
// For everyone else we do passive discovery (read-only) + post on our OWN feed.
var WATCH_TAGS = ["TCMParty", "NoirAlley", "filmsky", "MovieNight", "WatchParty"];
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
        out.push({
          uri: p.uri, cid: p.cid, tag,
          handle: a.handle, displayName: a.displayName || a.handle, avatar: a.avatar || null,
          text: (p.record && p.record.text || "").slice(0, 240),
          createdAt: created,
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
  const txt = "\u{1F37F} The film world is watching tonight \u2014 " + n + "+ live movie threads buzzing right now (#NoirAlley #TCMParty #filmsky).\n\nNo account? No problem. Blueboxd is free, ad-free public-domain cinema + a film diary, all on Bluesky.\n\nJoin the show \u2192 https://blueboxd.com\n\n#Blueboxd";
  await hostPost(env, txt).catch(()=>{});
}

async function createParty(env, { filmId, title, year: year2, poster: poster2, theme, startsAt, runtimeSec, origin }) {
  const id = pid();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  await env.CC_SOCIAL.prepare(
    `INSERT INTO parties (id,film_id,title,year,poster,theme,starts_at,runtime_sec,status,created_at)
     VALUES (?,?,?,?,?,?,?,?,'scheduled',?)`
  ).bind(
    id,
    String(filmId),
    title || "",
    year2 ? String(year2) : null,
    poster2 || null,
    theme || null,
    startsAt,
    runtimeSec || null,
    now
  ).run();
  let uri = null, cid = null;
  try {
    const when = new Date(startsAt);
    const txt = `\u{1F4FA} BLUEBOXD WATCH PARTY${theme ? " \u2014 " + theme : ""}

\u25B6 ${title}${year2 ? " (" + year2 + ")" : ""}
\u{1F557} ${when.toUTCString().replace(/:00 GMT/, " GMT")}

Free + legal, public-domain. Reply here to react during the show.
Join the room \u2192 ${origin}/party/${id}

#Blueboxd`;
    const p = await hostPost(env, txt);
    uri = p.uri || null;
    cid = p.cid || null;
    if (uri) await env.CC_SOCIAL.prepare(`UPDATE parties SET bsky_uri=?, bsky_cid=? WHERE id=?`).bind(uri, cid, id).run();
  } catch (_) {
  }
  return { id, bskyUri: uri };
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
  return {
    id: r.id,
    filmId: r.film_id,
    title: r.title,
    year: r.year,
    poster: r.poster,
    theme: r.theme,
    startsAt: r.starts_at,
    runtimeSec: r.runtime_sec,
    bskyUri: r.bsky_uri,
    status: r.status,
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
    `SELECT id,film_id,title,year,poster,theme,starts_at,runtime_sec,status
       FROM parties WHERE status != 'cancelled'
       ORDER BY starts_at DESC LIMIT 30`
  ).all();
  const now = Date.now();
  return (rs.results || []).map((r) => {
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
      phase
    };
  });
}
async function rsvp(env, partyId, did, handle) {
  await env.CC_SOCIAL.prepare(
    `INSERT OR IGNORE INTO rsvps (party_id,did,handle,at) VALUES (?,?,?,?)`
  ).bind(partyId, did, handle || null, (/* @__PURE__ */ new Date()).toISOString()).run();
  const r = await env.CC_SOCIAL.prepare(`SELECT COUNT(*) n FROM rsvps WHERE party_id=?`).bind(partyId).first();
  return r ? r.n : 0;
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
<meta property="og:title" content="Blueboxd">
<meta property="og:description" content="Free public-domain cinema. Log in with Bluesky, keep a film diary, share what you watch.">
<meta property="og:type" content="website">
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
.rail{margin:22px 0}
.rail h2{font-size:15px;margin:0 0 10px;display:flex;align-items:center;gap:8px;color:#dfe3e8}
.rail .count{color:var(--mut);font-weight:500;font-size:12px}
.scroller{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px;-webkit-overflow-scrolling:touch}
.scroller::-webkit-scrollbar{height:0}
.card{flex:0 0 auto;width:124px;scroll-snap-align:start;cursor:pointer}
.card .pw{width:124px;height:182px;border-radius:12px;overflow:hidden;background:var(--well);border:1px solid var(--line);position:relative;box-shadow:var(--shadow)}
.card img{width:100%;height:100%;object-fit:cover}
.card .ph{width:100%;height:100%;display:grid;place-items:center;color:var(--mut);font-size:28px}
.card .t{font-size:12.5px;margin-top:6px;line-height:1.25;max-height:32px;overflow:hidden;color:#d6dade}
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
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:14px}
.modal{position:fixed;inset:0;z-index:50;background:rgba(0,0,0,.6);display:grid;place-items:center;padding:18px}
.sheet{background:var(--panel);border:1px solid var(--line);border-radius:18px;max-width:420px;width:100%;padding:22px}
.sheet h3{margin:0 0 6px}
.sheet p{color:var(--mut);font-size:14px;margin:0 0 14px}
.inp{width:100%;background:var(--panel2);border:1px solid var(--line);border-radius:11px;color:var(--txt);padding:12px;font-size:15px;outline:none;margin-bottom:12px}
.muted{color:var(--mut)}
.toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#12331f;border:1px solid #1f5c34;color:var(--good);padding:11px 18px;border-radius:12px;font-size:14px;z-index:60;box-shadow:0 8px 30px rgba(0,0,0,.5)}
.tabbar{display:flex;gap:6px;margin:6px 0 0}
.tab{padding:8px 12px;border-radius:9px;font-size:13px;color:var(--mut);cursor:pointer}
.tab.on{background:var(--panel2);color:var(--txt)}
.themetog{background:var(--panel2);border:1px solid var(--line);color:var(--txt);border-radius:10px;height:38px;padding:0 12px;font-size:13px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:6px;margin-right:8px}
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
.pgi{display:flex;align-items:center;gap:14px;margin:18px 0 14px}
.pgi-av{width:64px;height:64px;border-radius:50%;background:var(--well);border:1px solid var(--line);display:grid;place-items:center;font-size:20px;font-weight:800;color:var(--acc);overflow:hidden;flex:0 0 auto;box-shadow:var(--shadow)}
.pgi-av img{width:100%;height:100%;object-fit:cover}
.pgi h1{margin:0;font-size:22px}
.fallback{background:var(--well);border:1px dashed var(--line);border-radius:14px;padding:22px;text-align:center;color:var(--mut);font-size:14px;margin:18px 0}
.fallback a{font-weight:600}
.about .hero h1{font-size:24px}
.iim{margin-top:10px;overflow-x:auto}
.iim img{max-width:100%;height:auto;border-radius:10px}
.tipwrap{display:flex;gap:18px;align-items:center;flex-wrap:wrap;margin-top:8px}
.qr{background:#fff;padding:10px;border-radius:14px;border:1px solid var(--line);box-shadow:var(--shadow);flex:0 0 auto}
.qr img{width:180px;height:180px;display:block}
</style></head>
<body>
<header><div class="wrap hd">
  <div class="logo" onclick="go('/')">📺 Blue<span>boxd</span></div>
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
window.addEventListener('popstate',route);
function toast(m){const t=el('div','toast',m);document.body.appendChild(t);setTimeout(()=>t.remove(),2200);}
function esc(s){return (s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
async function jget(u){const r=await fetch(u,{credentials:'include'});return r.json();}
async function jpost(u,b){const r=await fetch(u,{method:'POST',credentials:'include',headers:{'content-type':'application/json'},body:JSON.stringify(b)});return r.json();}

function themeLabel(){return curTheme()==='dark'?'☀ Light':'☾ Dark';}
function authSlot(){
  const s=$('#authslot');s.innerHTML='';
  const tg=el('button','themetog',themeLabel());tg.id='themebtn';tg.title='Switch light / dark';tg.onclick=()=>{toggleTheme();tg.textContent=themeLabel();};s.appendChild(tg);
  const club=el('button','tab','🍿 Club');club.style.marginRight='6px';club.onclick=()=>go('/club');s.appendChild(club);
  const party=el('button','tab','🎉 Parties');party.style.marginRight='8px';party.onclick=()=>go('/parties');s.appendChild(party);
  if(ME.loggedIn){
    const wrap=el('div','profwrap');
    const btn=el('button','profbtn');
    const ini=(ME.handle||'?')[0].toUpperCase();
    btn.innerHTML=(ME.avatar?'<img src="'+esc(ME.avatar)+'" alt="">':'<span class="ini">'+esc(ini)+'</span>')+'<span>'+esc((ME.handle||'').replace(/\\.bsky\\.social$/,''))+'</span>';
    const menu=el('div','menu');menu.style.display='none';
    menu.innerHTML='<a data-go="/u/'+esc(ME.handle)+'">👤 My profile</a>'
      +'<a data-go="/diary">🎬 My diary</a>'
      +'<a data-go="/club">🍿 The club</a>'
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
function loginModal(){
  const m=el('div','modal');
  m.innerHTML='<div class="sheet"><h3>Log in with Bluesky 🦋</h3><p>Your film diary &amp; reviews are saved to <b>your own</b> Bluesky account — fully portable, no lock-in.</p><input class="inp" id="h" placeholder="yourname.bsky.social" autocapitalize="off" autocomplete="off"><button class="btn acc" style="width:100%" id="lg">Continue →</button><p style="margin-top:12px;font-size:12px">New to Bluesky? <a href="https://bsky.app" target="_blank">Make a free account</a> first.</p></div>';
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
  hero.innerHTML='<h1>Free cinema. Your club. On Bluesky.</h1><p>Hand-picked public-domain classics — noir, sci-fi, horror, gangster &amp; more. Watch free, keep a film diary, share what you love. '+(ME.loggedIn?'':'<b>Log in to start your diary →</b>')+'</p>';
  if(!ME.loggedIn){const b=el('button','btn acc','Log in with Bluesky 🦋');b.style.marginTop='12px';b.onclick=loginModal;hero.appendChild(b);}
  app.appendChild(hero);

  if(d.people&&d.people.length){
    const stars=d.people.filter(p=>p.role!=='director');
    const dirs=d.people.filter(p=>p.role==='director');
    app.appendChild(peopleRail('🎭 Browse by star',stars));
    if(dirs.length)app.appendChild(peopleRail('🎬 Browse by director',dirs));
  }
  // Phase 2: "the club is watching" rail (only if there's activity)
  try{
    const cw=await jget('/api/feed/watching');
    if(cw&&cw.films&&cw.films.length){
      const r=el('div','rail');
      const h=el('h2',null,'🍿 The club is watching');h.style.cursor='pointer';h.onclick=()=>go('/club');
      r.appendChild(h);
      const sc=el('div','scroller');
      cw.films.forEach(f=>sc.appendChild(clubCard(f)));
      r.appendChild(sc);app.appendChild(r);
    }
  }catch(e){}
  // Phase 5: Pete's Picks — owner-curated rail, read-only for everyone
  try{
    const pk=await jget('/api/picks');
    if(pk&&pk.picks&&pk.picks.length){
      const r=el('div','rail');
      r.appendChild(el('h2',null,'★ Pete’s Picks'));
      r.appendChild(el('p','muted','Hand-picked by the host — the ones worth your night in.'));
      const sc=el('div','scroller');
      pk.picks.forEach(f=>{
        const c=cardEl({id:f.film_id,title:f.title,year:f.year,poster:f.poster});
        if(f.note){const n=el('div','picknote',esc(f.note));c.appendChild(n);}
        sc.appendChild(c);
      });
      r.appendChild(sc);app.appendChild(r);
    }
  }catch(e){}
  // Phase 8: live watch-party discovery rail (read-only — we surface the buzz, never spam it)
  try{
    const dv=await jget('/api/discovery');
    if(dv&&dv.posts&&dv.posts.length>=3){
      const r=el('div','rail');
      r.appendChild(el('h2',null,'🔴 The film world is watching tonight'));
      r.appendChild(el('p','muted','Live movie threads buzzing on Bluesky right now. Tap to join the conversation — or start your own here.'));
      const sc=el('div','scroller');
      dv.posts.slice(0,16).forEach(p=>{
        const c=el('a','discard');c.href=p.link;c.target='_blank';c.rel='noopener';
        const top=el('div','discrow');
        if(p.avatar){const im=el('img','discav');im.src=p.avatar;im.loading='lazy';top.appendChild(im);}
        const nm=el('div');nm.innerHTML='<b>'+esc(p.displayName)+'</b><br><span class="muted">@'+esc(p.handle)+'</span>';
        top.appendChild(nm);c.appendChild(top);
        c.appendChild(el('div','disctxt',esc(p.text)));
        c.appendChild(el('div','disctag','#'+esc(p.tag)));
        sc.appendChild(c);
      });
      r.appendChild(sc);app.appendChild(r);
    }
  }catch(e){}
  (d.rails||[]).forEach(rl=>app.appendChild(railEl(rl)));
}

function peopleRail(title,people){
  const r=el('div','rail');r.appendChild(el('h2',null,title));
  const pp=el('div','people');
  people.forEach(p=>pp.appendChild(personCard(p)));
  r.appendChild(pp);return r;
}
function personCard(p){
  const c=el('div','person');
  const mono=esc((p.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase());
  const pcd=el('div','pc');
  if(p.portrait){const im=el('img');im.loading='lazy';im.src=p.portrait;im.onerror=function(){pcd.textContent=mono;};pcd.appendChild(im);}else{pcd.textContent=mono;}
  c.appendChild(pcd);
  c.appendChild(el('div','pn',esc(p.name)));
  c.onclick=()=>go('/person/'+p.id);return c;
}
// club-feed card: poster + watcher/review badges
function clubCard(f){
  const c=el('div','card');
  const pw=el('div','pw');
  if(f.poster){const im=el('img');im.loading='lazy';im.src=f.poster;im.onerror=function(){pw.innerHTML='<div class="ph">🎞️</div>';};pw.appendChild(im);}
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
function railEl(rl){
  const r=el('div','rail');
  const h=el('h2',null,esc(rl.label)+' <span class="count">'+(rl.total||(rl.docs||[]).length)+'</span>');
  if(rl.id&&(rl.total||0)>(rl.docs||[]).length){const sa=el('span','seeall',' See all →');sa.onclick=()=>go('/genre/'+rl.id);h.appendChild(sa);h.style.cursor='pointer';h.onclick=()=>go('/genre/'+rl.id);}
  r.appendChild(h);
  const sc=el('div','scroller');
  (rl.docs||[]).forEach(f=>sc.appendChild(cardEl(f)));
  r.appendChild(sc);return r;
}
function cardEl(f){
  const c=el('div','card');
  const pw=el('div','pw');
  if(f.poster){const im=el('img');im.loading='lazy';im.src=f.poster;im.onerror=function(){pw.innerHTML='<div class="ph">🎞️</div>';};pw.appendChild(im);}
  else pw.innerHTML='<div class="ph">🎞️</div>';
  c.appendChild(pw);
  c.appendChild(el('div','t',esc(f.title||'')));
  if(f.year)c.appendChild(el('div','y',f.year));
  c.onclick=()=>go('/film/'+encodeURIComponent(f.id));
  return c;
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
  const g=el('div','grid');app.appendChild(g);
  (d.docs||[]).forEach(f=>g.appendChild(cardEl(f)));
  if((d.docs||[]).length>=total)done=true;
  const sent=el('div');sent.style.height='1px';app.appendChild(sent);
  async function more(){if(busy||done)return;busy=true;page++;
    const r=await jget('/api/person?id='+encodeURIComponent(id)+'&rows=40&page='+page);
    (r.docs||[]).forEach(f=>g.appendChild(cardEl(f)));
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
  app.appendChild(el('h2',null,esc(d.label||'Browse')+' <span class="count">'+(d.total||0)+'</span>'));
  const g=el('div','grid');app.appendChild(g);
  (d.docs||[]).forEach(f=>g.appendChild(cardEl(f)));
  const sent=el('div');sent.style.height='1px';app.appendChild(sent);
  async function more(){if(busy||done)return;busy=true;page++;
    const r=await jget('/api/rail?id='+encodeURIComponent(id)+'&rows=60&page='+page);
    (r.docs||[]).forEach(f=>g.appendChild(cardEl(f)));
    if(!(r.docs||[]).length)done=true;busy=false;}
  const io=new IntersectionObserver(es=>{if(es[0].isIntersecting)more();},{rootMargin:'700px'});io.observe(sent);
  document.title=(d.label||'Browse')+' — Blueboxd';
}
async function searchPage(q){
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  const d=await jget('/api/search?q='+encodeURIComponent(q));try{jpost('/api/searchlog',{q:q,results:(d&&d.docs&&d.docs.length)||0}).catch(()=>{});}catch(e){}
  app.innerHTML='';app.appendChild(el('h2',null,'🔎 “'+esc(q)+'”'));
  const g=el('div','grid');(d.docs||[]).forEach(f=>g.appendChild(cardEl(f)));
  if(!(d.docs||[]).length)app.appendChild(el('p','muted','No matches. Try another title.'));
  app.appendChild(g);
}

// ---------- FILM ----------
function plog(action,d,reason){try{navigator.sendBeacon&&navigator.sendBeacon('/api/playlog',new Blob([JSON.stringify({action:action,filmId:(d&&(d.id||d.filmId))||'',title:(d&&d.title)||'',reason:reason||''})],{type:'application/json'}))||jpost('/api/playlog',{action:action,filmId:(d&&(d.id||d.filmId))||'',title:(d&&d.title)||'',reason:reason||''}).catch(()=>{});}catch(e){}}
async function filmPage(id){
  const app=$('#app');app.innerHTML='<div class="center"><div class="spin"></div></div>';
  let d;try{d=await jget('/api/detail?id='+encodeURIComponent(id));}catch(e){app.innerHTML='<div class="center">Couldn’t load this film.</div>';return;}
  app.innerHTML='';
  const f=el('div','film');
  const top=el('div','top');
  const pos=el('div','poster');pos.innerHTML=d.poster?'<img src="'+esc(d.poster)+'">':'<div class="ph">🎞️</div>';
  const meta=el('div','meta');
  meta.innerHTML='<h1>'+esc(d.title||'')+'</h1><div class="sub">'+[d.year,d.director,d.runtime].filter(Boolean).map(esc).join(' · ')+'</div>';
  const act=el('div','actions');
  const playB=el('button','btn acc','▶ Watch free');playB.onclick=()=>startPlay(d);
  const libB=el('button','btn','＋ My list');libB.onclick=()=>addLib(d,'want',libB);
  const watchedB=el('button','btn','✓ Watched');watchedB.onclick=()=>addLib(d,'watched',watchedB,true);
  act.append(playB,libB,watchedB);
  if(ME.isOwner){
    const pickB=el('button','btn','★ Pete’s Pick');pickB.title='Add / remove from Pete’s Picks';
    pickB.onclick=()=>togglePick(d,pickB);
    act.appendChild(pickB);
  }
  meta.appendChild(act);
  top.append(pos,meta);f.appendChild(top);
  if(d.description)f.appendChild(el('div','desc',esc(d.description)));
  const ph=el('div');ph.id='playerHost';f.appendChild(ph);
  f.appendChild(reviewBlock(d));
  if(d.archiveUrl)f.appendChild(el('p','muted','Source: <a href="'+esc(d.archiveUrl)+'" target="_blank">Internet Archive</a> · public domain'));
  app.appendChild(f);
  document.title=(d.title||'Film')+' — Blueboxd';
}
function startPlay(d){
  const host=$('#playerHost');if(!host)return;
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
  const r=await jpost('/api/library',{filmId:d.id,title:d.title,year:d.year,poster:d.poster,status});
  if(r.ok){btn.textContent=status==='watched'?'✓ Watched':'✓ In list';toast(status==='watched'?'Marked watched ✓':'Added to your list ✓');}
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
  save.onclick=async()=>{if(!stars)return toast('Pick a star rating first ⭐');save.textContent='…';
    const r=await jpost('/api/review',{filmId:d.id,title:d.title,year:d.year,stars,text:ta.value,crosspost:cp.checked});
    if(r.ok){save.textContent='Saved ✓';toast(cp.checked?'Review posted + shared to Bluesky ✓':'Review saved to your diary ✓');}else{save.textContent='Try again';}
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
  const watched=lib.filter(x=>x.status==='watched');
  const want=lib.filter(x=>x.status!=='watched');
  app.appendChild(el('p','muted',watched.length+' watched · '+want.length+' in list · '+rev.length+' reviews'));
  const out=el('button','btn','Log out');out.onclick=()=>location.href='/logout';out.style.margin='6px 0 16px';app.appendChild(out);
  section('✓ Watched',watched);section('🔖 Want to watch',want);
  function section(title,arr){if(!arr.length)return;app.appendChild(el('h2',null,title));const g=el('div','grid');arr.forEach(x=>g.appendChild(cardEl({id:x.filmId,title:x.title,year:x.year,poster:x.poster})));app.appendChild(g);}
  if(!lib.length)app.appendChild(el('p','muted','Nothing yet — browse the catalog and add films to your list!'));
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
  let t;q.oninput=()=>{clearTimeout(t);const v=q.value.trim();if(v.length<2){res.innerHTML='';return;}t=setTimeout(async()=>{const d=await jget('/api/search?q='+encodeURIComponent(v));res.innerHTML='';(d.docs||[]).slice(0,12).forEach(f=>{const c=cardEl({id:f.id,title:f.title,year:f.year,poster:f.poster});c.onclick=async()=>{await setFavorite(slot,f);m.remove();profilePage(handle);};res.appendChild(c);});},380);};
}
function staticPage(which){
  const app=$('#app');app.innerHTML='';
  if(which==='tos'){
    app.innerHTML='<div class="legal"><h2>Terms of Use</h2>'
      +'<p class="muted">Last updated June 2026.</p>'
      +'<h3>What Blueboxd is</h3><p>Blueboxd is a free, non-commercial film diary and watch-party layer built on the AT Protocol (Bluesky). We curate films we believe to be in the <b>public domain</b> and stream them <b>directly from the Internet Archive</b>. <b>Blueboxd hosts and stores no video files</b> — we link to and embed archival sources only.</p>'
      +'<h3>Your content</h3><p>Your diary entries, watches, ratings and reviews are written to <b>your own Bluesky repository</b>. You own them and can delete them at any time from your account.</p>'
      +'<h3>Conduct</h3><p>Be decent. Bluesky moderation — mutes, blocks and labels — applies in watch-party reaction walls. We may hide reactions that violate Bluesky community guidelines.</p>'
      +'<h3>No warranty</h3><p>Provided “as is,” free of charge, with no warranty. Availability of any title depends on the Internet Archive and may change without notice.</p>'
      +'<h3>Copyright / takedown</h3><p>We respect rights holders. If you believe a title is not actually public domain, see our <a href="/dmca">takedown page</a> — we act fast and remove first, verify after.</p></div>';
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
  let d;try{d=await jget('/api/party/list');}catch(e){app.innerHTML='<div class="center">Couldn’t load parties.</div>';return;}
  app.innerHTML='';
  app.appendChild(el('h2',null,'🎉 Watch Parties'));
  app.appendChild(el('p','muted','Scheduled group screenings. Show up, watch together, react live.'));
  const ps=(d.parties||[]);
  if(!ps.length){app.appendChild(el('p','muted','No parties scheduled yet. The host (@blueboxd) will announce the next pick on Bluesky. 🍿'));return;}
  const grid=el('div','rail');
  ps.forEach(p=>{
    const c=el('div','card');c.style.width='100%';c.style.maxWidth='420px';
    const badge=p.phase==='live'?'<span style="color:#ff5b5b">🔴 LIVE NOW</span>':(p.phase==='ended'?'<span class="muted">ended</span>':'🕗 '+new Date(p.startsAt).toLocaleString());
    c.innerHTML='<div style="display:flex;gap:12px"><div style="flex:0 0 64px">'+(p.poster?'<img src="'+esc(p.poster)+'" style="width:64px;border-radius:8px">':'🎞️')+'</div><div><div class="t">'+esc(p.title||'')+(p.year?' ('+p.year+')':'')+'</div>'+(p.theme?'<div class="muted" style="font-size:12px">'+esc(p.theme)+'</div>':'')+'<div style="font-size:13px;margin-top:4px">'+badge+'</div></div></div>';
    c.onclick=()=>go('/party/'+p.id);
    grid.appendChild(c);
  });
  app.appendChild(grid);
}

// ---------- /party/:id room ----------
let _wallTimer=null,_partyTimer=null;
function clearPartyTimers(){if(_wallTimer)clearInterval(_wallTimer);if(_partyTimer)clearInterval(_partyTimer);_wallTimer=_partyTimer=null;if(window._beaconTimer){clearInterval(window._beaconTimer);window._beaconTimer=null;}_partyVideo=null;}
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

  // player host
  const ph=el('div');ph.id='partyPlayer';ph.style.margin='12px 0';app.appendChild(ph);

  // reaction wall
  app.appendChild(el('h2',null,'💬 Reaction wall'));
  if(ME.loggedIn){
    const rb=el('div');rb.style.display='flex';rb.style.gap='6px';rb.style.margin='6px 0';
    const ri=el('input','inp');ri.placeholder='Drop a reaction…';ri.maxLength=300;ri.style.flex='1';
    const rsend=el('button','btn acc','Send');
    const send=async()=>{const t=ri.value.trim();if(!t)return;ri.value='';await jpost('/api/party/react',{partyId:id,text:t});loadWall(id,true);};
    rsend.onclick=send;ri.onkeydown=e=>{if(e.key==='Enter')send();};
    rb.append(ri,rsend);app.appendChild(rb);
    // quick emoji
    const qr=el('div');qr.style.margin='2px 0 10px';['😂','😱','❤️','🔥','👏','🎬'].forEach(em=>{const b=el('button','tab',em);b.onclick=async()=>{await jpost('/api/party/react',{partyId:id,emoji:em,text:em});loadWall(id,true);};qr.appendChild(b);});
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
    st.innerHTML='⏳ Starts in <b>'+(h?h+'h ':'')+m+'m '+sec+'s</b> — the film unlocks at showtime.';
    const ph=$('#partyPlayer');if(ph&&!ph.dataset.locked){ph.dataset.locked='1';ph.innerHTML='<div class="ph" style="aspect-ratio:16/9;display:grid;place-items:center;border-radius:12px">🔒 Opens at showtime</div>';}
  }else if(p.phase==='live'){
    const synced=p.hostFresh?'synced to the host ▶':'synced to the group';
    st.innerHTML='🔴 <b>LIVE</b> · '+fmtElapsed(p.elapsedSec)+' in — '+(ME.isOwner?'<b>you’re hosting</b> — the room follows your player.':'the player is '+synced+'.');
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
    <div class="hero" style="margin-top:16px"><h1>About Blueboxd</h1>
    <p>Blueboxd is a home for <b>public-domain cinema</b> — noir, sci-fi, horror, gangster and golden-age classics — watched together on Bluesky. Log in with your Bluesky account, keep a film diary, rate what you watch, and see what the club is watching in real time.</p></div>

    <div class="rail"><h2>🎞️ How it works</h2>
    <p class="muted">Every film streams <b>directly from the Internet Archive</b> — we store no video and add no ads. Your diary and reviews live in <b>your own Bluesky repo</b>, not locked in our database. Curated for public-domain status; if something shouldn't be here, tell us and it's gone.</p></div>

    <div class="rail"><h2>🛡️ Independent & ad-free</h2>
    <p class="muted">Blueboxd is built and run by <a href="https://osintnet.uk" target="_blank" rel="noopener">Indica Independent</a> — independent OSINT &amp; open tooling, in the VPDLNY tradition: information serves people, never the other way around. No trackers, no data sale, no dark patterns.</p>
    <div class="iim"><img loading="lazy" alt="Indica Independent — open-source contributions" src="https://trophy.osintnet.uk/?username=indicaindependent"></div></div>

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
    <p class="muted"><a href="https://osintnet.uk" target="_blank" rel="noopener">osintnet.uk</a> · <a href="https://warheatmap.app" target="_blank" rel="noopener">warheatmap.app</a> · <a href="https://discord.osintnet.uk" target="_blank" rel="noopener">Discord</a> · <a href="https://bsky.app/profile/indica.osintnet.uk" target="_blank" rel="noopener">@indica.osintnet.uk</a></p></div>
  \`;
  app.appendChild(wrap);
  // QR via public image API pointed at the tip page (no extra JS dep)
  const qr=wrap.querySelector('#tipqr');
  if(qr)qr.src='https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=0&data='+encodeURIComponent('https://osintnet.uk/tip');
  document.title='About — Blueboxd';
}

function setSearchVisible(v){const sb=document.getElementById('searchbox');if(sb)sb.style.display=v?'':'none';}
function route(){
  if(typeof clearPartyTimers==='function'){try{clearPartyTimers();}catch(e){}}
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
  if(p==='/club')return clubPage();
  if(p==='/parties')return partiesPage();
  if(p.startsWith('/party/'))return partyRoom(decodeURIComponent(p.slice(7)));
  if(p==='/tos')return staticPage('tos');
  if(p==='/privacy')return staticPage('privacy');
  if(p==='/dmca')return staticPage('dmca');
  home();
}
// search
let st;$('#q').addEventListener('input',e=>{clearTimeout(st);const v=e.target.value.trim();st=setTimeout(()=>{if(v.length>=2)searchPage(v);else if(location.pathname==='/')home();},420);});
$('#q').addEventListener('keydown',e=>{if(e.key==='Enter'){const v=e.target.value.trim();if(v)searchPage(v);}});

function showClickwrap(){
  try{ if(localStorage.getItem('bbx_consent_v1')) return; }catch(e){ return; }
  const w=el('div','cw');
  const bar=el('div','cwbar');
  bar.innerHTML='<p>🎬 <b>Welcome to Blueboxd.</b> We stream <b>public-domain</b> films straight from the Internet Archive — we host no video, run no ads, and never sell your data. Your diary lives in your own Bluesky repo. By continuing you agree to our <a href="/tos">Terms</a> &amp; <a href="/privacy">Privacy</a>.</p>';
  const row=el('div','row');
  const ok=el('button','btn acc','Got it — enter');
  const learn=el('button','btn','Read the terms');
  ok.onclick=()=>{try{localStorage.setItem('bbx_consent_v1',Date.now());}catch(e){} jpost('/api/consent',{v:'v1'}).catch(()=>{}); w.remove();};
  learn.onclick=()=>{w.remove();go('/tos');};
  row.append(ok,learn);bar.appendChild(row);w.appendChild(bar);document.body.appendChild(w);
}
(async()=>{try{ME=await jget('/api/me');if(ME.loggedIn&&ME.handle){try{const _pr=await jget('/api/profile?handle='+encodeURIComponent(ME.handle));if(_pr&&_pr.profile){ME.avatar=_pr.profile.avatar;ME.displayName=_pr.profile.displayName;}}catch(e){}};}catch(e){}authSlot();route();showClickwrap();})();
</script>
</body></html>`;

// worker.js
var APP_ID = "69a76ce1b110c1c0c8c86855";
var CATALOG_API = `https://base44.app/api/apps/${APP_ID}/functions/cinevault`;
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
  if (sess.expires_at && Date.now() > sess.expires_at - 6e4 && sess.refresh_token) {
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
async function catalog(action, params = {}) {
  const r = await fetch(CATALOG_API, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ action, ...params }),
    cf: { cacheTtl: 300, cacheEverything: true }
  });
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
    ]);
    // Phase 6: host position beacon columns (idempotent — ignore "duplicate column")
    for (const col of ["host_pos REAL", "host_pos_at INTEGER", "host_paused INTEGER"]) {
      try { await env.CC_SOCIAL.prepare(`ALTER TABLE parties ADD COLUMN ${col}`).run(); } catch(e){}
    }
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
    ctx.waitUntil(ensureSchema(env).catch(() => {}));
    ctx.waitUntil(scanWatchParties(env).catch(() => {}));  // discovery (self-throttled ~7min)
    ctx.waitUntil(pollMentions(env).catch(() => {}));       // opt-in invite replies (self-throttled ~3min)
    ctx.waitUntil(dailyRoundup(env).catch(() => {}));       // once/day own-feed roundup
  },
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const origin = selfOrigin(env, url);
    try {
      ctx.waitUntil(ensureSchema(env));
      if (path === "/health" || path === "/__health") return new Response("ok");
      if (path === "/logo.png") {
        const bin = Uint8Array.from(atob(LOGO_B64), c => c.charCodeAt(0));
        return new Response(bin, { headers: { "content-type": "image/png", "cache-control": "public, max-age=86400" } });
      }
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
        }, 200, { "cache-control": "public, max-age=300" });
      }
      if (path === "/.well-known/jwks.json") {
        const pub = publicJwkFromPrivate(loadPrivateJwk(env));
        return json({ keys: [pub] }, 200, { "cache-control": "public, max-age=300" });
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
        const data = await catalog("home");
        return json(data, 200, { "cache-control": "public, max-age=120" });
      }
      if (path === "/api/rail") {
        const id = url.searchParams.get("id");
        const rows = url.searchParams.get("rows") || "24";
        return json(await catalog("rail", { id, rows: Number(rows) }), 200, { "cache-control": "public, max-age=300" });
      }
      if (path === "/api/person") {
        const id = url.searchParams.get("id");
        return json(await catalog("person", { id }), 200, { "cache-control": "public, max-age=300" });
      }
      if (path === "/api/search") {
        const q = url.searchParams.get("q") || "";
        return json(await catalog("search", { q }), 200, { "cache-control": "public, max-age=120" });
      }
      if (path === "/api/detail") {
        const id = url.searchParams.get("id");
        const source = url.searchParams.get("source") || "archive";
        return json(await catalog("detail", { id, source }), 200, { "cache-control": "public, max-age=600" });
      }
      if (path === "/api/library" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const { filmId, title, year: year2, poster: poster2, status, remove } = await request.json();
        const rkey = filmRkey(filmId);
        let res;
        if (remove) res = await deleteRecord(sess, NSID.library, rkey);
        else res = await putRecord(sess, NSID.library, rkey, buildLibrary({ filmId, title, year: year2, poster: poster2, status }));
        await touchNonce(env, sess, res.dpopNonce);
        return json({ ok: res.ok, status: res.status, data: res.data });
      }
      if (path === "/api/favorite" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const b = await request.json();
        const slot = Math.max(1, Math.min(4, Number(b.slot)||1));
        const rkey = "fav" + slot;
        let res;
        if (b.remove) res = await deleteRecord(sess, NSID.favorite, rkey);
        else res = await putRecord(sess, NSID.favorite, rkey, buildFavorite({ filmId: b.filmId, title: b.title, year: b.year, poster: b.poster, slot }));
        await touchNonce(env, sess, res.dpopNonce);
        return json({ ok: res.ok, status: res.status, data: res.data });
      }
      if (path === "/api/watch" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const { filmId, title, progressPct, partyId } = await request.json();
        const res = await createRecord(sess, NSID.watch, buildWatch({ filmId, title, progressPct, partyId }));
        await touchNonce(env, sess, res.dpopNonce);
        if (res.ok) ctx.waitUntil(indexWatch(env, { did: sess.did, handle: sess.handle, filmId, title, kind: "watch", at: (/* @__PURE__ */ new Date()).toISOString() }));
        return json({ ok: res.ok, status: res.status });
      }
      if (path === "/api/review" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const { filmId, title, stars, text, spoiler, crosspost } = await request.json();
        const rkey = filmRkey(filmId);
        const res = await putRecord(sess, NSID.review, rkey, buildReview({ filmId, title, stars, text, spoiler }));
        await touchNonce(env, sess, res.dpopNonce);
        if (crosspost && res.ok) {
          const starStr = "\u2605".repeat(Math.max(1, Math.min(5, Number(stars) || 0)));
          const body = `${starStr} ${title} (${year || ""})
${(text || "").slice(0, 200)}

Watched free on Blueboxd \u{1F3AC}
${sess.origin}/film/${encodeURIComponent(filmId)}

#Blueboxd`;
          try {
            await postToTimeline(sess, body);
          } catch {
          }
        }
        if (res.ok) ctx.waitUntil(indexWatch(env, { did: sess.did, handle: sess.handle, filmId, title, year, poster, kind: "review", stars, at: (/* @__PURE__ */ new Date()).toISOString() }));
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
      if (path === "/api/feed/friends") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const follows = await fetchFollows(sess);
        const out = await friendsWatching(env, follows, { days: 60, limit: 30 });
        return json(out);
      }
      if (path === "/api/crosspost" && request.method === "POST") {
        const sess = await loadSession(request, env);
        if (!sess) return json({ error: "auth" }, 401);
        const { filmId, title, year: year2, note } = await request.json();
        const body = `${note ? note + "\\n\\n" : ""}Watching ${title}${year2 ? " (" + year2 + ")" : ""} free on Blueboxd \u{1F3AC}\\n${sess.origin}/film/${encodeURIComponent(filmId)}\\n\\n#Blueboxd`;
        try {
          const r = await postToTimeline(sess, body);
          await touchNonce(env, sess, r.dpopNonce);
          return json({ ok: r.ok, status: r.status });
        } catch (e) {
          return json({ ok: false, error: String(e.message || e) }, 500);
        }
      }
      if (path === "/api/party/create" && request.method === "POST") {
        // Two ways in: (1) owner browser session, (2) server-to-server host secret (automation).
        const hostSecret = request.headers.get("X-Host-Secret");
        const viaSecret = env.PARTY_HOST_SECRET && hostSecret && hostSecret === env.PARTY_HOST_SECRET;
        if (!viaSecret) {
          const sess = await loadSession(request, env);
          if (!sess) return json({ error: "auth" }, 401);
          if (sess.did !== OWNER_DID) return json({ error: "host only" }, 403);
        }
        const b = await request.json();
        const out = await createParty(env, { ...b, origin });
        return json(out);
      }
      if (path === "/api/party/cancel" && request.method === "POST") {
        const hostSecret = request.headers.get("X-Host-Secret");
        const viaSecret = env.PARTY_HOST_SECRET && hostSecret && hostSecret === env.PARTY_HOST_SECRET;
        if (!viaSecret) {
          const sess = await loadSession(request, env);
          if (!sess || sess.did !== OWNER_DID) return json({ error: "host only" }, 403);
        }
        const b = await request.json();
        const pidv = String(b.partyId||"");
        if (!pidv) return json({ error: "no party" }, 400);
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
      if (path === "/" || path.startsWith("/film/") || path.startsWith("/u/") || path.startsWith("/person/") || path.startsWith("/genre/") || path === "/about" || path === "/diary" || path === "/club" || path === "/parties" || path.startsWith("/party/") || path === "/tos" || path === "/privacy" || path === "/dmca") {
        return html(SHELL_HTML(origin));
      }
      return json({ error: "not found" }, 404);
    } catch (e) {
      return html(errPage(`Something went wrong: ${String(e.message || e).slice(0, 200)}`), 500);
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
