module.exports = {
  defaultServerResponse: {
    status: 400,
    body: [],
    errors: {},
    message: "",
  },
  serviceResponse: {
    isOkay: false,
    body: null,
    errors: {},
    message: "",
  },
  databaseMessage: {
    INVALID_ID: "Object ID is invalid",
  },
  validationMessage: {
    VALIDATION_FAILED: "Validation Failed",
    TOKEN_MISSING: "Token is Missing, Login First",
    FAILED: "Validation failed",
  },

  authMessage: {},

  adminMessage: {
    CREATED: "Account created!",
    LOGGED_IN: "Account logged in",

    EMAIL_EXISTS: "Account with this email is already esixts",
    INVALID_EMAIL: "Invalid email id",

    NOT_CREATED: "Account not created!",
    PASSWORD_UPDATED: "Password updated!",
    PASSWORD_NOT_UPDATED: "Password not updated !",
    PASSWORD_NOT_MATCHED: "Old password is not matched !",
    NOT_UPDATED: "Profile not updated !",
    UPDATED: "Profile updated !",
    FOUND: "Account found !",
    NOT_FOUND: "Account not found !",
    FETCHED: "Account fetched !",
    NOT_FETCHED: "OOPS ! Profile not fetched !",

    INVALID_PASSWORD: "You entered wrong password",

    OTP_VERIFIED: "OTP verified",
    OTP_EXPIRED: "Wrong or expired OTP",
    OTP_NOT_VERIFIED: "OTP not verified",
  },

  privacyPolicyMessage: {
    CREATED: "Privacy policy data created!",
    NOT_CREATED: "Privacy policy data not created!",

    FETCHED: "Privacy policy data fetched !",
    NOT_FETCHED: "Privacy policy data not fetched !",
    UPDATED: "Privacy policy data updated!",
    NOT_UPDATED: "Privacy policy data not updated !",

    DELETED: "Privacy policy data deleted!",
    NOT_DELETED: "Privacy policy data not deleted !",

    ALREADY_EXISTS: "Privacy policy data already exists !",
    NOT_AVAILABLE: "Privacy policy data not available !",

    INVALID_ID: "Privacy policy data ID is invalid",
  },

  termAndConditionsMessage: {
    CREATED: "Term and conditions data created!",
    NOT_CREATED: "Term and conditions data not created!",

    FETCHED: "Term and conditions data fetched !",
    NOT_FETCHED: "Term and conditions data not fetched !",
    UPDATED: "Term and conditions data updated!",
    NOT_UPDATED: "Term and conditions data not updated !",

    DELETED: "Term and conditions data deleted!",
    NOT_DELETED: "Term and conditions data not deleted !",

    ALREADY_EXISTS: "Term and conditions data already exists !",
    NOT_AVAILABLE: "Term and conditions data not available !",

    INVALID_ID: "Term and conditions data ID is invalid",
  },

  cookiePolicyMessage: {
    CREATED: "Cookie policy data created!",
    NOT_CREATED: "Cookie policy data not created!",

    FETCHED: "Cookie policy data fetched !",
    NOT_FETCHED: "Cookie policy data not fetched !",
    UPDATED: "Cookie policy data updated!",
    NOT_UPDATED: "Cookie policy data not updated !",

    DELETED: "Cookie policy data deleted!",
    NOT_DELETED: "Cookie policy data not deleted !",

    ALREADY_EXISTS: "Cookie policy data already exists !",
    NOT_AVAILABLE: "Cookie policy data not available !",

    INVALID_ID: "Cookie policy data ID is invalid",
  },

  userMessage: {
    CREATED: "Account created, An OTP sent to your mobile!",
    NOT_CREATED: "Account not created!",

    EMAIL_EXISTS: "Account with this email is already exist",
    INVALID_EMAIL: "You have entered Invalid email",

    MOBILE_EXISTS: "Account with this mobile is already exist",

    UPDATED: "Profile updated !",
    NOT_UPDATED: "Profile not updated !",

    FOUND: "Account found !",
    NOT_FOUND: "Account not found !",

    DELETED: "User deleted !",
    NOT_DELETED: "User not deleted !",

    FETCHED: "Account fetched !",
    NOT_FETCHED: "OOPS ! Profile not fetched !",

    LOGGED_IN: "Account logged in",

    PASSWORD_UPDATED: "Password updated!",
    PASSWORD_NOT_UPDATED: "Password not updated !",
    PASSWORD_NOT_MATCHED: "Old password is not matched !",

    INVALID_PASSWORD: "You entered wrong password",

    ACCOUNT_VERIFIED: "Account verified",
    ACCOUNT_NOT_VERIFIED: "Account not verified",

    OTP_VERIFIED: "OTP verified",
    OTP_EXPIRED: "Wrong or expired OTP",
    OTP_NOT_VERIFIED: "OTP not verified",

    INVALID_ID: "User id is invalid",
  },

  trainerMessage: {
    CREATED: "Account created!",
    LOGGED_IN: "Account logged in",
    EMAIL_EXISTS: "Account with this email is already esixts",
    NOT_CREATED: "Account not created!",
    PASSWORD_UPDATED: "Password updated!",
    PASSWORD_NOT_UPDATED: "Password not updated !",
    PASSWORD_NOT_MATCHED: "Old password is not matched !",
    NOT_UPDATED: "Profile not updated !",
    UPDATED: "Profile updated !",
    FOUND: "Account found !",
    NOT_FOUND: "Account not found !",
    FETCHED: "Account fetched !",
    NOT_FETCHED: "OOPS ! Profile not fetched !",

    INVALID_PASSWORD: "You entered wrong password",
    INVALID_ID: "Trainer ID is invalid",
    OTP_VERIFIED: "OTP verified",
    OTP_EXPIRED: "Wrong or expired OTP",
    OTP_NOT_VERIFIED: "OTP not verified",

    DELETED: "Trainer deleted!",
    NOT_DELETED: "Trainer not deleted !",
  },
  userAddressMessage: {
    CREATED: "Address added!",
    NOT_CREATED: "Address not added!",

    FETCHED: "Address fetched !",
    NOT_FETCHED: "Address not fetched !",

    UPDATED: "Address updated!",
    NOT_UPDATED: "Address not updated !",

    DELETED: "Address deleted!",
    NOT_DELETED: "Address not deleted !",

    ALREADY_EXISTS: "Address already exists !",
    NOT_AVAILABLE: "Address not available !",

    INVALID_ID: "Address ID is invalid",
  },

  instagramApiMessage: {
    CREATED: "Instagram Api created!",
    NOT_CREATED: "Instagram Api not created!",

    FETCHED: "Instagram Api fetched !",
    NOT_FETCHED: "Instagram Api not fetched !",

    UPDATED: "Instagram Api updated!",
    NOT_UPDATED: "Instagram Api not updated !",

    DELETED: "Instagram Api deleted!",
    NOT_DELETED: "Instagram Api not deleted !",

    ALREADY_EXISTS: "Instagram Api already exists !",
    NOT_AVAILABLE: "Instagram Api not available !",

    INVALID_ID: "Instagram Api ID is invalid",
  },

  categoryMessage: {
    CREATED: "Category created!",
    NOT_CREATED: "Category not created!",

    FETCHED: "Category fetched !",
    NOT_FETCHED: "Category not fetched !",

    UPDATED: "Category updated!",
    NOT_UPDATED: "Category not updated !",

    DELETED: "Category deleted!",
    NOT_DELETED: "Category not deleted !",

    ALREADY_EXISTS: "Category already exists !",
    NOT_AVAILABLE: "Category not available !",

    INVALID_ID: "Category ID is invalid",
  },

  marketplaceMessage: {
    CREATED: "Marketplace created!",
    NOT_CREATED: "Marketplace not created!",

    FETCHED: "Marketplace fetched !",
    NOT_FETCHED: "Marketplace not fetched !",

    UPDATED: "Marketplace updated!",
    NOT_UPDATED: "Marketplace not updated !",

    DELETED: "Marketplace deleted!",
    NOT_DELETED: "Marketplace not deleted !",

    ALREADY_EXISTS: "Marketplace already exists !",
    NOT_AVAILABLE: "Marketplace not available !",

    INVALID_ID: "Marketplace ID is invalid",
  },

  listingMessage: {
    CREATED: "Listing created!",
    NOT_CREATED: "Listing not created!",

    FETCHED: "Listing fetched !",
    NOT_FETCHED: "Listing not fetched !",

    UPDATED: "Listing updated!",
    NOT_UPDATED: "Listing not updated !",

    DELETED: "Listing deleted!",
    NOT_DELETED: "Listing not deleted !",

    ALREADY_EXISTS: "Listing already exists !",
    NOT_AVAILABLE: "Listing not available !",

    INVALID_ID: "Listing ID is invalid",
  },

  videoShowcaseMessage: {
    CREATED: "Video showcase created!",
    NOT_CREATED: "Video showcase not created!",

    FETCHED: "Video showcase fetched !",
    NOT_FETCHED: "Video showcase not fetched !",

    UPDATED: "Video showcase updated!",
    NOT_UPDATED: "Video showcase not updated !",

    DELETED: "Video showcase deleted!",
    NOT_DELETED: "Video showcase not deleted !",

    ALREADY_EXISTS: "Video showcase already exists !",
    NOT_AVAILABLE: "Video showcase not available !",

    INVALID_ID: "Video showcase ID is invalid",
  },

  utmSourceMessage: {
    CREATED: "UTM source created!",
    NOT_CREATED: "UTM source not created!",

    FETCHED: "UTM source fetched !",
    NOT_FETCHED: "UTM source not fetched !",

    UPDATED: "UTM source updated!",
    NOT_UPDATED: "UTM source not updated !",

    DELETED: "UTM source deleted!",
    NOT_DELETED: "UTM source not deleted !",

    ALREADY_EXISTS: "UTM source already exists !",
    NOT_AVAILABLE: "UTM source not available !",

    INVALID_ID: "UTM source ID is invalid",
  },

  cartProductsMessage: {
    CREATED: "Cart product created!",
    NOT_CREATED: "Cart product not created!",

    FETCHED: "Cart product fetched !",
    NOT_FETCHED: "Cart product not fetched !",

    UPDATED: "Cart product updated!",
    NOT_UPDATED: "Cart product not updated !",

    DELETED: "Cart product deleted!",
    NOT_DELETED: "Cart product not deleted !",

    ALREADY_EXISTS: "Cart product already exists !",
    NOT_AVAILABLE: "Cart product not available !",

    INVALID_ID: "Cart product ID is invalid",
  },

  checkoutsMessage: {
    CREATED: "Checkout created!",
    NOT_CREATED: "Checkout not created!",

    FETCHED: "Checkout fetched !",
    NOT_FETCHED: "Checkout not fetched !",

    UPDATED: "Checkout updated!",
    NOT_UPDATED: "Checkout not updated !",

    DELETED: "Checkout deleted!",
    NOT_DELETED: "Checkout not deleted !",

    ALREADY_EXISTS: "Checkout already exists !",
    NOT_AVAILABLE: "Checkout not available !",

    INVALID_ID: "Checkout ID is invalid",
  },

  blogMessage: {
    CREATED: "Blog created!",
    NOT_CREATED: "Blog not created!",

    FETCHED: "Blog fetched !",
    NOT_FETCHED: "Blog not fetched !",

    UPDATED: "Blog updated!",
    NOT_UPDATED: "Blog not updated !",

    DELETED: "Blog deleted!",
    NOT_DELETED: "Blog not deleted !",

    ALREADY_EXISTS: "Blog already exists !",
    NOT_AVAILABLE: "Blog not available !",

    INVALID_ID: "Blog ID is invalid",
  },

  authorMessage: {
    CREATED: "Author created!",
    NOT_CREATED: "Author not created!",

    FETCHED: "Author fetched !",
    NOT_FETCHED: "Author not fetched !",

    UPDATED: "Author updated!",
    NOT_UPDATED: "Author not updated !",

    DELETED: "Author deleted!",
    NOT_DELETED: "Author not deleted !",

    ALREADY_EXISTS: "Author already exists !",
    NOT_AVAILABLE: "Author not available !",

    INVALID_ID: "Author ID is invalid",
  },

  ingredientMessage: {
    CREATED: "Ingredient created!",
    NOT_CREATED: "Ingredient not created!",

    FETCHED: "Ingredient fetched !",
    NOT_FETCHED: "Ingredient not fetched !",

    UPDATED: "Ingredient updated!",
    NOT_UPDATED: "Ingredient not updated !",

    DELETED: "Ingredient deleted!",
    NOT_DELETED: "Ingredient not deleted !",

    ALREADY_EXISTS: "Ingredient already exists !",
    NOT_AVAILABLE: "Ingredient not available !",

    INVALID_ID: "Ingredient ID is invalid",
  },

  featuresMessage: {
    CREATED: "Features created!",
    NOT_CREATED: "Features not created!",

    FETCHED: "Features fetched !",
    NOT_FETCHED: "Features not fetched !",

    UPDATED: "Features updated!",
    NOT_UPDATED: "Features not updated !",

    DELETED: "Features deleted!",
    NOT_DELETED: "Features not deleted !",

    ALREADY_EXISTS: "Features already exists !",
    NOT_AVAILABLE: "Features not available !",

    INVALID_ID: "Features ID is invalid",
  },

  carouselMessage: {
    CREATED: "Carousel created!",
    NOT_CREATED: "Carousel not created!",

    FETCHED: "Carousel fetched !",
    NOT_FETCHED: "Carousel not fetched !",

    UPDATED: "Carousel updated!",
    NOT_UPDATED: "Carousel not updated !",

    DELETED: "Carousel deleted!",
    NOT_DELETED: "Carousel not deleted !",

    ALREADY_EXISTS: "Carousel already exists !",
    NOT_AVAILABLE: "Carousel not available !",

    INVALID_ID: "Carousel ID is invalid",
  },

  categoryShowcaseMessage: {
    CREATED: "Shocase Banner created!",
    NOT_CREATED: "Shocase Banner not created!",

    FETCHED: "Shocase Banner fetched !",
    NOT_FETCHED: "Shocase Banner not fetched !",

    UPDATED: "Shocase Banner updated!",
    NOT_UPDATED: "Shocase Banner not updated !",

    DELETED: "Shocase Banner deleted!",
    NOT_DELETED: "Shocase Banner not deleted !",

    ALREADY_EXISTS: "Shocase Banner already exists !",
    NOT_AVAILABLE: "Shocase Banner not available !",

    INVALID_ID: "Shocase Banner ID is invalid",
  },

  homepageMessage: {
    CREATED: "Homepage data created!",
    NOT_CREATED: "Homepage data not created!",

    FETCHED: "Homepage data fetched !",
    NOT_FETCHED: "Homepage data not fetched !",

    UPDATED: "Homepage data updated!",
    NOT_UPDATED: "Homepage data not updated !",

    DELETED: "Homepage data deleted!",
    NOT_DELETED: "Homepage data not deleted !",

    ALREADY_EXISTS: "Homepage data already exists !",
    NOT_AVAILABLE: "Homepage data not available !",

    INVALID_ID: "Homepage data ID is invalid",
  },

  blogPageMessage: {
    CREATED: "Blog page data created!",
    NOT_CREATED: "Blog page data not created!",

    FETCHED: "Blog page data fetched !",
    NOT_FETCHED: "Blog page data not fetched !",

    UPDATED: "Blog page data updated!",
    NOT_UPDATED: "Blog page data not updated !",

    DELETED: "Blog page data deleted!",
    NOT_DELETED: "Blog page data not deleted !",

    ALREADY_EXISTS: "Blog page data already exists !",
    NOT_AVAILABLE: "Blog page data not available !",

    INVALID_ID: "Blog page data ID is invalid",
  },

  aboutPageMessage: {
    CREATED: "About page data created!",
    NOT_CREATED: "About page data not created!",

    FETCHED: "About page data fetched !",
    NOT_FETCHED: "About page data not fetched !",

    UPDATED: "About page data updated!",
    NOT_UPDATED: "About page data not updated !",

    DELETED: "About page data deleted!",
    NOT_DELETED: "About page data not deleted !",

    ALREADY_EXISTS: "About page data already exists !",
    NOT_AVAILABLE: "About page data not available !",

    INVALID_ID: "About page data ID is invalid",
  },

  executiveCouncilPageMessage: {
    CREATED: "Executive council page data created!",
    NOT_CREATED: "Executive council page data not created!",

    FETCHED: "Executive council page data fetched !",
    NOT_FETCHED: "Executive council page data not fetched !",

    UPDATED: "Executive council page data updated!",
    NOT_UPDATED: "Executive council page data not updated !",

    DELETED: "Executive council page data deleted!",
    NOT_DELETED: "Executive council page data not deleted !",

    ALREADY_EXISTS: "Executive council page data already exists !",
    NOT_AVAILABLE: "Executive council page data not available !",

    INVALID_ID: "Executive council page data ID is invalid",
  },

  pastChairmenPageMessage: {
    CREATED: "Past chairmen page data created!",
    NOT_CREATED: "Past chairmen page data not created!",

    FETCHED: "Past chairmen page data fetched !",
    NOT_FETCHED: "Past chairmen page data not fetched !",

    UPDATED: "Past chairmen page data updated!",
    NOT_UPDATED: "Past chairmen page data not updated !",

    DELETED: "Past chairmen page data deleted!",
    NOT_DELETED: "Past chairmen page data not deleted !",

    ALREADY_EXISTS: "Past chairmen page data already exists !",
    NOT_AVAILABLE: "Past chairmen page data not available !",

    INVALID_ID: "Past chairmen page data ID is invalid",
  },

  subCommitteesPageMessage: {
    CREATED: "Sub committees page data created!",
    NOT_CREATED: "Sub committees page data not created!",

    FETCHED: "Sub committees page data fetched !",
    NOT_FETCHED: "Sub committees page data not fetched !",

    UPDATED: "Sub committees page data updated!",
    NOT_UPDATED: "Sub committees page data not updated !",

    DELETED: "Sub committees page data deleted!",
    NOT_DELETED: "Sub committees page data not deleted !",

    ALREADY_EXISTS: "Sub committees page data already exists !",
    NOT_AVAILABLE: "Sub committees page data not available !",

    INVALID_ID: "Sub committees page data ID is invalid",
  },

  industryDetailsPageMessage: {
    CREATED: "Industry details page data created!",
    NOT_CREATED: "Industry details page data not created!",

    FETCHED: "Industry details page data fetched !",
    NOT_FETCHED: "Industry details page data not fetched !",

    UPDATED: "Industry details page data updated!",
    NOT_UPDATED: "Industry details page data not updated !",

    DELETED: "Industry details page data deleted!",
    NOT_DELETED: "Industry details page data not deleted !",

    ALREADY_EXISTS: "Industry details page data already exists !",
    NOT_AVAILABLE: "Industry details page data not available !",

    INVALID_ID: "Industry details page data ID is invalid",
  },

  govtPolicyPageMessage: {
    CREATED: "Govt policy page data created!",
    NOT_CREATED: "Govt policy page data not created!",

    FETCHED: "Govt policy page data fetched !",
    NOT_FETCHED: "Govt policy page data not fetched !",
    UPDATED: "Govt policy page data updated!",
    NOT_UPDATED: "Govt policy page data not updated !",

    DELETED: "Govt policy page data deleted!",
    NOT_DELETED: "Govt policy page data not deleted !",

    ALREADY_EXISTS: "Govt policy page data already exists !",
    NOT_AVAILABLE: "Govt policy page data not available !",

    INVALID_ID: "Govt policy page data ID is invalid",
  },

  reportPageMessage: {
    CREATED: "Report page data created!",
    NOT_CREATED: "Report page data not created!",

    FETCHED: "Report page data fetched !",
    NOT_FETCHED: "Report page data not fetched !",
    UPDATED: "Report page data updated!",
    NOT_UPDATED: "Report page data not updated !",

    DELETED: "Report page data deleted!",
    NOT_DELETED: "Report page data not deleted !",

    ALREADY_EXISTS: "Report page data already exists !",
    NOT_AVAILABLE: "Report page data not available !",

    INVALID_ID: "Report page data ID is invalid",
  },

  memberListPageMessage: {
    CREATED: "Member list page data created!",
    NOT_CREATED: "Member list page data not created!",

    FETCHED: "Member list page data fetched !",
    NOT_FETCHED: "Member list page data not fetched !",
    UPDATED: "Member list page data updated!",
    NOT_UPDATED: "Member list page data not updated !",

    DELETED: "Member list page data deleted!",
    NOT_DELETED: "Member list page data not deleted !",

    ALREADY_EXISTS: "Member list page data already exists !",
    NOT_AVAILABLE: "Member list page data not available !",

    INVALID_ID: "Member list page data ID is invalid",
  },

  membershipPageMessage: {
    CREATED: "Membership page data created!",
    NOT_CREATED: "Membership page data not created!",

    FETCHED: "Membership page data fetched !",
    NOT_FETCHED: "Membership page data not fetched !",
    UPDATED: "Membership page data updated!",
    NOT_UPDATED: "Membership page data not updated !",

    DELETED: "Membership page data deleted!",
    NOT_DELETED: "Membership page data not deleted !",

    ALREADY_EXISTS: "Membership page data already exists !",
    NOT_AVAILABLE: "Membership page data not available !",

    INVALID_ID: "Membership page data ID is invalid",
  },

  pastEventsPageMessage: {
    CREATED: "Past events page data created!",
    NOT_CREATED: "Past events page data not created!",

    FETCHED: "Past events page data fetched !",
    NOT_FETCHED: "Past events page data not fetched !",
    UPDATED: "Past events page data updated!",
    NOT_UPDATED: "Past events page data not updated !",

    DELETED: "Past events page data deleted!",
    NOT_DELETED: "Past events page data not deleted !",

    ALREADY_EXISTS: "Past events page data already exists !",
    NOT_AVAILABLE: "Past events page data not available !",

    INVALID_ID: "Past events page data ID is invalid",
  },

  pressReleasesPageMessage: {
    CREATED: "Press releases page data created!",
    NOT_CREATED: "Press releases page data not created!",

    FETCHED: "Press releases page data fetched !",
    NOT_FETCHED: "Press releases page data not fetched !",
    UPDATED: "Press releases page data updated!",
    NOT_UPDATED: "Press releases page data not updated !",

    DELETED: "Press releases page data deleted!",
    NOT_DELETED: "Press releases page data not deleted !",

    ALREADY_EXISTS: "Press releases page data already exists !",
    NOT_AVAILABLE: "Press releases page data not available !",

    INVALID_ID: "Press releases page data ID is invalid",
  },

  mediaImagesPageMessage: {
    CREATED: "Media images page data created!",
    NOT_CREATED: "Media images page data not created!",

    FETCHED: "Media images page data fetched !",
    NOT_FETCHED: "Media images page data not fetched !",
    UPDATED: "Media images page data updated!",
    NOT_UPDATED: "Media images page data not updated !",

    DELETED: "Media images page data deleted!",
    NOT_DELETED: "Media images page data not deleted !",

    ALREADY_EXISTS: "Media images page data already exists !",
    NOT_AVAILABLE: "Media images page data not available !",

    INVALID_ID: "Media images page data ID is invalid",
  },

  headerManagementMessage: {
    CREATED: "Header management data created!",
    NOT_CREATED: "Header management data not created!",

    FETCHED: "Header management data fetched !",
    NOT_FETCHED: "Header management data not fetched !",
    UPDATED: "Header management data updated!",
    NOT_UPDATED: "Header management data not updated !",

    DELETED: "Header management data deleted!",
    NOT_DELETED: "Header management data not deleted !",

    ALREADY_EXISTS: "Header management data already exists !",
    NOT_AVAILABLE: "Header management data not available !",

    INVALID_ID: "Header management data ID is invalid",
  },

  videosPageMessage: {
    CREATED: "Videos page data created!",
    NOT_CREATED: "Videos page data not created!",

    FETCHED: "Videos page data fetched !",
    NOT_FETCHED: "Videos page data not fetched !",
    UPDATED: "Videos page data updated!",
    NOT_UPDATED: "Videos page data not updated !",

    DELETED: "Videos page data deleted!",
    NOT_DELETED: "Videos page data not deleted !",

    ALREADY_EXISTS: "Videos page data already exists !",
    NOT_AVAILABLE: "Videos page data not available !",

    INVALID_ID: "Videos page data ID is invalid",
  },

  contactPageMessage: {
    CREATED: "Contact page data created!",
    NOT_CREATED: "Contact page data not created!",

    FETCHED: "Contact page data fetched !",
    DEFAULT_FETCHED: "Default contact page data fetched !",
    NOT_FETCHED: "Contact page data not fetched !",
    UPDATED: "Contact page data updated!",
    NOT_UPDATED: "Contact page data not updated !",

    DELETED: "Contact page data deleted!",
    NOT_DELETED: "Contact page data not deleted !",

    ALREADY_EXISTS: "Contact page data already exists !",
    NOT_AVAILABLE: "Contact page data not available !",

    INVALID_ID: "Contact page data ID is invalid",
  },

  subCategoryMessage: {
    CREATED: "Sub Category created!",
    NOT_CREATED: "Sub Category not created!",

    FETCHED: "Sub Category fetched !",
    NOT_FETCHED: "Sub Category not fetched !",

    UPDATED: "Sub Category updated!",
    NOT_UPDATED: "Sub Category not updated !",

    DELETED: "Sub Category deleted!",
    NOT_DELETED: "Sub Category not deleted !",

    ALREADY_EXISTS: "Sub Category already exists !",
    NOT_AVAILABLE: "Sub Category not available !",

    INVALID_ID: "Sub Category ID is invalid",
  },

  programDurationMessage: {
    CREATED: "Program Duration created!",
    NOT_CREATED: "Program Duration not created!",

    FETCHED: "Program Duration fetched !",
    NOT_FETCHED: "Program Duration not fetched !",

    UPDATED: "Program Duration updated!",
    NOT_UPDATED: "Program Duration not updated !",

    DELETED: "Program Duration deleted!",
    NOT_DELETED: "Program Duration not deleted !",

    ALREADY_EXISTS: "Program Duration already exists !",
    NOT_AVAILABLE: "Program Duration not available !",

    INVALID_ID: "Program Duration ID is invalid",
  },

  planMessage: {
    CREATED: "Plan created!",
    NOT_CREATED: "Plan not created!",

    FETCHED: "Plan fetched !",
    NOT_FETCHED: "Plan not fetched !",

    UPDATED: "Plan updated!",
    NOT_UPDATED: "Plan not updated !",

    DELETED: "Plan deleted!",
    NOT_DELETED: "Plan not deleted !",

    ALREADY_EXISTS: "Plan already exists !",
    NOT_AVAILABLE: "Plan not available !",

    INVALID_ID: "Plan ID is invalid",
  },

  programPlanMessage: {
    CREATED: "Plan added!",
    NOT_CREATED: "Plan not added!",

    FETCHED: "Plan fetched !",
    NOT_FETCHED: "Plan not fetched !",

    UPDATED: "Plan updated!",
    NOT_UPDATED: "Plan not updated !",

    DELETED: "Plan deleted!",
    NOT_DELETED: "Plan not deleted !",

    ALREADY_EXISTS: "Plan already exists !",
    NOT_AVAILABLE: "Plan not available !",

    INVALID_ID: "Plan ID is invalid",
  },

  orderMessage: {
    CREATED: "Order created!",
    NOT_CREATED: "Order not created!",

    FETCHED: "Order fetched !",
    NOT_FETCHED: "Order not fetched !",

    UPDATED: "Order updated!",
    NOT_UPDATED: "Order not updated !",

    DELETED: "Order deleted!",
    NOT_DELETED: "Order not deleted !",

    ALREADY_EXISTS: "Order already exists !",
    NOT_AVAILABLE: "Order not available !",

    INVALID_ID: "Order ID is invalid",

    BOOKED: "Order booked!",
    NOT_BOOKED: "Order not booked!",
  },

  productMessage: {
    CREATED: "Product created!",
    NOT_CREATED: "Product not created!",

    FETCHED: "Product fetched !",
    NOT_FETCHED: "Product not fetched !",

    UPDATED: "Product updated!",
    NOT_UPDATED: "Product not updated !",

    DELETED: "Product deleted!",
    NOT_DELETED: "Product not deleted !",

    ALREADY_EXISTS: "Product already exists !",
    SLUG_ALREADY_EXISTS: "Duplicate Error : Product slug must be unique !",
    DECOR_NUMBER_ALREADY_EXISTS:
      "Duplicate Error : Product decor number must be unique !",

    NOT_AVAILABLE: "Product not available !",

    INVALID_ID: "Product ID is invalid",
  },

  newsletterMessage: {
    CREATED: "Successfully subscribed for newsletter!",
    NOT_CREATED: "Failed to subscribed for newsletter.",

    FETCHED: "Newsletter fetched!",
    NOT_FETCHED: "Newsletter not fetched !",

    UPDATED: "Newsletter email updated!",
    NOT_UPDATED: "Newsletter email not updated !",

    DELETED: "Newsletter deleted!",
    NOT_DELETED: "Newsletter not deleted !",

    ALREADY_EXISTS: "Newsletter email already exists !",
    NOT_AVAILABLE: "Newsletter email not available !",

    INVALID_ID: "Newsletter ID is invalid",
  },

  notifyMessage: {
    CREATED: "Notify request created!",
    NOT_CREATED: "Failed to create notify request.",

    FETCHED: "Notify request fetched!",
    NOT_FETCHED: "Notify request not fetched !",

    UPDATED: "Notify request updated!",
    NOT_UPDATED: "Notify request not updated !",

    DELETED: "Notify request deleted!",
    NOT_DELETED: "Notify request not deleted !",

    ALREADY_EXISTS: "Notify request already exists !",
    NOT_AVAILABLE: "Notify request not available !",

    INVALID_ID: "Notify request ID is invalid",
  },

  inquiryMessage: {
    CREATED: "Inquiry created!",
    NOT_CREATED: "Failed to create inquiry.",

    FETCHED: "Inquiry fetched!",
    NOT_FETCHED: "Inquiry not fetched !",

    UPDATED: "Inquiry updated!",
    NOT_UPDATED: "Inquiry not updated !",

    DELETED: "Inquiry deleted!",
    NOT_DELETED: "Inquiry not deleted !",

    ALREADY_EXISTS: "Inquiry already exists !",
    NOT_AVAILABLE: "Inquiry not available !",

    INVALID_ID: "Inquiry ID is invalid",
  },

  contactInquiryMessage: {
    CREATED: "Contact inquiry created!",
    NOT_CREATED: "Failed to create contact inquiry.",

    FETCHED: "Contact inquiry fetched!",
    NOT_FETCHED: "Contact inquiry not fetched !",

    UPDATED: "Contact inquiry updated!",
    NOT_UPDATED: "Contact inquiry not updated !",

    DELETED: "Contact inquiry deleted!",
    NOT_DELETED: "Contact inquiry not deleted !",

    ALREADY_EXISTS: "Contact inquiry already exists !",
    NOT_AVAILABLE: "Contact inquiry not available !",

    INVALID_ID: "Contact inquiry ID is invalid",
  },

  documentFormatMessage: {
    CREATED: "Document format created!",
    NOT_CREATED: "Failed to create Document format.",

    FETCHED: "Document format fetched!",
    NOT_FETCHED: "Document format not fetched !",

    UPDATED: "Document format updated!",
    NOT_UPDATED: "Document format not updated !",

    DELETED: "Document format deleted!",
    NOT_DELETED: "Document format not deleted !",

    ALREADY_EXISTS: "Document format already exists !",
    NOT_AVAILABLE: "Document format not available !",

    INVALID_ID: "Document format ID is invalid",
  },

  kycDocumentMessage: {
    CREATED: "KYC document created!",
    NOT_CREATED: "Failed to create KYC document.",

    FETCHED: "KYC document fetched!",
    NOT_FETCHED: "KYC document not fetched !",

    UPDATED: "KYC document updated!",
    NOT_UPDATED: "KYC document not updated !",

    DELETED: "KYC document deleted!",
    NOT_DELETED: "KYC document not deleted !",

    ALREADY_EXISTS: "KYC document already exists !",
    NOT_AVAILABLE: "KYC document not available !",

    INVALID_ID: "KYC document ID is invalid",
  },

  orderHistoryMessage: {
    CREATED: "Order is created!",
    NOT_CREATED: "Order history not created!",

    FETCHED: "Order history fetched !",
    NOT_FETCHED: "Order history not fetched !",

    UPDATED: "Order history updated!",
    NOT_UPDATED: "Order history not updated !",

    DELETED: "Order history deleted!",
    NOT_DELETED: "Order history not deleted !",

    ALREADY_EXISTS: "Order history already exists !",
    NOT_AVAILABLE: "Order history not available !",

    INVALID_ID: "Order history ID is invalid",
  },

  sizeMessage: {
    CREATED: "Size created!",
    NOT_CREATED: "Size not created!",

    FETCHED: "Size fetched !",
    NOT_FETCHED: "Size not fetched !",

    UPDATED: "Size updated!",
    NOT_UPDATED: "Size not updated !",

    DELETED: "Size deleted!",
    NOT_DELETED: "Size not deleted !",

    ALREADY_EXISTS: "Size already exists !",
    NOT_AVAILABLE: "Size not available !",

    INVALID_ID: "Size ID is invalid",
  },

  warrantyMessage: {
    CREATED: "Warranty created!",
    NOT_CREATED: "Warranty not created!",

    FETCHED: "Warranty fetched !",
    NOT_FETCHED: "Warranty not fetched !",

    UPDATED: "Warranty updated!",
    NOT_UPDATED: "Warranty not updated !",

    DELETED: "Warranty deleted!",
    NOT_DELETED: "Warranty not deleted !",

    ALREADY_EXISTS: "Warranty already exists !",
    NOT_AVAILABLE: "Warranty not available !",

    INVALID_ID: "Warranty ID is invalid",
  },

  mediaMessage: {
    CREATED: "Media created!",
    NOT_CREATED: "Media not created!",

    FETCHED: "Media fetched !",
    NOT_FETCHED: "Media not fetched !",

    UPDATED: "Media updated!",
    NOT_UPDATED: "Media not updated !",

    DELETED: "Media deleted!",
    NOT_DELETED: "Media not deleted !",

    ALREADY_EXISTS: "Media already exists !",
    NOT_AVAILABLE: "Media not available !",

    INVALID_ID: "Media ID is invalid",
  },

  colorMessage: {
    CREATED: "Color created!",
    NOT_CREATED: "Color not created!",

    FETCHED: "Color fetched !",
    NOT_FETCHED: "Color not fetched !",

    UPDATED: "Color updated!",
    NOT_UPDATED: "Color not updated !",

    DELETED: "Color deleted!",
    NOT_DELETED: "Color not deleted !",

    ALREADY_EXISTS: "Color already exists !",
    NOT_AVAILABLE: "Color not available !",

    INVALID_ID: "Color ID is invalid",
  },

  dealerMessage: {
    CREATED: "Dealer created!",
    NOT_CREATED: "Dealer not created!",

    FETCHED: "Dealer fetched !",
    NOT_FETCHED: "Dealer not fetched !",

    UPDATED: "Dealer updated!",
    NOT_UPDATED: "Dealer not updated !",

    DELETED: "Dealer deleted!",
    NOT_DELETED: "Dealer not deleted !",

    ALREADY_EXISTS: "Dealer already exists !",
    NOT_AVAILABLE: "Dealer not available !",

    INVALID_ID: "Dealer ID is invalid",
  },

  promotionTextMessage: {
    CREATED: "Promotion Text created!",
    NOT_CREATED: "Promotion Text not created!",

    FETCHED: "Promotion Text fetched !",
    NOT_FETCHED: "Promotion Text not fetched !",

    UPDATED: "Promotion Text updated!",
    NOT_UPDATED: "Promotion Text not updated !",

    DELETED: "Promotion Text deleted!",
    NOT_DELETED: "Promotion Text not deleted !",

    ALREADY_EXISTS: "Promotion Text already exists !",
    NOT_AVAILABLE: "Promotion Text not available !",

    INVALID_ID: "Promotion Text ID is invalid",
  },

  productReviewMessage: {
    CREATED: "Product Review created!",
    NOT_CREATED: "Product Review not created!",

    FETCHED: "Product Review fetched !",
    NOT_FETCHED: "Product Review not fetched !",

    UPDATED: "Product Review updated!",
    NOT_UPDATED: "Product Review not updated !",

    DELETED: "Product Review deleted!",
    NOT_DELETED: "Product Review not deleted !",

    ALREADY_EXISTS: "Product Review already exists !",
    NOT_AVAILABLE: "Product Review not available !",

    INVALID_ID: "Product Review ID is invalid",
  },

  delhiveryMessage: {
    CREATED: "Delhivery created!",
    NOT_CREATED: "Delhivery not created!",

    FETCHED: "Delhivery fetched !",
    NOT_FETCHED: "Delhivery not fetched !",

    UPDATED: "Delhivery updated!",
    NOT_UPDATED: "Delhivery not updated !",

    DELETED: "Delhivery deleted!",
    NOT_DELETED: "Delhivery not deleted !",

    ALREADY_EXISTS: "Delhivery already exists !",
    NOT_AVAILABLE: "Delhivery not available !",

    DELIVERY_AVAILABLE: "Delivery available on this Zipcode !",
    DELIVERY_NOT_AVAILABLE: "Delivery not available on this Zipcode !",

    INVALID_ID: "Delhivery ID is invalid",
  },

  shippingMessage: {
    CREATED: "Shipping order created!",
    NOT_CREATED: "Shipping order not created!",

    COURIER_ASSIGNED: "Courier assigned!",
    COURIER_NOT_ASSIGNED: "Courier not assigned!",

    LOGIN_SUCCESS: "Login Success",
    LOGIN_FAILED: "Login Failed",

    FETCHED: "Shipping order fetched !",
    NOT_FETCHED: "Shipping order not fetched !",

    SHIPMENT_FETCHED: "Shipment order fetched !",
    SHIPMENT_NOT_FETCHED: "Shipment order not fetched !",

    ORDER_FETCHED: "Order order fetched !",
    ORDER_NOT_FETCHED: "Order order not fetched !",

    UPDATED: "Shipping order updated!",
    NOT_UPDATED: "Shipping order not updated !",

    DELETED: "Shipping order deleted!",
    NOT_DELETED: "Shipping order not deleted !",

    ALREADY_EXISTS: "Shipping order already exists !",
    NOT_AVAILABLE: "Shipping order not available !",

    DELIVERY_AVAILABLE: "Delivery available on this Zipcode !",
    DELIVERY_NOT_AVAILABLE: "Delivery not available on this Zipcode !",

    PICKUP_LOCATION_FETCHED: "Pickup locations fetched!",
    PICKUP_LOCATION_NOT_FETCHED: "Pickup locations not fetched!",

    COURIER_LIST_FETCHED: "Courier list fetched!",
    COURIER_LIST_NOT_FETCHED: "Courier list not fetched!",

    INVALID_ID: "Shipping order ID is invalid",
  },

  trainerLevelMessage: {
    CREATED: "Trainer level created!",
    NOT_CREATED: "Trainer level not created!",

    FETCHED: "Trainer level fetched !",
    NOT_FETCHED: "Trainer level not fetched !",

    UPDATED: "Trainer level updated!",
    NOT_UPDATED: "Trainer level not updated !",

    DELETED: "Trainer level deleted!",
    NOT_DELETED: "Trainer level not deleted !",

    ALREADY_EXISTS: "Trainer level already exists !",
    NOT_AVAILABLE: "Trainer level not available !",

    INVALID_ID: "Trainer level ID is invalid",
  },

  trainerDesignationMessage: {
    CREATED: "Trainer designation created!",
    NOT_CREATED: "Trainer designation not created!",

    FETCHED: "Trainer designation fetched !",
    NOT_FETCHED: "Trainer designation not fetched !",

    UPDATED: "Trainer designation updated!",
    NOT_UPDATED: "Trainer designation not updated !",

    DELETED: "Trainer designation deleted!",
    NOT_DELETED: "Trainer designation not deleted !",

    ALREADY_EXISTS: "Trainer designation already exists !",
    NOT_AVAILABLE: "Trainer designation not available !",

    INVALID_ID: "Trainer designation ID is invalid",
  },

  paymentSettingMessage: {
    CREATED: "Payment created!",
    NOT_CREATED: "Payment not created!",

    FETCHED: "Payment fetched !",
    NOT_FETCHED: "Payment not fetched !",

    UPDATED: "Payment updated!",
    NOT_UPDATED: "Payment not updated !",

    DELETED: "Payment deleted!",
    NOT_DELETED: "Payment not deleted !",

    ALREADY_EXISTS: "Payment already exists !",
    NOT_AVAILABLE: "Payment not available !",

    INVALID_ID: "Payment ID is invalid",
  },

  decorSeriesMessage: {
    CREATED: "Decor Series created!",
    NOT_CREATED: "Decor Series not created!",

    FETCHED: "Decor Series fetched !",
    NOT_FETCHED: "Decor Series not fetched !",

    UPDATED: "Decor Series updated!",
    NOT_UPDATED: "Decor Series not updated !",

    DELETED: "Decor Series deleted!",
    NOT_DELETED: "Decor Series not deleted !",

    ALREADY_EXISTS: "Decor Series already exists !",
    NOT_AVAILABLE: "Decor Series not available !",

    INVALID_ID: "Decor Series ID is invalid",
  },

  couponMessage: {
    CREATED: "Coupon created!",
    NOT_CREATED: "Coupon not created!",

    FETCHED: "Coupon fetched !",
    NOT_FETCHED: "Coupon not fetched !",

    UPDATED: "Coupon updated!",
    NOT_UPDATED: "Coupon not updated !",

    DELETED: "Coupon deleted!",
    NOT_DELETED: "Coupon not deleted !",

    ALREADY_EXISTS: "Coupon already exists !",
    NOT_AVAILABLE: "Coupon not available !",

    INVALID_ID: "Coupon ID is invalid",
  },

  shippingInfoMessage: {
    CREATED: "Shipping Info created!",
    NOT_CREATED: "Shipping Info not created!",

    FETCHED: "Shipping Info fetched !",
    NOT_FETCHED: "Shipping Info not fetched !",

    UPDATED: "Shipping Info updated!",
    NOT_UPDATED: "Shipping Info not updated !",

    DELETED: "Shipping Info deleted!",
    NOT_DELETED: "Shipping Info not deleted !",

    ALREADY_EXISTS: "Shipping Info already exists !",
    NOT_AVAILABLE: "Shipping Info not available !",

    INVALID_ID: "Shipping Info ID is invalid",
  },
};
