require 'spec_helper'

describe "Generating and displaying author name: ", js: true do
  context "home page: " do
    before :all do
      visit "/"
    end

    it "hides the author name text input on page load" do
      expect(page.find_field('reporter').visible?).to be_false
    end

    it "has no value for the author name text input on page load" do
      expect(find_field('reporter').value.blank?).to be_true
    end

    it "shows the author name text input on button click" do
      click_button "Generate your author name"
      expect(page.find_field('reporter').visible?).to be_true
    end

    it "fills in the author name text input on button click" do
      click_button "Generate your author name"
      expect(find_field('reporter').value.blank?).to be_false
    end

    
    # it "shows the author name text input after the pseudonym is fetched" do
    #   
    # end


    # it "replaces the placeholder on the text input" do
      
    #   expect(page).to have_no_content("just a sec")
    # end
    # it ""
  end
end