# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
Server.destroy_all
User.destroy_all

@hoonter = User.create!(username: 'hoonter123', email: 'hoonter123@email.com', password: 'budfi6v4lz6')
@ludwig = User.create!(username: 'ludwig_ost', email: 'ludwigost@email.com', password: 'ajc5tfoyf29')
@breezychu = User.create!(username: 'breezychu', email: 'breezychu@email.com', password: 'mieuqlox5ed')
@vicar = User.create!(username: 'vicar_amelia', email: 'vicaramelia@email.com', password: '4v7aefxixxx')
@ladymaria = User.create!(username: 'ladymariaxoxo', email: 'ladymaria@email.com', password: '59k2swo4vcl')
@huntersdream = User.create!(username: 'a_hunters_dream78', email: 'huntersdream@email.com', password: 'i5jeqapcj9s')
@godgamer = User.create!(username: 'godgamer', email: 'godgamer@email.com', password: 'leyrube655i')

puts "#{User.count} users created!"

@bloodborne = Server.create!(name: 'Bloodborne', user: @breezychu)
@sekrio = Server.create!(name: 'Sekiro', user: @breezychu)
@darksouls = Server.create!(name: 'Dark Souls', user: @breezychu)
@darksouls2 = Server.create!(name: 'Dark Souls 2', user: @breezychu)
@darksouls3 = Server.create!(name: 'Dark Souls 3', user: @breezychu)
@demonsouls = Server.create!(name: 'Demon Souls', user: @breezychu)
@godofwar = Server.create!(name: 'God of War', user: @breezychu)
@animalcrossing = Server.create!(name: 'Animal Crossing', user: @breezychu)
@pokemonunite = Server.create!(name: 'Pokemon Unite', user: @breezychu)
@pokemonswsh = Server.create!(name: 'Pokemon SWSH', user: @breezychu)
@letsgopikachu = Server.create!(name: "Let's Go, Pikachu", user: @breezychu)
@elderscrollsonline = Server.create!(name: 'Elder Scrolls Online', user: @breezychu)

puts "#{Server.count} servers created!"

@bloodbornepost1 = Post.create!(
  title: 'I got platinum!',
  image: 'https://res.cloudinary.com/dfryxohde/image/upload/v1635817375/Server/IMG_4753_vxnmg7.jpg',
  server: @bloodborne,
  user: @hoonter
)

@bloodbornepost2 = Post.create!(
  title: 'Anyone have any tips on how to knock Rom out of teleport?',
  server: @bloodborne,
  user: @ludwig
)

@bloodbornepost3 = Post.create!(
  title: 'Finally got BB deathless any %!!',
  text: 'https://www.twitch.tv/videos/1116832464',
  server: @bloodborne,
  user: @breezychu
)

puts "#{Post.count} posts created!"

@bloodbornepost1comment1 = Comment.create!(
  text: 'congrats!',
  post: @bloodbornepost1,
  user: @vicar
)

@bloodbornepost1comment2 = Comment.create!(
  text: 'congrats! I just got platinum a week ago!',
  post: @bloodbornepost1,
  user: @ladymaria
)

@bloodbornepost1comment3 = Comment.create!(
  text: 'nice!',
  post: @bloodbornepost1,
  user: @huntersdream
)

@bloodbornepost1comment4 = Comment.create!(
  text: 'took me forever to get all the weapons for platinum. congrats',
  post: @bloodbornepost1,
  user: @godgamer
)

puts "#{Comment.count} comments created!"
