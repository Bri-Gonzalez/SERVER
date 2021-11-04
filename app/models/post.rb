class Post < ApplicationRecord
  belongs_to :server
  belongs_to :user
  has_many :comments, dependent: :destroy
  validates :title, presence: true
end
