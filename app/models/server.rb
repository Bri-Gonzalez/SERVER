class Server < ApplicationRecord
  belongs_to :user
  has_many :posts, dependent: :destroy
  validates :name, presence: true, uniqueness: { case_sensitive: false }
end
