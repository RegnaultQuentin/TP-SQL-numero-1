const name = "quentin-regnault"
const promo = "B2B"

const q1 = `
SELECT *
FROM Track
WHERE Milliseconds < (
	SELECT Milliseconds
	FROM Track
	WHERE TrackId = 3457)
`

const q2 = `
SELECT *
FROM Track
WHERE MediaTypeId = (
	SELECT MediaTypeId
	FROM Track
	WHERE Name = 'Rehab') 
`


const q3 = `
SELECT pl.PlaylistId, pl.Name, COUNT(t.TrackId), SUM(t.Milliseconds), AVG(t.Milliseconds)
FROM Playlist pl 
	JOIN PlaylistTrack pt 
		ON pl.PlaylistId = pt.PlaylistId
	JOIN Track t
		ON pt.TrackId = t.TrackId
GROUP BY pl.PlaylistId, pl.Name
`


const q4 = `
SELECT pl.PlaylistId, pl.Name
FROM Playlist pl 
	JOIN PlaylistTrack pt 
		ON pl.PlaylistId = pt.PlaylistId
	JOIN Track t
		ON pt.TrackId = t.TrackId
GROUP BY pl.PlaylistId, pl.Name
HAVING SUM(t.Milliseconds)>AVG(t.Milliseconds)
`


const q5 = `
SELECT  pl.PlaylistId, pl.Name
FROM Playlist pl 
	JOIN PlaylistTrack pt 
		ON pl.PlaylistId = pt.PlaylistId
	JOIN Track t
		ON pt.TrackId = t.TrackId
GROUP BY pl.PlaylistId, pl.Name
HAVING COUNT (t.TrackId) = (
	SELECT COUNT(t.TrackId)
	FROM Playlist pl 
	JOIN PlaylistTrack pt 
		ON pl.PlaylistId = pt.PlaylistId
	JOIN Track t
		ON pt.TrackId = t.TrackId
	WHERE pl.PlaylistId = 1)
OR COUNT(t.TrackId) = (
	SELECT COUNT(t.TrackId)
	FROM Playlist pl 
	JOIN PlaylistTrack pt 
		ON pl.PlaylistId = pt.PlaylistId
	JOIN Track t
		ON pt.TrackId = t.TrackId
	WHERE pl.PlaylistId = 13)
`



const q6 = `
SELECT *
FROM Customer c
JOIN Invoice i
	ON c.CustomerId = i.CustomerId
WHERE c.Country != 'France' AND i.Total>(
	SELECT MAX(Total)
	FROM Invoice
	WHERE BillingCountry = 'France')
`



const q7 = `
SELECT BillingCountry, MIN(Total), MAX(Total), AVG(Total), COUNT(Total), Total/(SELECT SUM(Total) FROM Invoice GROUP BY Total) Pct_To_Total 
FROM Invoice  
GROUP BY BillingCountry 
`
// Pas fini 

const q8 = ``
const q9 = ``
const q10 = ``
const q11 = ``
const q12 = ``
const q13 = ``
const q14 = ``
const q15 = ``
const q16 = ``
const q17 = ``
const q18 = ``
const q19 = ``
const q20 = ``
const q21 = ``
const q22 = ``
const q23 = ``
const q24 = ``
const q25 = ``
const q26 = ``









// NE PAS TOUCHER CETTE SECTION
const tp = {name: name, promo: promo, queries: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26]}
module.exports = tp
