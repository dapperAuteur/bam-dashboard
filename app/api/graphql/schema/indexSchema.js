export const typeDefs = /* GraphQL */ `

  # enum
  enum AllowedAffixes {
    CIRCUMFIX
    DISFIX
    DUPLIFIX
    INFIX
    INTERFIX
    PREFIX
    PREFIXOID
    SIMULFIX
    STEM
    SUFFIX
    SUFFIXOID
    SUPRAFIX
    TRANSFIX
    NA
  }

  enum AllowedTongue {
    ENGLISH
    SPANISH
    NA
  }

  enum AllowedCurrency {
    BITCOIN
    BOOTY
    CRC
    ETHEREUM
    GTQ
    PESOMXN
    SPANK
    USD
    NA
  }

  enum MediaType {
    AUDIO
    IMAGE
    TEXT
    VIDEO
    WEBSITE
    NA
  }

  enum AllowedTerminacion {
    AR
    ER
    IR
    OR
    NA
  }

  # input

  input InputActivity {
    _id: String
    endTime: String # DateTime
    startTime: String # DateTime
    description: String
    media: [String]
    name: String
    note: [String]
    person: [String]
    tag: [String]
  }

  input InputBlogPost {
    _id: String
    createdAt: String
    updatedAt: String
    author: [String]
    body: String
    comment: [String]
    media: [String]
    note: [String]
    publish_date: String # DateTime
    published: Boolean
    tag: [String]
    title: String
  }

  input InputBudget {
    _id: String
    token: String
    createdAt: String
    updatedAt: String
    budget_name: String
    budget_value: Float
    budget_balance: Float
    budget_manager: String
    tags: [String]
    media: [String]
    note: [String]
    partner: [String]
    tranx: [String]
  }

  input InputComment {
    _id: String
    createdAt: String
    updatedAt: String
    author: [String] # @hasInverse(field: comment)
    blog_post: [String] # @hasInverse(field: comment)
    body: String # @search(by: [fulltext])
    comment: [String] # @hasInverse(field: comment)
    media: [String] # @hasInverse(field: comment)
    note: [String] # @hasInverse(field: comment)
    publish_date: String # DateTime @search
    published: Boolean
    tag: [String] # @hasInverse(field: comment)
  }

  input InputCurrency {
    _id: String
    token: String
    currency: String
    value_to_USD: Int
    curr_type: String
    symbol: String
  }

  input InputFinancialAccount {
    _id: String
    token: String
    account_name: String!
    current_value: Float
    account_type: String
    fin_inst: String # Financial Institution
    manager: String
    media: [String]
    note: [String]
    owner: [String]
    tag: [String]
    tranx: [String]
  }

  input InputGame {
    _id: String
    createdAt: String
    updatedAt: String
    attempts: Int # @search
    bulls: Int # @search
    cows: Int # @search
    guess: [String]
    note: [String] # @hasInverse(field: game)
    player: [String] # @hasInverse(field: game)
    score: Int # @search
    tag: [String] # @hasInverse(field: game)
    winning_word: String # @search(by: [hash])
    won: Boolean
  }

  input InputMedia {
    _id: String
    createdAt: String
    updatedAt: String
    title: String
    publisher: String
    # performers: [Person] # @hasInverse(field: media)
    media_link: String
    media_type: String
    # activity: [Activity] # @hasInverse(field: media)
    # affix: [Affix] # @hasInverse(field: media)
    # blog_post: [BlogPost] # @hasInverse(field: media)
    # budget: [Budget] # @hasInverse(field: media)
    # comment: [Comment] # @hasInverse(field: media)
    # creator: [Person] # @hasInverse(field: media)
    # currency: [Currency] # @hasInverse(field: media)
    # fin_acct: [FinancialAccount] # @hasInverse(field: media)
    # game: [Game] # @hasInverse(field: media)
    # note: [Note] # @hasInverse(field: media)
    # person: [Person] # @hasInverse(field: media)
    # podcast: [Podcast] # @hasInverse(field: media)
    # tool: [Tool] # @hasInverse(field: media)
    # user: [User] # @hasInverse(field: media)
    # vendor: [Vendor] # @hasInverse(field: media)
    # verbo: [Verbo] # @hasInverse(field: media)
    # word: [Word] # @hasInverse(field: media)
    # tag: [Tag] # @hasInverse(field: media)
    # tranx: [Transaction] # @hasInverse(field: media)
  }

  input InputPerson {
    _id: String
    createdAt: String
    updatedAt: String
    activity: [String] # @hasInverse(field: person)
    associate: [String] # @hasInverse(field: associate)
    blog_post: [String] # @hasInverse(field: author)
    budget: [String] # @hasInverse(field: partner)
    comment: [String] # @hasInverse(field: author)
    email: String # @search(by: [hash])
    fin_acct: [String] # @hasInverse(field: owner)
    game: [String] # @hasInverse(field: player)
    guess: [String]
    is_user: Boolean
    media: [String] # @hasInverse(field: person)
    nickname: [String] # @search(by: [hash])
    note: [String] # @hasInverse(field: person)
    profile_image_url: [String]
    tag: [String] # @hasInverse(field: person)
    tranx: [String] # @hasInverse(field: participant)
  }

  input InputPodcast {
    _id: String
    createdAt: String
    updatedAt: String
    title: String
    season: String
    episodes: [String]
    author: [String]
    subscribers: Int
    tag: [String]
    media: [String]
    note: [String]
    published: Boolean
  }

  input InputVendor {
    token: String
    _id: String
    createdAt: String
    updatedAt: String
    vendor_name: String
    black_owned: Boolean
    description: String
    media: [String]
    note: [String]
    tag: [String]
    tranx: [String]
  }

  input InputVerbo {
    token: String
    spanish: String
    english: String
    reflexive: Boolean
    irregular: Boolean
    categoria_de_irregular: String
    cambiar_de_irregular: String
    terminacion: String
    grupo: Float
  }

  input InputMutateVerbo {
    _id: String
    token: String
    spanish: String
    english: String
    reflexive: Boolean
    irregular: Boolean
    categoria_de_irregular: String
    cambiar_de_irregular: String
    terminacion: String
    grupo: Float
  }

  input InputTool {
    token: String
    _id: String
    createdAt: String
    updatedAt: String
    tool_name: String
    tool_type: String
    tool_cost: Int
    current_user: String
    current_owner: String
    life_span: Int
    date_acquired: String
    usage_start_date: String
    next_maintenance: String
    usage: Int
    end_of_life: String
    usage_max: Int
    media: [String]
    note: [String]
    tag: [String]
  }

  input InputTransaction {
    token: String
    _id: String
    budget: String
    currency: [String]
    fin_acc: [String]
    occurrence_string: String
    tranx_event: String
    tranx_credit: Int
    tranx_debit: Int
    description: String
    vendor: [String]
    participant: [String]
    account: [String]
    media: [String] # @hasInverse(field: note)
    note: [String] # @search(by: [term])
    tag: [String] # @hasInverse(field: note)
    # currency: [String]
  }

  input InputWord {
    token: String
    word: String
    definition: String
    meaning: String
    f_points: Int
    s_points: Int
    tier: Int
    in_game: Boolean
    is_four_letter_word: Boolean
    tongue: String
  }

  input InputMutateWord {
    _id: String
    token: String
    word: String
    definition: String
    f_points: Int
    s_points: Int
    tier: Int
    in_game: Boolean
    tongue: String
  }

  input InputAffix {
    token: String
    morpheme: String
    meaning: [String]
    tongue: String
    example: [String]
    affix_type: [AllowedAffixes]
    media: [String]
    note: [String]
  }

  input InputMutateAffix {
    _id: String
    token: String
    morpheme: String
    meaning: [String]
    tongue: String
    example: [String]
    affix_type: [AllowedAffixes]
    media: [String]
    note: [String]
    nModified: Int
  }

  input InputAuth {
    email: String
    username: String
    password: String
    passwordConfirm: String
    profile_image_url: String
  }

  input InputMutateUser {
    _id: String
    email: String
    username: String
    password: String
    passwordConfirm: String
    profile_image_url: [String]
    role: Int
    roles: [String]
    name: String
    userRole: [String]
    translationScore: String
  }

  # Types

  type Account {
    _id: String
    createdAt: String
    updatedAt: String
    accountName: String
    currentValue: Float
  }

  type Activity {
    _id: String
    createdAt: String
    updatedAt: String
    endTime: String # DateTime
    startTime: String # DateTime
    description: String
    media: [Media]
    name: String
    note: [Note]
    person: [Person]
    tag: [Tag]
  }

  type Affix {
    _id: String
    createdAt: String
    updatedAt: String
    morpheme: String
    meaning: [String]
    tongue: String
    example: [String]
    affix_type: [String] # AllowedAffixes should be an array of enums [AllowedAffixes]
    media: [String]
    note: [String]
  }

  type AllowedTypeAffixes {
    _id: String
    createdAt: String
    updatedAt: String
    affix: String
    example: String
    schema: String
    description: String
  }

  type BlogPost {
    _id: String
    createdAt: String
    updatedAt: String
    author: [User]
    body: String
    comment: [Comment]
    media: [Media]
    note: [Note]
    publish_date: String # DateTime
    published: Boolean
    tag: [Tag]
    title: String!
  }

  type Budget {
    _id: String
    createdAt: String
    updatedAt: String
    budget_name: String
    budget_value: Int
    budget_balance: Int
    budget_manager: User
    tags: [Tag]
    media: [Media]
    note: [Note]
    partner: [Person]
    tranx: [Transaction]
  }

  type Comment {
    _id: String
    createdAt: String
    updatedAt: String
    author: [User] # @hasInverse(field: comment)
    blog_post: [BlogPost] # @hasInverse(field: comment)
    body: String # @search(by: [fulltext])
    comment: [Comment] # @hasInverse(field: comment)
    media: [Media] # @hasInverse(field: comment)
    note: [Note] # @hasInverse(field: comment)
    publish_date: String # DateTime @search
    published: Boolean
    tag: [Tag] # @hasInverse(field: comment)
  }

  type Currency {
    _id: String
    createdAt: String
    updatedAt: String
    currency: String
    curr_type: String
    symbol: String
    value_to_USD: Int
  }

  type FinancialAccount {
    _id: String
    createdAt: String
    updatedAt: String
    account_name: String! # @search(by: [hash])
    current_value: String # @search
    account_type: String
    fin_inst: String # Financial Institution
    manager: String
    media: [Media] # @hasInverse(field: fin_acct)
    note: [Note] # @hasInverse(field: fin_acct)
    owner: [Person] # @hasInverse(field: fin_acct)
    tag: [Tag] # @hasInverse(field: fin_acct)
    tranx: [Transaction] # @hasInverse(field: fin_acct)
  }

  type Game {
    _id: String
    createdAt: String
    updatedAt: String
    attempts: Int # @search
    bulls: Int # @search
    cows: Int # @search
    guess: [String]
    note: [Note] # @hasInverse(field: game)
    player: [Person] # @hasInverse(field: game)
    score: Int # @search
    tag: [Tag] # @hasInverse(field: game)
    winning_word: String # @search(by: [hash])
    won: Boolean
  }

  # type LongLat {
  #   _id: String
  #   createdAt: String
  #   updatedAt: String
  #   placeName: String
  #   location:
  # }

  type Media {
    _id: String
    createdAt: String
    updatedAt: String
    title: String
    publisher: String
    performers: [Person] # @hasInverse(field: media)
    mediaUrl: String
    mediaType: String
    activity: [Activity] # @hasInverse(field: media)
    affix: [Affix] # @hasInverse(field: media)
    blogPost: [BlogPost] # @hasInverse(field: media)
    budget: [Budget] # @hasInverse(field: media)
    comment: [Comment] # @hasInverse(field: media)
    creator: [Person] # @hasInverse(field: media)
    currency: [Currency] # @hasInverse(field: media)
    financialAccount: [FinancialAccount] # @hasInverse(field: media)
    game: [Game] # @hasInverse(field: media)
    note: [Note] # @hasInverse(field: media)
    person: [Person] # @hasInverse(field: media)
    podcast: [Podcast] # @hasInverse(field: media)
    tag: [Tag] # @hasInverse(field: media)
    tool: [Tool] # @hasInverse(field: media)
    transaction: [Transaction] # @hasInverse(field: media)
    user: [User] # @hasInverse(field: media)
    vendor: [Vendor] # @hasInverse(field: media)
    verbo: [Verbo] # @hasInverse(field: media)
    word: [Word] # @hasInverse(field: media)
    tranx: [Transaction] # @hasInverse(field: media)
  }

  type Note {
    _id: String
    createdAt: String
    updatedAt: String
    note_content: String
    activity: [Activity] # @hasInverse(field: note)
    affix: [Affix] # @hasInverse(field: note)
    blog_post: [BlogPost] # @hasInverse(field: note)
    budget: [Budget] # @hasInverse(field: note)
    comment: [Comment] # @hasInverse(field: note)
    currency: [Currency] # @hasInverse(field: note)
    fin_acct: [FinancialAccount] # @hasInverse(field: note)
    game: [Game] # @hasInverse(field: note)
    media: [Media] # @hasInverse(field: note)
    person: [Person] # @hasInverse(field: note)
    podcast: [Podcast] # @hasInverse(field: note)
    tool: [Tool] # @hasInverse(field: note)
    user: [User] # @hasInverse(field: note)
    vendor: [Vendor] # @hasInverse(field: note)
    verbo: [Verbo] # @hasInverse(field: note)
    word: [Word] # @hasInverse(field: note)
    tag: [Tag] # @hasInverse(field: note)
    tranx: [Transaction] # @hasInverse(field: note)
  }

  type Person {
    _id: String
    createdAt: String
    updatedAt: String
    activity: [Activity] # @hasInverse(field: person)
    associate: [Person] # @hasInverse(field: associate)
    blog_post: [BlogPost] # @hasInverse(field: author)
    budget: [Budget] # @hasInverse(field: partner)
    comment: [Comment] # @hasInverse(field: author)
    email: String # @search(by: [hash])
    fin_acct: [FinancialAccount] # @hasInverse(field: owner)
    game: [Game] # @hasInverse(field: player)
    guess: [String]
    is_user: Boolean
    media: [Media] # @hasInverse(field: person)
    nickname: [String] # @search(by: [hash])
    note: [Note] # @hasInverse(field: person)
    profile_image_url: [Media]
    tag: [Tag] # @hasInverse(field: person)
    tranx: [Transaction] # @hasInverse(field: participant)
  }

  type Podcast {
    _id: String
    createdAt: String
    updatedAt: String
    title: String
    season: String
    episodes: [BlogPost]
    author: [Person]
    subscribers: Int
    tag: [Tag]
    media: [Media]
    note: [Note]
    published: Boolean
  }

  type Tag {
    _id: String
    createdAt: String
    updatedAt: String
    tag_name: String
    description: String
    activity: [Activity] # @hasInverse(field: tag)
    affix: [Affix] # @hasInverse(field: tag)
    blog_post: [BlogPost] # @hasInverse(field: tag)
    budget: [Budget] # @hasInverse(field: tag)
    comment: [Comment] # @hasInverse(field: tag)
    currency: [Currency] # @hasInverse(field: tag)
    fin_acct: [FinancialAccount] # @hasInverse(field: tag)
    game: [Game] # @hasInverse(field: tag)
    media: [Media] # @hasInverse(field: tag)
    note: [Note] # @hasInverse(field: tag)
    person: [Person] # @hasInverse(field: tag)
    podcast: [Podcast] # @hasInverse(field: tag)
    tool: [Tool] # @hasInverse(field: tag)
    user: [User] # @hasInverse(field: tag)
    verbo: [Verbo] # @hasInverse(field: tag)
    word: [Word] # @hasInverse(field: tag)
    tranx: [Transaction] # @hasInverse(field: tag)
  }

  type Tool {
    _id: String
    createdAt: String
    updatedAt: String
    current_user: User
    current_owner: User
    tool_name: String
    tool_type: String
    tool_cost: Int
    life_span: Int
    date_acquired: String
    usage_start_date: String
    next_maintenance: String
    usage: Int
    end_of_life: String
    usage_max: Int
    media: [Media] # @hasInverse(field: note)
    note: [String] # @search(by: [term])
    tag: [Tag] # @hasInverse(field: note)
  }

  type Transaction {
    _id: String
    createdAt: String
    updatedAt: String
    budget_id: Budget
    budget: Budget
    currency_id: String
    currency: [Currency]
    fin_acct: [FinancialAccount]
    fin_acc_id: String
    occurrence_string: String
    tranx_event: String
    tranx_credit: Int
    tranx_debit: Int
    description: String
    vendor: [Vendor]
    participant: [Person]
    account: [Account]
    media: [Media] # @hasInverse(field: note)
    note: [Note] # @search(by: [term])
    tag: [Tag] # @hasInverse(field: note)
    # currency: [AllowedCurrency]
  }

  type User {
    _id: String
    createdAt: String
    updatedAt: String
    email: String
    role: Int
    roles: [String]
    name: String
    username: String
    userRole: [String]
    password: String
    profile_image_url: String
    translationScore: String
    comments: [String]
    games: [String]
    guesses: [String]
    posts: [String]
    tranx: [Transaction]
  }

  type Vendor {
    _id: String
    createdAt: String
    updatedAt: String
    vendor_name: String
    black_owned: Boolean
    contact: [Person]
    description: String
    media: [Media] # @hasInverse(field: note)
    note: [String] # @search(by: [term])
    tag: [Tag] # @hasInverse(field: note)
    tranx: [Transaction]
  }

  type Verbo {
    _id: String
    createdAt: String
    updatedAt: String
    spanish: String
    english: String
    reflexive: Boolean
    irregular: Boolean
    categoria_de_irregular: String # may be changed to or moved from categoría_de_irregular
    cambiar_de_irregular: String
    terminacion: String # may be changed to or moved from terminación
    grupo: Float
  }

  type Word {
    _id: String
    createdAt: String
    updatedAt: String
    word: String
    meaning: String
    definition: String
    f_points: Int
    s_points: Int
    tier: Int
    in_game: Boolean
    is_four_letter_word: Boolean
    tongue: String
  }

  # Return Types

  type ReturnActivityList {
    activities: [Activity]
    count: Int
    cursor: String
  }

  type ReturnBlogPostList {
    blog_posts: [BlogPost]
    count: Int
    cursor: String
  }

  type ReturnBudgetList {
    budgets: [Budget]
    count: Int
    cursor: String
  }

  type ReturnCommentList {
    comments: [Comment]
    count: Int
    cursor: String
  }

  type ReturnCurrencyList {
    currencies: [Currency]
    count: Int
    cursor: String
  }

  type ReturnFinancialAccountList {
    fin_accts: [FinancialAccount]
    count: Int
    cursor: String
  }

  type ReturnGameList {
    games: [Game]
    count: Int
    cursor: String
  }

  type ReturnMediaList {
    media: [Media]
    count: Int
    cursor: String
  }

  type ReturnRandomMedia {
    media: [Media]
    count: Int
  }

  type ReturnPalabraList {
    word_list: ReturnWordList
    word_cursor: String
    word_count: Int
    affix_list: ReturnAffixList
    affix_cursor: String
    affix_count: Int
    verbo_list: ReturnVerboList
    verbo_cursor: String
    verbo_count: Int
  }

  type ReturnPersonList {
    persons: [Person]
    count: Int
    cursor: String
  }

  type ReturnPodcastList {
    podcasts: [Podcast]
    count: Int
    cursor: String
  }

  type ReturnVendorList {
    vendors: [Vendor]
    count: Int
    cursor: String
  }

  type ReturnToolList {
    tools: [Tool]
    count: Int
    cursor: String
  }

  type ReturnTransactionList {
    tranx: [Transaction]
    count: Int
    cursor: String
  }

  type ReturnWordList {
    words: [Word]
    count: Int
    cursor: String
  }

  type ReturnAffixList {
    affixes: [Affix]
    count: Int
    cursor: String
  }

  type ReturnVerboList {
    verbos: [Verbo]
    count: Int
    cursor: String
  }

  type ReturnUserList {
    users: [User]
    count: Int
    cursor: String
  }

  type ReturnWords {
    words: [Word]
    count: Int
    cursor: String
  }

  type ReturnRandomWords {
    words: [Word]
    count: Int
  }

  type ReturnAffixes {
    affixes: [Affix]
    count: Int
    cursor: String
  }

  type ReturnUsers {
    users: [User]
    count: Int
    cursor: String
  }

  type ReturnRandomAffixes {
    affixes: [Affix]
    count: Int
  }

  type ReturnVerbos {
    verbos: [Verbo]
    count: Int
    cursor: String
    # list: [Verbo] to be used with the interface
  }

  type ReturnRandomVerbos {
    verbos: [Verbo]
    count: Int
  }

  type ReturnRandomUsers {
    users: [User]
    count: Int
  }

  type ReturnAuthUser {
    _id: String
    email: String
    username: String
    userRole: [String]
    role: Int
    roles: [String]
    profile_image_url: String
    token: String
    message: String
    status: Int
  }

  type DeletedError {
    _id: String
    message: String
  }

  type DeletedObjectByID {
    _id: String
    deleted: Boolean
    deletedCount: Int
    justOne: Boolean
    message: String
  }

  type UpdateError {
    _id: String
    message: String
  }

  type Query {
    findActivities(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnActivityList
    findActivityByID(
      _id: String
      ): Activity
    findBlogPosts(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnBlogPostList
    findBlogPostByID(
      _id: String
      ): BlogPost
    findBudgets(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnBudgetList
    findBudgetByID(
      _id: String
      ): Budget
    findComments(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnCommentList
    findCommentByID(
      _id: String
      ): Comment
    findCurrencies(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnCurrencyList
    findCurrencyByID(
      _id: String
      ): Currency
    findFinancialAccounts(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnFinancialAccountList
    findFinancialAccountByID(
      _id: String
      ): FinancialAccount
    findGames(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnGameList
    findGameByID(
      _id: String
      ): Game
    findMedia(
      filter: String
      cursorMedia: String
      limit: Int = 20
    ): ReturnMediaList
    findMediaByID(
      _id: String
    ): Media
    findRandomMedia(
      filter: String
      limit: Int = 20
    ): ReturnRandomMedia
    findPersons(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnPersonList
    findPersonByID(
      _id: String
      ): Person
    findPodcasts(
      filter: String
      cursor: String
      limit: Int = 20
      ): ReturnPodcastList
    findPodcastByID(
      _id: String
      ): Podcast
    findTools(
      filter: String
      cursor: String
      limit: Int = 20
    ): ReturnToolList
    findToolByID(
      _id: String
    ): Tool
    findTransactions(
      filter: String
      cursor: String
      limit: Int = 20
    ): ReturnTransactionList
    findTransactionByID(
      _id: String
    ): Transaction
    findVendors(
      filter: String
      cursor: String
      limit: Int = 20
    ): ReturnVendorList
    findVendorByID(
      _id: String
    ): Vendor
    findWordByID(
      _id: String
    ): Word
    findWords(
      filter: String
      definition: String
      meaning: String
      cursor: String
      limit: Int = 20
    ): ReturnWords
    findRandomWords(
      filter: String
      limit: Int = 20
    ): ReturnRandomWords
    findAffixByID(
      _id: String
    ): Affix
    findAffixes(
      filter: String
      example: String
      meaning: String
      morpheme: String
      cursor: String
      limit: Int = 20
      ): ReturnAffixes
    findRandomAffixes(
      filter: String
      limit: Int = 20
    ): ReturnRandomAffixes
    findVerboByID(
      _id: String
    ): Verbo
    findVerbos(
      filter: String
      english: String
      irregular: Boolean = false
      reflexive: Boolean = false
      categoria_de_irregular: String
      cambiar_de_irregular: String
      terminacion: String
      grupo: Int = 0
      spanish: String
      cursor: String
      limit: Int = 20
    ): ReturnVerbos
    findRandomVerbos(
      filter: String,
      limit: Int = 20
    ): ReturnRandomVerbos
    findUserByID(
      _id: String
      ): ReturnAuthUser
    findUsers(
      filter: String
      cursorUser: String
      limit: Int = 20
    ): ReturnUserList
    getUser: ReturnAuthUser
    signIn(
      input: InputAuth!
    ): ReturnAuthUser!
  }

  type Mutation {
    createActivity(
      input: InputActivity!
    ): Activity!
    updateActivityByID(
      input: InputActivity!
    ): Activity!
    deleteActivityByID(
      _id: String!
    ): DeletedObjectByID!
    createBlogPost(
      input: InputBlogPost!
    ): BlogPost!
    updateBlogPostByID(
      input: InputBlogPost!
    ): BlogPost!
    deleteBlogPostByID(
      _id: String!
    ): DeletedObjectByID!
    createBudget(
      input: InputBudget!
    ): Budget!
    deleteBudgetByID(
      _id: String!
    ): Budget!
    updateBudgetByID(
      input: InputBudget!
    ): Budget!
    createComment(
      input: InputComment!
    ): Comment!
    updateCommentByID(
      input: InputComment!
    ): Comment!
    deleteCommentByID(
      _id: String!
    ): DeletedObjectByID!
    createCurrency(
      input: InputCurrency!
    ): Currency!
    updateCurrencyByID(
      input: InputCurrency!
    ): Currency!
    deleteCurrencyByID(
      _id: String!
    ): DeletedObjectByID!
    createFinancialAccount(
      input: InputFinancialAccount!
    ): FinancialAccount!
    updateFinancialAccountByID(
      input: InputFinancialAccount!
    ): FinancialAccount!
    deleteFinancialAccountByID(
      _id: String!
    ): DeletedObjectByID!
    createGame(
      input: InputGame!
    ): Game!
    updateGameByID(
      input: InputGame!
    ): Game!
    deleteGameByID(
      _id: String!
    ): DeletedObjectByID!
    createMedia(
      input: InputMedia!
    ): Media!
    updateMediaByID(
      input: InputMedia!
    ): Media!
    deleteMediaByID(
      _id: String!
    ): DeletedObjectByID!
    createPerson(
      input: InputPerson!
    ): Person!
    updatePersonByID(
      input: InputPerson!
    ): Person!
    deletePersonByID(
      _id: String!
    ): DeletedObjectByID!
    createPodcast(
      input: InputPodcast!
    ): Podcast!
    updatePodcastByID(
      input: InputPodcast!
    ): Podcast!
    deletePodcastByID(
      _id: String!
    ): DeletedObjectByID!
    createVendor(
      input: InputVendor!
    ): Vendor!
    deleteVendorByID(
      _id: String
      deleted: Boolean = false
      deletedCount: Int = 0
      justOne: Boolean = true
      message: String = "WILL DELETE"
    ): DeletedObjectByID!
    updateVendorByID(
      input: InputVendor!
    ): Vendor!
    createTool(
      input: InputTool!
    ): Tool!
    deleteToolByID(
      _id: String
      deleted: Boolean = false
      deletedCount: Int = 0
      justOne: Boolean = true
      message: String = "WILL DELETE"
    ): DeletedObjectByID!
    updateToolByID(
      input: InputTool!
    ): Tool!
    createTransaction(
      input: InputTransaction!
    ): Transaction!
    deleteTransactionByID(
      _id: String
      deleted: Boolean = false
      deletedCount: Int = 0
      justOne: Boolean = true
      message: String = "WILL DELETE"
    ): DeletedObjectByID!
    updateTransactionByID(
      input: InputTransaction!
    ): Transaction!
    createWord(input: InputWord!): Word!
    updateWordByID(input: InputMutateWord!): Word!
    deleteWordByID(
      _id: String
      deleted: Boolean = false
      deletedCount: Int = 0
      justOne: Boolean = true
      message: String = "WILL DELETE"
      ): DeletedObjectByID!
    createAffix(input: InputAffix!): Affix!
    updateAffixByID(
      input: InputMutateAffix!
    ): Affix!
    deleteAffixByID(
      _id: String
      deleted: Boolean = false
      deletedCount: Int = 0
      justOne: Boolean = true
      message: String = "WILL DELETE"
    ): DeletedObjectByID
    createVerbo(input: InputVerbo!): Verbo!
    updateVerboByID(input: InputMutateVerbo!): Verbo!
    deleteVerboByID(
      _id: String
      deleted: Boolean = false
      deletedCount: Int = 0
      justOne: Boolean = true
      message: String = "WILL DELETE"
      ): DeletedObjectByID!
    logIn(
      input: InputAuth!
    ): ReturnAuthUser!
    signUp(
      input: InputAuth!
    ): ReturnAuthUser
    updateUserByID(
      input: InputMutateUser!
    ): User!
    deleteUserByID(
      _id: String!
    ): DeletedObjectByID!
  }
`;