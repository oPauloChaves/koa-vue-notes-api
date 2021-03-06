'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findById = exports.User = undefined;

var findById = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(id) {
        var userData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _db2.default.query('\n            SELECT id, token, username, email, isAdmin\n            FROM koa_vue_notes_users\n            WHERE userId = ?\n            ', [id]);

                    case 3:
                        userData = _context.sent;
                        return _context.abrupt('return', userData[0]);

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0);
                        throw new Error('ERROR');

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7]]);
    }));

    return function findById(_x) {
        return _ref.apply(this, arguments);
    };
}();

require('dotenv/config');

var _db = require('../db/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(data) {
    _classCallCheck(this, User);

    if (!data) {
        return;
    }

    this.id = data.id;
    this.token = data.token;
    this.username = data.username;
    this.email = data.email;
    this.isAdmin = data.isAdmin;
};

exports.User = User;
exports.findById = findById;