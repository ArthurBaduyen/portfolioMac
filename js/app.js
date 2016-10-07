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
    }
  ];
});

$(document).foundation();