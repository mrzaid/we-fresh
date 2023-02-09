export const WebsiteDetailsQuery = `
query{
    headerCollection(limit: 0) {
      items {
        headerLogo {
          title
          url
        }
        headerLinksCollection {
          items {
            text
            url
          }
        }
      }
    }
    footerCollection(limit: 0) {
      items {
        footerLogo {
          title
          url
        }
        footerSocialsCollection {
          items {
            socialLink {
              url
            }
            socialsImage {
              title
              url
            }
          }
        }
        footerLinksCollection {
          items {
            title
            footerLinksCollection {
              items {
                text
                url
              }
            }
          }
        }
      }
    }
  }`;
export const HomePageQuery = `
query{
  heroCollection(limit: 0) {
    items {
      heroDescription {
        json
      }
      heroImage {
        title
        url
      }
      heroSocialsCollection {
        items {
          socialsImage {
            url
            title
          }
          socialLink {
            url
          }
        }
      }
    }
  }
  servicesCollection (limit: 0){
    items{
      title{json}
      servicesContentCollection{
        items{
          title
          contentImage{
            title
            url
          }
          contentDescriptionCollection{
            items{
              content{
                json
              }
            }
          }
        }
      }
    }
  }
  findUsCollection(limit: 0){
    items{
      title{
        json
      }
      findUsImage{
        title
        url
      }
    }
  }
  partnersCollection(limit: 0){
    items{
      partnersContent{
        json
      }
      partnersImagesCollection{
        items{
          title
          url
        }
      }
    }
  }
  questionsCollection(limit: 0){
    items{
      heading{
        json
      }
      questionsAccordionCollection(limit: 0){
        items{
          title
          accordionDescription{
            json
          }
        }
      }
      enquiry{
        json
      }
      enquiryContentsCollection(limit: 0){
        items{
          description{
            json
          }
        }
      }
    }
  }
  getAppCollection (limit: 0) {
    items {
      appDescription {
        json
      }
      appSocialsCollection {
        items {
          socialsImage {
            url
            title
          }
          socialLink {
            url
          }
        }
      }
    }
  }
  weFreshCollection (limit: 0){
    items {
      content {
        json
      }
    }
  }
}`;
