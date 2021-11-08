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
@sylvannacrossing = User.create!(username: 'sylvannacrossing', email: 'sylvannacrossing@email.com', password: 'rufletut589')
@teamwolfgang = User.create!(username: 'teamwolfgang', email: 'teamwolfgang@email.com', password: 'wolf47fheid')
@celeste = User.create!(username: 'celeste001', email: 'celeste001@email.com', password: 'cel47d9chvi')
@isabelle = User.create!(username: 'L8yIsabelle', email: 'l8yisabelle@email.com', password: '3748fjb9f8j')
@islandlife = User.create!(username: 'islandlife4life', email: 'islandlife4life@email.com', password: '38djfjeis9e')
@timmy = User.create!(username: 'timmy_nook', email: 'timmynook@email.com', password: 'd7eu3rhfu3')
@tommy = User.create!(username: 'tommy_nook', email: 'tommynook@email.com', password: 'nook39rjfnsk')

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

@animalcrossingpost1 = Post.create!(
  title: "I can't wait for the new update to come out!",
  text: 'I really want to get Ione on my island',
  image: 'https://res.cloudinary.com/dfryxohde/image/upload/v1635980416/Server/animal-crossing-amiibo-card-series-5-jp-434-ione_akj2qd.png',
  server: @animalcrossing,
  user: @sylvannacrossing
)

@animalcrossingpost2 = Post.create!(
  title: "Giving Mom's Items away",
  text: 'Comment below with your favorite villager. First come, first serve.',
  image: 'https://res.cloudinary.com/dfryxohde/image/upload/v1636338979/Server/xa0aahgecxa51_zxtpok.jpg',
  server: @animalcrossing,
  user: @isabelle
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

@animalcrossingpost1comment1 = Comment.create!(
  text: 'I really want her as a villager too!',
  post: @animalcrossingpost1,
  user: @teamwolfgang
)

@animalcrossingpost1comment2 = Comment.create!(
  text: 'i am really looking forward to getting chabwick <3',
  post: @animalcrossingpost1,
  user: @celeste
)

@animalcrossingpost2comment1 = Comment.create!(
  text: 'Marshal!',
  post: @animalcrossingpost2,
  user: @islandlife
)

@animalcrossingpost2comment2 = Comment.create!(
  text: 'Peanut is my fav!',
  post: @animalcrossingpost2,
  user: @timmy
)

@animalcrossingpost2comment3 = Comment.create!(
  text: 'maple!',
  post: @animalcrossingpost2,
  user: @tommy
)

puts "#{Comment.count} comments created!"
