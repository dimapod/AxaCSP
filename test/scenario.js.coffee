describe 'redirect', ->
  afterEach ->
    element("#logoutBtn").click()

  describe 'when unauthenticated', ->
    describe 'and accessing /', ->
      it 'should redirect to / after login', ->
        browser().navigateTo '/'
        expect(browser().location().url()).toContain "login"
        element(".password").click()
        waitFor(".wishlists")
        expect(browser().location().url()).toContain "/"

    describe 'and accessing /about', ->
      it 'should redirect to /about after login', ->
        browser().navigateTo '/#/about'
        expect(browser().location().url()).toContain "login"
        element(".password").click()
        waitFor("#about")
        expect(browser().location().url()).toContain "about"

    describe 'and accessing /login', ->
      it 'should redirect to / after login', ->
        browser().navigateTo '/#/login'
        expect(browser().location().url()).toContain "login"
        element(".password").click()
        waitFor(".wishlists")
        expect(browser().location().url()).toBe "/"

  describe 'when authenticated', ->
    beforeEach ->
      browser().navigateTo '/#/about'
      element(".password").click()
      waitFor("#about")

    describe 'and accessing /login', ->
      it 'should redirect to /', ->
        browser().navigateTo '/#/login'
        waitFor(".wishlists")
        expect(browser().location().url()).toBe "/"

    describe 'and logout', ->
      it 'should redirect to / after login', ->
        element("#logoutBtn").click()
        waitFor("#login")
        element(".password").click()
        waitFor(".wishlists")
        expect(browser().location().url()).toBe "/"




