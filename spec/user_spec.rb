require 'spec_helper'

describe 'User' do
  let(:first_pseudonym){ User.make_pseudonym }
  let(:second_pseudonym) { User.make_pseudonym }

  it 'returns a new phrase of three random names each time' do
    expect(:first_pseudonym).not_to eql(:second_pseudonym) 
  end
end
