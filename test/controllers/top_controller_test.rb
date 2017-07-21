require 'test_helper'

class TopControllerTest < ActionDispatch::IntegrationTest
  test "should get counter" do
    get top_counter_url
    assert_response :success
  end

end
