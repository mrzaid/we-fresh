export const WebsiteDetailsQuery = (locale = "en-US") => `
query{
    headerCollection(limit: 0, locale: "${locale}") {
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
    footerCollection(limit: 0, locale: "${locale}") {
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
export const getHomePageQuery = (locale = "en-US") => `
  query{
    heroCollection(limit: 0, locale: "${locale}") {
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
    servicesCollection (limit: 0, locale: "${locale}"){
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
    findUsCollection(limit: 0, locale: "${locale}"){
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
    partnersCollection(limit: 0, locale: "${locale}"){
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
    questionsCollection(limit: 0, locale: "${locale}"){
      items{
        heading{
          json
        }
        questionsAccordionCollection(limit: 0, locale: "${locale}"){
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
        enquiryContentsCollection(limit: 0, locale: "${locale}"){
          items{
            description{
              json
            }
          }
        }
      }
    }
    getAppCollection (limit: 0, locale: "${locale}") {
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
    weFreshCollection (limit: 0, locale: "${locale}"){
      items {
        content {
          json
        }
      }
    }
  }`;
