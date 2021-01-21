-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2021 at 12:53 PM
-- Server version: 10.5.7-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ibdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(10) NOT NULL,
  `author` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `cat_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `author`, `title`, `image`, `description`, `cat_id`) VALUES
(1, 'Amish Tripathi', 'Sita: Warrior of Mithila', 'https://i.postimg.cc/kGDTNcs0/b01.jpg', 'India, 3400 BCE.\r\n\r\nIndia is beset with divisions, resentment and poverty. The people hate their rulers. They despise their corrupt and selfish elite. Chaos is just one spark away. Outsiders exploit these divisions. Raavan, the demon king of Lanka, grows increasingly powerful, sinking his fangs deeper into the hapless Sapt Sindhu.', 2),
(2, 'Gaurav Sharma', 'God of the Sullied ', 'https://i.postimg.cc/Z583sMfr/b03.jpg', 'Dating back to the middle of the ninth century when the world was in the grip of Kali Yuga, a scion of the Ikshvaku dynasty took birth, who would later be tested by time. Right from being deemed as ‘sullied’ and being out-casted by his villagers to meeting good people of the kingdom of Rudraputra and making friends, there was a kaleidoscopic shift, albeit a harsh one', 5),
(3, 'Rajamayyoor Sharma', 'Age of Azmoq', 'https://i.postimg.cc/j5ZBHv0T/b04.jpg', 'Azmoq is the rarest and most coveted metal on the planet. It’s the ultimate source and symbol of real power, and the Valantian Imperium controls it all in Valantia.\r\n\r\nOr so they thought…\r\n\r\nFor the first time in generations, the Valantian Imperium, masters of the Valantian continent have glimpsed the first', 5),
(4, 'Amish Tripathi', 'The Immortals of Meluha', 'https://i.postimg.cc/nLQvYhyh/b05.jpg', '1900 BC. In what modern Indians mistakenly call the Indus Valley Civilisation. The inhabitants of that period called it the land of Meluha a near perfect empire created many centuries earlier by Lord Ram, one of the greatest monarchs that ever lived. This once proud empire and its Suryavanshi rulers face severe perils as its primary river, the revered Saraswati, is slowly drying to extinction. They also face devastating terrorist', 2),
(5, 'Chetan B. Thakkar ', 'Avatar of Protector', 'https://i.postimg.cc/nzk38L0G/b02.jpg', 'I accidentally got to know that I had a superpower when I tried to save my friend and I got to know my real identity. I’m the 10th avatar of the god, Vishnu.\r\n', 5),
(6, 'Amish Tripathi', 'Raavan', 'https://i.postimg.cc/L8j9tdyM/b06.jpg', 'WITHOUT THE DARKNESS, LIGHT HAS NO PURPOSE.\r\n\r\nWITHOUT THE VILLAIN, WHAT WOULD THE GODS DO?\r\n\r\nINDIA, 3400 BCE.\r\n\r\nA land in tumult, poverty and chaos. Most people suffer quietly. A few rebel. Some fight for a better world. Some for themselves. Some don’t give a damn. Raavan. Fathered by one of the most illustrious sages of the time. Blessed by the Gods with talents beyond all. Cursed', 2),
(7, 'Chetan Bhagat', 'One Arranged Murder', 'https://i.postimg.cc/cJ2G2Xkc/b07.jpg', 'Keshav has set up an investigation agency with his best friend, Saurabh. Can the two amateur detectives successfully solve another murder case that affects them personally? And where will it leave their friendship?\r\n\r\n‘Ever since you found Prerna, I lost my best friend’ is what I told Saurabh. Hi, this is Keshav, and Saurabh, my best friend,', 1),
(8, 'Vikram Chandra', 'Sacred Games', 'https://i.postimg.cc/mghbnz2B/b08.jpg', 'Vikram Chandra\'s novel draws the reader deep into the life of Inspector Sartaj Singh—and into the criminal underworld of Ganesh Gaitonde, the most wanted gangster in India. It is is a story of friendship and betrayal, of terrible violence, of an astonishing modern city and its dark side.\r\n\r\nSeven years in the making, Sacred Games is an epic of exceptional richness and power. ', 1),
(9, 'Shatrujeet Nath', 'The Karachi Deception', 'https://i.postimg.cc/zf73ZZY1/b09.jpg', 'Echoing plot points from King’s epic Batman run, this sweeping tale is told across three timelines: the past, when the Bat and the Cat first fell in love', 1),
(10, 'Ruskin Bond', 'Ghost Stories From The Raj', 'https://i.postimg.cc/yYfJW3fS/b10.jpg', 'Ruskin Bond\'s readers range from nine to ninety. And if there are such things as ghosts there are probably a few who are reading him in the spirit world.', 3),
(11, 'Neil D\'Silva ', 'Maya\'s New Husband', 'https://i.postimg.cc/mgsbLL4F/b11.jpg', 'Maya teaches Biology in a Mumbai school. She is a hit with her students for her unconventional teaching techniques such as bringing a dead man\'s heart to school to explain her lessons. But, though she seems ebullient on the outside, within her own heart she harbors the pain of a recently and mysteriously deceased husband.', 3),
(12, 'Vijay Tendulkar', 'Kanyadaan', 'https://i.postimg.cc/NFmWSX5C/b12.jpg', 'Vijay Tendulkar has been in the vanguard of Indian theatre for almost 40 years. This play, translated from the original Marathi, is one of his most gripping, socially relevant ones.', 6),
(13, 'Sonali Dev', 'A Bollywood Affair', 'https://i.postimg.cc/6qKX9zJx/b13.png', 'Mili Rathod hasn’t seen her husband in twenty years—not since she was promised to him at the age of four. Yet marriage has allowed Mili a freedom rarely given to girls in her village. Her grandmother has even allowed her to leave India and study in America for eight months, all to make her the perfect modern wife. Which is exactly what Mili longs to be—if her husband would', 4),
(14, 'Vijay Tendulkar', 'Five Plays', 'https://i.postimg.cc/wBkPXznZ/b14.jpg', 'Vijay Tendulkar has been in the vanguard of Indian theater for almost forty years. These five plays, Silence!, Vultures, Sakharam, Encounter, and Kamala are some of his best-known, most socially relevant, and also most controversial work. Tendulkar\'s plays will interest anyone concerned with Indian theater and writing, as well as literature and drama students.', 6),
(15, 'Anuja Chauhan', 'Baaz', 'https://i.postimg.cc/sxJ98f4C/b15.jpg', '1971. The USSR-backed India-Mukti Bahini alliance is on the brink of war against the America-aided Pakistani forces. As the Cold War threatens to turn red hot, handsome, laughing Ishaan Faujdaar, a farm boy from Chakkahera, Haryana, is elated to be in the IAF, flying the Gnat, a tiny fighter plane nicknamed ‘Sabre Slayer’ for the devastation it has wrecked in the ranks of', 4),
(16, 'Arnab Ray', 'The Mine', 'https://i.postimg.cc/TwK3Ftjd/b16.jpg', 'At a secret mining facility somewhere in the deserts of Rajasthan, an ancient place of worship, with disturbing carvings on its dome, is discovered buried deep inside the earth. Soon the miners find themselves in the grip of terrifying waking nightmares. One tries to mutilate himself. Worse follows.', 3),
(17, 'Chetan Bhagat', '2 States', 'https://i.postimg.cc/KjbCBz86/b17.jpg', 'Love marriages around the world are simple: Boy loves girl. Girl loves boy. They get married. In India, there are a few more steps: Boy loves Girl. Girl loves Boy. Girl\'s family has to love boy. Boy\'s family has to love girl. Girl\'s Family has to love Boy\'s Family. Boy\'s family has to love girl\'s family. Girl and Boy still love each other. They get married.', 4),
(18, 'Vijay Tendulkar', 'Silence! the Court is in Session', 'https://i.postimg.cc/SKq80bjy/b18.jpg', 'Translated into and performed in several Indian and foreign languages, Shantata! Court Chalu Ahe is one of the best known works of Vijay Tendulkar. In some ways typical, in others uncharacteristic, this play was written for a Rangayan performance in 1968. Drafted mere days before its staging, it has since been broadcast by the BBC in English and made into a film by Satyadev Dubey. This edition of the play, titled Silence! The Court is in Session and translated by Priya Adarkar, also features an introduction by Kumud Mehta.', 6);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cat_id` int(11) NOT NULL,
  `cat_name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cat_id`, `cat_name`, `image`) VALUES
