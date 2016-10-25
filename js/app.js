// Define the `phonecatApp` module
var portfolioItemApp = angular.module('homepagePortfolio', []);

// Define the `portfolioItemController` controller on the `portfolioItemApp` module
portfolioItemApp.controller('portfolioItemController', function portfolioItemController($scope) {
  $scope.portfolio = [
    {
      title: 'Wind Test',
      category: '3D Animation',
      beLink: 'https://www.behance.net/gallery/34100338/Wind-Test',
      imgThumbUrl: 'img/portfolio/Wind_Test_600x450.jpg',
      imgUrl: 'img/portfolio/Wind_Test.jpg',
      revealID: 'WindTest'
    }, {
      title: 'Low Poly Forest',
      category: '3d landscape design',
      beLink: 'https://www.behance.net/gallery/34099388/Low-Poly-Forest',
      imgThumbUrl: 'img/portfolio/Low_Poly_Forest_600x450.jpg',
      imgUrl: 'img/portfolio/Low_Poly_Forest.jpg',
      revealID: 'lowPolyForest'
    }, {
      title: 'Icy Mountain',
      category: '3d landscape design',
      beLink: 'https://www.behance.net/gallery/34678671/Icy-Mountain',
      imgThumbUrl: 'img/portfolio/Icy_Mountain_600x450.jpg',
      imgUrl: 'img/portfolio/Icy_Mountain.jpg',
      revealID: 'icyMountain'
    }, {
      title: 'Web UI Template: Teal',
      category: 'Web Design',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/teal_600x450.jpg',
      imgUrl: 'img/portfolio/teal.jpg',
      revealID: 'webUiTemplateTeal'
    }, {
      title: 'Base Wireframing Elements',
      category: 'Web Design',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/Base_Wireframing_600x450.jpg',
      imgUrl: 'img/portfolio/Base_Wireframing.jpg',
      revealID:'BaseWireframingElements'
    }, {
      title: 'Mobile UI Design for Android',
      category: 'Mobile Web Design',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/Android_UI_600x450.jpg',
      imgUrl: 'img/portfolio/Android_UI.jpg',
      revealID:'MobileUIDesignforAndroid'
    }, {
      title: 'Web UI Template',
      category: 'Web Design',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/Web_UI_Template_600x450.jpg',
      imgUrl: 'img/portfolio/Web_UI_Template.jpg',
      revealID:'WebUITemplate'
    }, {
      title: 'Brochure Template Invitation',
      category: 'Print',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/Brochure_template_Invitation_600x450.jpg',
      imgUrl: 'img/portfolio/Brochure_template_Invitation.jpg',
      revealID:'BrochureTemplateInvitation'
    }, {
      title: 'Alphabet Grid',
      category: '3D Art',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/C4D_Alphabet2_600x450.jpg',
      imgUrl: 'img/portfolio/C4D_Alphabet2.jpg',
      revealID:'AlphabetGrid'
    }, {
      title: 'Book',
      category: 'Illustration',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/Ai_Book_600x450.jpg',
      imgUrl: 'img/portfolio/Ai_Book.jpg',
      revealID:'IllustrationBook'
    }, {
      title: 'Captain America Shield',
      category: 'Illustration',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/Ai_CapAmericaShield_600x450.jpg',
      imgUrl: 'img/portfolio/Ai_CapAmericaShield.jpg',
      revealID:'CaptainAmericaShield'
    }, {
      title: 'Joystick',
      category: 'Illustration',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/Ai_Joystick_600x450.jpg',
      imgUrl: 'img/portfolio/Ai_Joystick.jpg',
      revealID:'Joystick'
    }, {
      title: 'Smart Phone',
      category: 'Illustration',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/Ai_Mobile_600x450.jpg',
      imgUrl: 'img/portfolio/Ai_Mobile.jpg',
      revealID:'SmartPhone'
    }, {
      title: 'News Paper',
      category: 'Illustration',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/Ai_News_600x450.jpg',
      imgUrl: 'img/portfolio/Ai_News.jpg',
      revealID:'NewsPaper'
    }, {
      title: 'Paper',
      category: 'Illustration',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/Ai_Paper_600x450.jpg',
      imgUrl: 'img/portfolio/Ai_Paper.jpg',
      revealID:'Paper'
    }, {
      title: '3D Grid Alphabet',
      category: '3D Art',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/C4D_Alphabet2_600x450.jpg',
      imgUrl: 'img/portfolio/C4D_Alphabet2_600x450.jpg',
      revealID:'3DGridAlphabet'
    }, {
      title: 'Ribbon',
      category: 'Illustration',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/Ai_Ribbon_600x450.jpg',
      imgUrl: 'img/portfolio/Ai_Ribbon.jpg',
      revealID:'Ribbon'
    }, {
      title: 'Pluto',
      category: '3D Animation',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/C4D_Planet_Ice_600x450.jpg',
      imgUrl: 'img/portfolio/C4D_Planet_Ice.jpg',
      revealID:'Pluto'
    }, {
      title: 'Web UI Button',
      category: 'Web Design',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/UI_Web_Buttons_600x450.jpg',
      imgUrl: 'img/portfolio/UI_Web_Buttons.jpg',
      revealID:'WebUIButton'
    }, {
      title: '',
      category: '',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/C4D_Alphabet2_600x450.jpg',
      imgUrl: 'img/portfolio/C4D_Alphabet2_600x450.jpg',
      revealID:''
    }, {
      title: '',
      category: '',
      beLink: 'http://www.behance.com/',
      imgThumbUrl: 'img/portfolio/C4D_Alphabet2_600x450.jpg',
      imgUrl: 'img/portfolio/C4D_Alphabet2_600x450.jpg',
      revealID:''
    }
  ];
});

$(document).foundation();