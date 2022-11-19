export const queries = {
  user: `{
          user {
              gender
              name {
                  title
                  first
                  last
              }
              email
              picture {
                large
              }
              nat
          }
  }`,
  users: `{
          users {
              gender
              name {
                  title
                  first
                  last
              }
              email
              picture {
                  large
              }
              nat
          }
  }
  `
}
