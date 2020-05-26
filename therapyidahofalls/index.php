<?php
//You must ftp this page and the processmail.php before you can see the mail actually working
$errors = [];
$missing = [];
//check if the form has been submitted
if (isset($_POST['send'])) {
  $to = 'julieannidaho@gmail.com'; 
  $subject = 'Comments & Questions from therapyidahofalls.com';
  //list expected fields - to prevent injectors from injecting other fields
  $expected = ['first_name', 'last_name', 'email', 'comments'];
  //set required fields
  $required = ['first_name', 'email', 'comments'];
  //create additional headers
  $headers = "From: TherapyIdahoFalls\r\n";
  $headers .= "Content-Type: text/plain; charset=utf-8";
  require '../includes/processmail.php'; 
  if ($mailSent) {
      //next line sends them to thank you page when mail was sent successfully
      header('Location: http://www.therapyidahofalls.com/thank_you.php');
      exit;
  }
}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"> 
    <meta name="description" content="At Foothills Rehabilitation Physical Therapy Idaho Falls, ID, physical therapists provide the best therapy services and treatments for a full recovery.">
    <meta name="keywords" content="Physical Therapy, Idaho Falls, Therapy Idaho Falls, Rehabilitation, Foothills Rehabilitation">
    <meta name="author" content="Anderson">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="google-site-verification" content="ReY3Rg_tiThJIqQa3f2AtjqjcZAgotq3ZurZXtMDQJg" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-67161880-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-67161880-1');
    </script>
    <!-- End Google Analytics -->
    <title>Physical Therapy Idaho Falls - Foothills Rehabilitation</title>
    <link href="therapy.css" type="text/css" rel="stylesheet"/>
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">​
  </head>
  <body>
    <div id="wrapper">
    <header>
    <nav>
      <ul>
        <a href="index.php"><img src="images/logo2.png" alt="Foothills Rehab Logo Physical Therapy Idaho Falls"/></a>
        <li><a href="index.php">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#therapists">About</a></li>
        <li><a href="#contact1">Contact</a></li>
      </ul>
    </nav>
    </header>
    <section class="parallax-container">
      <video loop muted autoplay>
          <source src="therapy.mp4" type="video/mp4" alt="Foothills Rehab video Idaho Falls">
      </video>
      <div class="header-content">
          <img src="images/logofh.png" alt="Foothills Rehab Logo located in Idaho Falls"/><br/>
          <h2 id="tagline">regain independence, &nbsp decrease pain, &nbsp improve mobility and function</h2>
      </div>
    </section>