(1, 'Thriller', 'https://i.postimg.cc/zf73ZZY1/b09.jpg'),
(2, 'Fiction', 'https://i.postimg.cc/kGDTNcs0/b01.jpg'),
(3, 'Fantasy', 'https://i.postimg.cc/h4fpH1Ys/b04.jpg'),
(4, 'Horror', 'https://i.postimg.cc/yYfJW3fS/b10.jpg'),
(5, 'Drama', 'https://i.postimg.cc/wBkPXznZ/b14.jpg'),
(6, 'Romance', 'https://i.postimg.cc/6qKX9zJx/b13.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fname` varchar(255) DEFAULT 'not set',
  `lname` varchar(255) DEFAULT 'not set',
  `age` int(10) DEFAULT 18,
  `role` int(10) NOT NULL DEFAULT 555,
  `photoUrl` text NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'local'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `fname`, `lname`, `age`, `role`, `photoUrl`, `type`) VALUES
(2, 'shane', '$2b$10$ewemZ.oLASXUIWfUrjkDeOTCZUCpnhSlR3/Act2eQnvGg6mnGLOtG', 'shane123@gmail.com', 'Navoneel', 'Mukherjee', 27, 555, '', 'local'),
(3, 'john', '$2b$10$iLEz3tkVKeOCwuagcqhDUOV.Iswjc.I41unbnnFGiqK/gmstDCC3i', 'john@gmail.com', 'Indranil', 'Mukherjee', 31, 777, '', 'local'),
(11, 'mike', '$2b$10$vIS0W3LKhbx2tFh1GMYWhul7GWtIg4jnKU2C/NGux1pUG3QKMdNzO', 'mike-doe@excellent.com', 'Mike', 'Leming', 40, 555, 'https://i.pinimg.com/originals/dc/55/a0/dc55a0fec14d93d9cf6fa32c32f7c7f2.jpg', 'local'),
(19, 'test', '$2b$10$cSa3jm7cboNSJRTgNRFJg.GviAzr/pyfptMxwxmjdKP./CdxDtLlK', 'test@gmail.com', 'Indranil', 'Mukherjee', NULL, 555, 'https://image.shutterstock.com/image-vector/person-gray-photo-placeholder-man-260nw-1259815156.jpg', 'local');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `books_ibfk_1` (`cat_id`);
ALTER TABLE `books` ADD FULLTEXT KEY `description` (`description`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`cat_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
