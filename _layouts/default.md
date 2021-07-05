<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
          content="Forte Ranch is a condominium community in Santa Barbara California (93110) with 137 units and 9 different floor plans. There are sweeping views of the Channel Islands and ocean breezes.">
    <meta name="keywords"
          content="forte ranch, 93110, Santa Barbara, California, Forte, Condo, Community, UCSB, Turnpike Rd, Turnpike, San Antonio Ave, Goleta">
    <meta name="author" content="feralo.com">

    <title>☀ Forte Ranch - Santa Barbara, CA 93110</title>

    <!-- CSS -->
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Dosis:300,400,500,600,700">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/prettyPhoto.css">
    <link rel="stylesheet" href="assets/css/animate.css">
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Favicon -->
    <link rel="shortcut icon" href="assets/img/favicon.ico">

</head>

<body>

<!-- Top menu -->
<nav>
    <div class="container">
        <div class="row">
            <div class="col-sm-3 nav-logo">
                <a href="">Forte Ranch</a>
            </div>
            <div class="col-sm-9 nav-links">
                <div class="show-menu">
                    <a href=""><i class="fa fa-bars"></i></a>
                </div>
                <a class="scroll-link" href="#top-content">Home</a>
                <a class="scroll-link" href="#intro">About</a>
                <a class="scroll-link" href="#team">Listings</a>
                <a class="scroll-link" href="#contact">Contact</a>
            </div>
        </div>
    </div>
</nav>

<!-- Top content -->
<div class="top-content">
    <div class="inner-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 slide-up">
                    <h2>Forte Ranch <br> Santa Barbara, CA</h2>
                    <div style="height:92px; width:772px;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Intro -->
<div class="intro-container">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 intro">
                <h3>About Forte Ranch</h3>
                <p>Forte Ranch is a condominium community with 137 units and 9 different floor
		plans. As the exclusive sales agent for the community, Bob Croisdale has sold each
		unit at least once. Having been in the real estate business since 1977, he has seen
		the cyclical changes in the market and has learned to evaluate the present
		condition of the Santa Barbara real estate market. To date, Bob and the Foundation
		Real Estate Group team have been involved in 189 selling transactions at Forte
		Ranch. In addition, Bob served on the Forte Ranch Board of Directors for over 12
		years, so he is intimately familiar with the community development plans, rules,
		regulations and homeowners association (HOA). In other words, he knows all about
		the neighborhood. If you have any questions about life in the Forte Ranch
		community, your current or potential residence there, there is no other person who
		is more qualified to answer your questions than Bob Croisdale at Foundation Real
		Estate Group.
                </p>
            </div>
        </div>
    </div>
</div>
</div>

<div class="team-container">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
          {% for sale in site.listings %}
          <h4>{{ sale.address }}</h4>
          <span class="position">SOLD: ${{ sale.price }}</span>
          <p>{{ sale.beds }} bed/{{ sale.baths }} bath, {{ sale.sqft }} sq. ft</p>
          {% endfor %}
            </div>           
        </div> <!-- row -->
    </div><!-- container -->
</div><!-- featured container -->
<!-- Team -->
<div class="team-container">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 team">
                <h3>Recent Properties Sold</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <div class="team-member">
                    <div class="photo">
                        <img src="assets/img/listing/4603.jpg" alt="Forte Ranch Santa Barbara" class="img-circle">
                    </div>
                    <div class="info">
                        <h4 class="name">381 Greendale Ct.</h4>
                        <span class="position">SOLD - $950,000</span>
                        <p>3 bed/3 bath 1611 sq. ft</p>
                    </div>
                </div>
            </div>           
            <div class="col-sm-4">
                <div class="team-member">
                    <div class="photo"><img src="assets/img/listing/42.jpg" alt="34735 Greenway, Santa Barbara" class="img-circle"></div>
                    <div class="info">
                        <h4 class="name">4710 Greenway Rd.</h4>
                        <span class="position">SOLD -  $1,149,900</span>
                        <p>4 bed/4.5 bath 3500 sq.ft</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="team-member">
                    <div class="photo"><img src="assets/img/listing/63.jpg" alt="4664 Gerona Way" class="img-circle">
                    </div>

                    <div class="info">
                        <h4 class="name">4683 Gate Way</h4>
                        <span class="position">SOLD - $1,250,000</span>
                        <!-- <p>Plan 1</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="contact-container">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 contact">
                <h3>Contact</h3>
                <p>For all Forte Ranch questions contact Bob Croisdale at [bobcroisdale@gmail.com] or
                    [(805)452-7543].</p>
            </div>
        </div>
        <div class="row">

        </div>
    </div>
</div>

<!-- Footer -->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-sm-7 copyright">
                <p>&copy; Forte Ranch</p>
            </div>
        </div>
    </div>
</footer>


<!-- Javascript -->
<script src="assets/js/jquery-1.10.2.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/jquery.backstretch.min.js"></script>
<script src="assets/js/retina-1.1.0.min.js"></script>
<script src="assets/js/jquery.prettyPhoto.js"></script>
<script src="assets/js/jquery.inview.js"></script>
<script src="assets/js/main.js"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-3248725-8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-3248725-8');
</script>
</body>
</html>