<section class="content">
        <h1 style="visibility: hidden">Foothills Rehabilitation Physical Therapy Idaho Falls, ID | Regain Independence | Decrease Pain | Improve Mobility and Function</h1>
        <div id="offer">
        
          <h2><img src="images/doctor.svg" alt="doctor logo"/><br/>Locally owned and operated here in Idaho Falls, with an established positive reputation with the local physicians.</h2>
        <h2><img src="images/people.svg" alt="two people logo"/><br/>One on one treatment with a physical therapist, rather than aids or techs, giving you the personal attention you deserve.</h2>      
          <h2><img src="images/insurance.svg" alt="insurance logo"/><br/>We accept most insurances including Medicare, Medicaid and Tricare. And we have flexible scheduling.</h2>
          </div>
        <hr/>
        <div class="call">
        <p>Call us to see how we can help. <span>208 529-2255</span></p>
        </div>
        <hr/>
        <div id="services">
          <h2><img src="images/ptwht.svg" alt="physical therapy logo"/><br/>Physical Therapy</h2>
          <h2><a href="https://generations.therapyidahofalls.com" target="_blank"><img src="images/handhrt.svg" alt="occupational therapy logo"/></a><br/>Occupational Therapy</h2>      
          <h2><img src="images/chat.svg" alt="speech therapy logo"/><br/>Speech Therapy</h2>
        </div>
        <div class="srvdetails">
          <ul>
            <li>Performance enhancement</li>
            <li>Pre and post surgical physical therapy</li>
            <li>Pain control</li>
            <li>Manual therapy</li>
            <li>Aquatic therapy</li>
            <li>Sports injuries</li>
            <li>Sport medicine</li>
            <li>Back pain therapy</li>
            <li>Neck pain therapy</li>
            <li>Neurological geriatrics</li>
            <li>Workers compensation</li>
            <li>Orthopedic rehab</li>
          </ul>
        </div>
        <div id="about">
          <img src="images/pool.png" alt="Hydroworx pool at Foothills Rehab Pool Therapy Idaho Falls" />  
          <div id="assets">
            <p><strong>We treat a full range of outpatient diagnoses</strong>, from surgery recovery to chronic pain and overuse and many more.</p>
          
            <p><strong>At Foothills we treat Pediatric through Adult</strong>. Our excellent pediatric therapy is sought after and meets the special needs your child may have. Our adult care is unsurpassed with the amount of attention and one-on-one care given.</p>
           
            <p><strong>We promote good health and independence and provide excellent follow-up care</strong> with home program development and self-management strategies to patients, empowering them to enjoy lasting relief and remain injury free.</p>
           
            <p><strong>State of the art equipment</strong> is the standard at Foothills. We have the very best tools to get you back on top of your game. We also provide aquatic therapy with our comfortable Hydroworx pool.</p>
          </div>
        </div>
        <div id="therapists">
          <figure>
            <img src="images/brent.png" alt="Brent Kennedy, DPT Physical Therapy Idaho Falls, Physical Therapist"/>
            <figcaption>Brent Kennedy, DPT</figcaption>
          </figure>
          <p>Arizona School of Health Sciences (2002). Brent has received training and continuing education with the medical staff, coaches, and players of Major League Baseball teams, including the Baltimore Orioles, Colorado Rockies and Atlanta Braves. He is also a provider of sport-specific training to local high school athletes.</p>
          <figure>
            <img src="images/mike.png" alt="Mike Anderson, PT Physical Therapy Idaho Falls, Physical Therapist"/>
            <figcaption>Mike Anderson, PT</figcaption>
          </figure>
          <p>Chicago Medical School (1999). Mike has practiced therapy in this area since his graduation. He has worked with industrial rehabilitation and worker's compensation programs, as well as local school district pediatric therapy. Mike was a cross-country and track and field runner for Utah State University, as part of a Big West Championship team. He is still an avid runner.</p>
        </div>
        <hr/>
        <section id="contact1">

         
            <img id="bldg" src="images/bldg.jpg" alt="Foothills Rehab Physical Therapy Building in Idaho Falls">
         
          <div id="address">
            <p>&nbsp;</p>
            <h4>3715 Woodking Dr </h4>
            <h4>Idaho Falls, ID 83404</h4>
            <h4>Phone: <span>208-529-2255</span></h4>
            <h4>Fax: <span>208-529-2022</span></h4>
            <h4>Hours: 8:00 am - 5:00 pm Mon - Fri</h4>
            <p>&nbsp;</p>
          </div>
        </section>
        <section id="contact2">
          <div id="map">
            <h3>Map to our Idaho Falls office</h3>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2895.857610710551!2d-111.9867916!3d43.4635698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53545f3b92c26fb3%3A0xa0e7f2fa9ed4def!2s3715+Woodking+Dr%2C+Idaho+Falls%2C+ID+83404!5e0!3m2!1sen!2sus!4v1536718060761" width="80%" height="550" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
          <article id="form">
            <h1>Contact Foothills Rehabilitation - Physical Therapy - Idaho Falls</h1>
            
            <!--PHP for the form msg if missing info-->
            <?php if (($_POST && $suspect) || ($_POST && isset($errors['mailfail']))) { ?>
              <p class="warning">Sorry, your mail could not be sent. Please try later.</p>
            <?php } elseif ($missing || $errors) { ?>
              <p class="warning">Please fix the items(s) indicated.</p>
            <?php } ?>
            <!-- end of warning -->

            <p>&nbsp;</p>
            <table>
              <form action="" method="post" enctype="text/plain" name="contact" id="contact">
     
                <table border="0">
                  <tr>
                    <td width="144">
                    <!--PHP within the label tag is backend validation for required info from user-->
                    <label for="first_name">First Name *:
                    <?php if ($missing && in_array('first_name', $missing)) { ?>
                      <span class="warning">Please enter your first name</span>
                    <?php } ?>
                    </label>
                    </td>
                    </tr>
                  <tr>
                    <td>
                    <!--PHP within the input tag makes form sticky-->
                    <input name="first_name" type="text" id="first_name" size="30" maxlength="60" required=required
                      <?php if ($missing || $errors) {
                      echo 'value="' . htmlentities($first_name). '"';
                      } ?>
                      >     <!--this ending angle bracket closes the input tag-->
                    </td>
                    </tr>
                  <tr>
                    <td>
                    <label for="last_name">Last Name:
                    <?php if ($missing && in_array('last_name', $missing)) { ?>
                      <span class="warning">Please enter your last name</span>
                    <?php } ?>
                    </label>
                    </td>
                    </tr>
                  <tr>
                    <td><input name="last_name" type="text" id="last_name" size="30" maxlength="60"
                    <?php if ($missing || $errors) {
                      echo 'value="' . htmlentities($last_name). '"';
                      } ?>
                      >
                    </td>
                    </tr>
                  <tr>
                    <td width="144">
                    <label for="email">E-mail *:
                    <?php if ($missing && in_array('email', $missing)) { ?>
                      <span class="warning">Please enter your e-mail</span>
                    <?php } elseif (isset($errors['email'])) { ?>
                      <span class="warning">Invalid email address</span>
                    <?php } ?>
                    </label>
                    </td>
                    </tr>
                  <tr>
                    <td><input name="email" type="text" id="email" size="30" maxlength="60" required=required
                    <?php if ($missing || $errors) {
                      echo 'value="' . htmlentities($email).'"';
                    } ?>
                    >
                    </td>
                    </tr>
                  <tr>
                    <td>
                    <label for="comments">Comment/Question *:
                    <?php if ($missing && in_array('comments', $missing)) { ?>
                      <span class="warning">Please enter your comment or question</span>
                    <?php } ?>
                    </label>
                    </td>
                    </tr>
                  <tr>
                    <td height="110">
                    <textarea name="comments"  id="comments" required>
                    <?php
                    if ($missing || $errors) {
                      echo htmlentities($comments);
                    } ?>
                    </textarea>
                    </td>
                  </tr>
                  <tr>
                    <td height="10"><input type="submit" name="submit" id="submit" value="Send" subject="inquery/comments" onclick="gtag('event', 'ContactForm');"><input type="reset"  value="Reset"></td>
            
                    </tr>
                </table>
              </form>
          </article>
        </section>

    </div>
</section>
<footer>
  <p>Foothills Rehabilitation and Performance Services &copy 2017 Physical Therapy - Idaho Falls</p>
</footer>
</div>
  
  </body>
</html>