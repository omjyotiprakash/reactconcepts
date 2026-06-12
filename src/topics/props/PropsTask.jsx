// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from './Card';

const PropsTask = () => {
  const data = [
    {
      name: "Robert Downey Jr.",
      username: "rdj",
      about: "You Know Who I am.",
      post: 10,
      following: 150,
      follower: '50M',
      image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ8Okgv8TEAp2ynb0CV3T6Cm0O1c-G7lF7LPetuYVfnG_7Srd9CWctjMt4FLeAZ4VhEOGGgezwlkqOL8ms'
    },
    {
      name: "Scarlett Johansson",
      username: "scarlettjohansson",
      about: "Scarlett Ingrid Johansson is an American actress.",
      post: 25,
      following: 241,
      follower: '25M',
      image: 'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_FMjpg_UX1000_.jpg'
    },
    {
      name: "Chris Evans",
      username: "chrisevans",
      about: "I am your Captain.",
      post: 1,
      following: 22,
      follower: '45M',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOB0SjwCiIOLgPHkzoODKhq7Vw2BXX5BJb6ccUiBPBYNY0ag5YEYOM3eHMFynvTi7mzGl7O8WRq3w6rUfjTSkWVZH2LEGM9BcgHHnYaSA&s=10'
    },
    {
      name: "Chris Hemsworth",
      username: "thorodinson",
      about: "You Know me as Thor.",
      post: 222,
      following: 140,
      follower: '36M',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBoVRpxgUCK4l3ADxYe0M2g9ajiENHjX7qEVaCsnSYXq6U7JdA1TtmH-s2jbBqeZkY_VcKm7HpSgF8Md9QkSwm8NXP-Y6INZkrWXj9dCndw&s=10'
    },
    {
      name: "Mark Ruffalo",
      username: "mrkr",
      about: "Haha",
      post: 0,
      following: 0,
      follower: '9M',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTC5zMKabVB_V69FazimrWgqgDJNETVUML8NWqQwD0U2rKOBcyTZJcJccvifxB-TaXLY7ygzcAKziXu1OKOjahW0petL3CS20UKa8ks3Dfw&s=10'
    },
    {
      name: "Jeremy Renner",
      username: "jeremyrenner",
      about: "Just an Avenger",
      post: 548,
      following: 1056,
      follower: '2.2M',
      image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQk1DKapv7LsPj-NDyM7s0m-ccFD1y3DHtXRSF9ZRWUfM0a4zECgbuWlkwzXPk4jJCqgV-19eYB-yN20yn1vXxfcFYAXGxifwGndfmvLtYX7mkmOnkCW7l9eGYzfoJrDIKbGO3OYFObQ5I&s=19'
    },
    {
      name: "Cobie Smulders",
      username: "cs",
      about: "",
      post: 54,
      following: 215,
      follower: '975K',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMVFhUXFRcVFRgXFxUVFxcVFRUXFxYXFxcYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABDEAABAwIDBQQHBQUGBwAAAAABAAIDESEEBTEGEkFRYRNxgZEiMqGxwdHwByNCUvEUM2KC4RVUcnOSohYkRFNjwtL/xAAaAQACAwEBAAAAAAAAAAAAAAABAgADBQQG/8QAKhEAAgMAAQQBBAEEAwAAAAAAAAECAxEhBBIxQVETIjJhsTORodEUI4H/2gAMAwEAAhEDEQA/AK6HJacFI/sfotSIQliEcl6HEjn0yByKvBD/AIf6LZCEJQhCmIOmVweSbp0WiwWG3VLbEOSTPiWR66/lFz5Ib8EHAxGGqgzLa2GEEv4fzeFAszi/tTpaOCvVxA9gqqp2xh+TCk2dH7NH2a5a37Vpv7vH/qd8k/F9qz/xYceDvmqv+VW/f8h7WdK3EW4sfl/2k4WQgSNfGeZuPYtRl2bQTisUrH/4XD3K2Nil4eg8D+6huqQY0gsTKQBmiFE5uoUTaQS0LN7St9ErUNCzu0rfRKMHyQ41nI+8KgKyzwfeFVyxbPzZcvAlBGgqwhIIIKEPRYCUAjASgFvtnOEAnGtRtajcaCpNOqVsgmc7rSVkNosyZEwitCbOpqakVvxqKnyVVt5ttuHssO4Fws59jToKWqsBNj5ZCC95PSthyXNb1Ua9iuWOo6TMyxhmPANrYBV00duvenu2ACSMQP0WZKTk9ZaReyKcbGdE+2avH2J1r28S0ebT8khCKW01p5pcLy128xxaRoQaHzClbgd+LT+b2iqYkw/I+74IkNbs79oM0FGYgdqzSujwO/Ry6dk2dwYpu9C8O5jRw726hef91w1uE7gsU6NwcxxaRxFiF0V9TKPEuRXFHostSC1YDZLb0ktixR1NGyjnyePiuiNIcKhd8LFJaitrBsBZ/aRvolaXdWf2kb6JV1b5AziufD7wqsVrtCPvCqtY9v5suXgJBBBVhCQRolCHpBoTjQiATjGrcbOcUxq5T9pu1G884eF1h65HPkCui7T49uHw0krjQNaacy4ijR4mi87SSlxLjck1J6rj6m1xji8seK0XAzmjlN7BHhgShiASVmloy56DZERjugGhQhIbiBxSzjBSgAUbswjDFCDglqdR5KQ1rzpU9xTMbByUyKDkR3f04+ChAonnR3ySpWNJpoef1qimY4ai3C3uITPafXxUIAuLDQ/0K6P9nW0//TyP/wAsu1p+WvMe1YCNwIo4VHG+nihGTG4UOl2kcafFW1WOuWka09FxyA24qj2jb6JRbDZy3EwCv7xooT+anFPbRM9ErWqacuClnD9o/wB4VUq42lH3pVQsu7+oy1eAkEaJVBCQRoKEPSjQno2ptqeFgtmTKDmn2zZnRkWHH4nF7u5osPNwXJqrSfaDjjLjZSTUMIYO4fqs0FldRLbH+uC2K4JcElFLaBSpVc1ynR+qdNPaqRiHI+pKMBNOsjBJUISWRp8YVRoJyDr8VaR4ptLsPePbyIUCRWwEd3BWMDRu0IN9QaEd9f0SG4hp0uD1uDzB5o4p70rXrpbjX69yhBXakWItXQ8K60qoONw195h10Ol+R5FO4iYg9KWrfw+tU02TyOo+vf5qEGcPLwNipFainEad/JRMXEWuqDUag9EqObnr9aqENdsFm/YzbjiQ1xtTgeP10XU83k34yen0VwNmJ3Xh7bUIPcRoV1zIsy7fCg19INofA0p7vNafQ2d32v0V2L2cy2qbSUqkWg2vH3qoFydR/UkNHwEgjRKkISCNBQh6Dw+Pqn5sxAYTXgSqGCMqNnkhZBKeUbj/ALSvTSpjumPG+XBxrHT9pI95/E5zvMkpkiyHLuSSvLt7ybAphUzDuURgVjgMGXmymhS0ZkgNbKTFgXEAU87LZZFs9vEBbKDY5vE+WgVMrUjqh0zfk41iMtLdPGyiFhBvVd9m2RjLaGp5Xp7gsrnOxg9I7tKfxE1FOqCuQ0ulfpnN8MwOsLHxPmPkg8ujdQ2P1cKfj8ldE804G1OSYxUh0fUjgTqD38QrVJM55Qa8jMkoIof06hRCaaInWsiKYrHN+o+rJqUcQhRKYVCDTXrUbHbSDDv7OT9240J/LUUv00WbdHxCYKeux1yUkBrTT7YGstRpw7qVHvWfTpxBcwNOrbDuTZT2T75OXyBLAkEaJVhAgggoQ9BRxABVO08VcLNT/tPP+0q0bJWyj5xFWCUc43DzFF6N6ZUcbR5+KIJZbqjJC80aocQut5snl4dw1Fzyry68PNYfCRbzgF13Z1jWsZSmnBVWvEdnSQ7paXuUQhhtSg0otDC+qo4xS4VhhZCuNs0e0t4xWidnwjXCjgKGxUJs1Ka+Cf7U0TppFM4S0z2cbLRvqRqeIFCO9YXP9mS0G1TwpW/TvXWQ5Q8ZA1+oCXvx6hlHVkjzjj4N0kXBHPUKGF1jbvZEFvawi41HMfNcrlBaaH9F11zUkZ19Lg/0JDihvHknGx7yIQOVpQE2QjgiIBQkic00NfJG1teN+HyUIFhTenelkIRsvVG9FEYlBBBEAEEEFCHa8PiKlW9Q5tPociqp2CIT+HroV6mxJ8owq5OL5OZZtsfOBJNDGHx7znUafSDa104gdFjzddlxEE+CJe17nwuBG4TXdBFqdy5Nj4qPdal6+d15GM3JvT0/U0xrS7STkeFMkgaO8rpeVuoA3lZYvYWCr3Hotkx7WOq4horqTRV288HT0iShprsOyoCnQwqjw20+EbQdoD3aK5wOf4aT1ZWHpUVXMq2dDsRPZCluAA1RtxLToR5hAvqi0kLrYTQgYqo6pt+LawVcQB80qDz6Ez4aoouSfaBseWEzRD0TdwH4TzHRdLxe1+EYDWZpPIXPsWRzfbIzVZBCXg2vS46gaKyMWnqK5SjJdsjkF2FSY30oQfj4FTc6y+Vji58e4Cbch0VU0UXUnpnSjjwtY8S00DhbTmB1HyTWMwFPSYQQRXWx7vlwUONyWJadPd4hEULDPG9Q27+aXisM5poRfkmJRW/FWhxgmia19pGDdDvzNGgd1HAop4TNKsoJTydCkpxAkaCChD0hNhAUyzBXVmjAWwrWkcbqizO7SxnsC3iC2ncT+o8FxXN2Vkdbv8F3vaFrREXu9UChtWgdap7jQ+a5RmGXAuqATvV+fFYt0fp2P4fJsx/7qV8rgPYHDWc7wVxmeWNe6r6mmg4dUxslRsZb1NVq3YQSAcDwK5pyxnTTBfTSZgcaMNHZ0VP4i4gfXcq5z4pPVY9upr6VLcqip8FrMz2Yc2Zs1e0poHaDqFKjykSO3nMLSXbwoG0DjQEtq23FPCUfbK7apvmKRksvbIPTa97mji1zqt7wQCPJdH2TzEubukk05mqk/wBmMeGBojaWNDQdw1IHBx3r8eHFMDLhDiA6OzXat4A8VTbj8F9SyPPk1D2GlVgNrcS579wF3c1dGnP3Xgs3gsva4yOPrO9GtASBxpX6uq0skRS2LOUz4NrDUxPfqaNFRa5G8bE30AKlNzyVjLRSxsFCSzcO7vV3d4bgINiujZpl5LBHulzW3aHAEA9KUpao8VRSZPK4FjAGNJqbUvSlTqT5rocoZyUxrs7tTSRj2vdi2kBxeTYW06lZnMYHRuIcKGtHD3O7iuz5Ls7Hh2mjbnU8+qxv2iZeKb4FxbwS12JyxeA3Ut19z8owDXVsf0KBJTUjTY+CBNqroM4WXJULqFNusKo2A73iEQExwoBW/Tl4pt9OAI9vyU5k0ZG5I0tIFA9tz/MOKadhmH1ZWnvBaU2ka+CJRBKcynEeCCIp6bRhElBaZQJmjD2lp0IIPiue47CmNj4pIg4RuJa8WcwC5qOLaewrooVfnGTidrg0hr3MLKm4IPPuquXqavqLjyjp6a9Vtp+Gcoy7E7sjqWBOneugZRJUBYvMsA4u7ZrKNBMTja00VnCmorSo6FXuRYywosyyDzk1unkpNpGvbhweFUtuFaOCawctVZRhUJFs/tGo4QAToqrEM9KvVXWIdZUmLkoQOqLEit5LgPrGq3BGhVjhSDGqeCSji3qpP0xoryi67HkmnR80/BJZFM5LmipvcK/F2C5xt0C9u60VJNAAug454osvhcCMRM6ri0MaXEjWwpx79eisorcppIbqGo1PTj2Mg3SQbd/BRWCyt8/Y0SO3SaFxpW5DQaCppc2PsVWGrr8GMCllLjg0PT4IQQb3nXzWuOTt/YjMDcR1pr0J8qINjJGPcUhLZe3PTvSFYVBI0EFCHp6iMI0a0jnAEtqSEtqDIZBze1gxo4x42Q+W4b+B9izWFPZSU4aj5LT7HjflzWM/3t3++MD4LPYqGo6tPuK4OpW8ml0UsbNRl09VcwyrHZTiitFhZ6rNk8NiWSRPmlWfk9L0q8beCvo2jUqkzjZpsp3mySNqSaNeWip4inuNQlT9lfC4NFlTmllS6io8xmY2X1hU6X4qliwuYQVja3tW/hfVot/EDoe5WmWbPhru1mAkl5kVDeja6d6dvgCST3fJbwykC+qXJOieqzMJ6Cyp1rgeOMiZxjKA3VTBM6OCdzfWdEGA/wCY8VPgKo8RGXuuq3aCZzYnU9UkA/ygn4+xdvT8S/uc3Wy2GHPMZFUl3RRDFcDu9q02ZQgsbu0q40pTiG1J7qlvkqrCQHtKEaOofBWszEg4o6Nd0t7R/Uq7gx9cJ2ZP4HNp0DiKHmq/GxbrO91fAtAKhxYnUdT5Vqfii48IPdjZWkIJThQpKYqAgggoQ9QI0aC0TnDCUEQSggyGS2Ltjs0H/njPmwqNtBhxHiHjg/0h3n1h538U9so7dzDNf82GnjET8VE2+e5gZINA6jvH69iosr7q3+v9nT08+2xDGGioQeGitYHFhrwVNlWJD2+1aLAPBFCFi2m5FkSTaSFjqOeB0ujdtjAB6Ic4+DR5lT8zy6KWPdLG+Q15rFzZfHGaPiYRz3RQpq1FnZ0tVdjyXn43C+G3gFjG3wd/RVmI26lLjutFfyhjikxyxtFGWHIAClufsTb5QTSNtXH6uVf2rDtXSQi23BJf+v8AkssrzTF4kkCNjAL7xJr3BoPvKuOwNKvIKVkuDMUYB1NyUvH8lyTey4Mq1w7n2eCqe0Xcud5pnYlkkibSjSQDzoKu8K18loNvM/GHi3GH7x9Q3pzf4e9czyuXdeCfHjbQ+w+xddKaW/Jl9TZslE12VwiQgu0ja57u+lvcosOG3WiQ6Gp46mh+B8kjD4gsbIBqW7ppxB4rQxQskw72Gzw7e6U3W0p473mumEe+Oeyh8MoM4vEO4+13yIWeL7k86rQSt3mFh/DWpPGp1HTqs/LGWmhU3UiuS5EVRI0EBQkEaJEh6h3wj3wqafG0QZjl3ylCPllSrbLkSBB0oVMccm3Zgl+rV8jfSYzs5DTF5i7800NPDDsPxTP2kw/8pb87a+1SsDKGvkcD+8c1x7wxrP8A1Vbtpj95scYuN4F3fw+uoS2yUa20/n/I1UG7EjB5RmJhd09y3mVY5rqEHVZrM9nS5vaQivFzfiFR4LMXwutpW408uSxXkzbX28M6/G8FJlyyOSzgs5kWetkFj4fNaPDYgHiqXHB4jLdksPrR3+pw+Klw5RFF6jADz1PmVJ/a7JmbF6lM8wm2P8mCV4BCye0uftiBJ10a3iSntos8bCwkmp0A4k9FkstyuTEE4nEV3fwt58gBy96aMUlrElu4jD59iHyTl8nrEC3IXsOircM/dJPS3wqr3ayCmK72j4hUTmLsi9RlWLJs0WDkD2hw1aLj+H5jTwVrkOKax4a42Pqk3DTypyWOwkxYag6e9Xkx3m77LVuR1+uKMJOEtQfyRf52QCHigJFDQ62+KzuJjZJoaEcKfLh4KyxWI34h3AEfXcs7I+9Qrrccu5eyvueYxD2U4jzqkI3OqiSCgRI0EQHdOyJKksw6XAKqe2Oy5rKJ7ydcbI4VMsVFFIVli7KpkfyuuOdc0y6Mkw9+lKa8O9MZhBUgG51Pep2DwpB3na+5HLFUgp/qPM0uhWlyO5Room0mybMQ0viAbKBW2jvkVPwbaK4wz0ieMv8ARxD7yB5F2uBoefitHgNqnNHpCvUfIrb7S7Kx4sbw9CXnwPeufY7ZXFRGhiJHNvpAq7U/IkePBbybbNA9R3s+agYzbNzhRrT3k/AKDFs9iXaQu8qe9W+WbDPJBmIYOQuSh9iHfcyNs5lL8ZL2s1SxvkTyHRa/N2BraAAACgA0CscHh2xMDGCjQOCqM3fWyqlLuYyjiOYbaQ0cyTlY+dQqX9m3tOntqtvtFhN+JwpoK/1WZwz2iMni3TqQ4H4rrqlsTM6iGTb+SmlhLCpsM9KDUe/+vyQxEm9LWlvopWBw1Q4g2F6d5+StOZcMtnZeSwkcW71OYpVZ5wotzAQ7CxmnpNc5p63/APmgWJxIuacyrMx4v0SfjRlBBBErAgggoE9DiEhSDWikyOaBU0AFyToFRYvMXSnchqG8X6E/4eQ6rQvtrgu6YtUZzeRG8bNV2427uPId6k4HLKXdcp7LsAGjRWzYwsG+52PjhGvVSoL9kKSG1FEdFdWUrVGc1c2HRhHiapURokxtTu6jgUS4ZE4XVUVpojc9FMRw5FyBR3sSzIgSoOtRGmNAs/jWlzlopo6qnMdXnvS5yO2UuLw2o6ELneZYF8Rex3E7wpyOq65Jham6yu0+VCRwvQkUr11V1c+1nPbV3rjyc9jvu8wVZ5duNYXF1CBoeNRQADio0+AdG8tPKvgrHZ/Li994w8C9DXzqutTS5M/6bbzCTBMWYe/V3eTosm41XS82yV0zAxg3O+/nzVVF9nz/AMUo8GpnOuPiWglVZJ/iYhBafMNip47sIePIqhxOBkj9djh4W800ZxfhlUq5R8ojIIIJhDu7WSTEGQ0bwYNPHmVa4fDgCwVZHC/gVKjZKOPsWfZZKb7pPTYrhGKyJbR2S95VrHP5J1spSlmEp5Te4mu0KS7E00QwOEgsCMAKKMQjE4CmobtZLczikWKSyfkU4JQg0DGhktT8cCbBp3Kww7xRSKBZJpcETERUb4KjhG7UnUlaTF6FZ7HwmllGGr7kNPeOJVbmmGZIKV8Qbo5oXFKw+HCUu7UjMR5AA7ecba3uSVf5ZGGCgAUuWIKLh27tk7bkinEvBZMoeCfOGcLi4UVrla4KSoVeCNla9prcJLsG1wu0HwV5JhAbpvsaKA0xWZ7H4eS+5un+GyC18kFUFarZL2I6oPlpDMcimwyVUZsSIAgojRLdhCAoeChRzJ0SqDDsm6FDmYCUbn1S4m3UGQz+ygpQwZUximRgKKGklY4lVHg7p/sKKy1UaWOqPYkIrWyvYaFPiSiS+OhQVTWFzxinTVSZmghNliJyiIkvRAmAGqYfRSMQOYUR9lMHCeEgRc0W8ngmEkhktonsPIQ5Nvei30HyVNGiw04ITxaFR4WdWcWIQQo66NBE+RBHgnI0GJL40+OSJ5TgRD3UGu5pUia3qpdGJbG1TzLKLE5O9rRMgolb6Anub68FHMib3q1ThUUya2dOGaqrUtj6IaR1olSmqYcg+WqLeSsZLBW8myiLuSae9IMN4hqgPapz3VCaLBREOkEhKjanXN1QYxQDGJI7pl4KsSxMOjQEZFZLRS48VRRZo1GLqI4VtF/HiqoKjixNESGEw1jykSIIJwEWYpDOCNBJ7GXgUUchoggm9jIJpTrh7wggrRwwUrmgglYRouNkYN0EEGFjgSHBGgkFI5CLgjQUCR5EbEaCYAopEiCCUDI2JUGbiggihGQZSgggmFP/2Q=='
    },
    {
      name: "Samuel L. Jackson",
      username: "samuelljackson",
      about: "MotherF*****",
      post: 5,
      following: 2,
      follower: '7.9',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjL6HH1M1iQbWxcKDGo0F5wdRib6ySJsoCegKRuIBotyf7qD8BQvT9ZFylw5zZofpcPQJGxBfz7eexfadBZV9dLOh_oQVZ3LhAF56sspL&s=10'
    },
    {
      name: "Tom Hiddleston",
      username: "tomhiddleston",
      about: "Haha, I am God",
      post: 14,
      following: 356,
      follower: '15.2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQse-7zvcD9fAkBJYDAGlW1KlpQxmKSG2N3E4JmCX7XlrlHnLK8Q-9qmAXtQ7QsvFczc9Cxz_4IluxkQj2jR2_VtrF99aYH0oaqZwDDE9h0&s=10'
    },
    {
      name: "Hayley Atwell",
      username: "hayleyatwell",
      about: "Be Kind.",
      post: 222,
      following: 625,
      follower: '12.5',
      image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRqoGVPDvu0_VKopQyP1HM6As7PzKZPqmZbVxjVD66DJFW9_OyP-0kgdrYFgCtKhcbf8WBjMtoDeq-gm8B_AVHYSO5Iti_NxbBPETEx3kkPVYSDzWLzB0kUmR7xzzIyk0I67-IO4vk5&s=19'
    },
  ]
  return (
    <div>
      <Card users = {data} />
    </div>
  )
}

export default PropsTask
